import { join, dirname } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

// Forced import to ensure Vercel includes this dependency in the function bundle
// @ts-ignore
import * as _reactStart from '@tanstack/react-start';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function getHandler() {
  // Try multiple possible root locations to be extremely robust on Vercel
  const possibleRoots = [
    process.cwd(),
    join(__dirname, '..'),
    '/var/task'
  ];

  let lastError;
  for (const root of possibleRoots) {
    try {
      const handlerPath = join(root, 'dist', 'server', 'index.js');
      const url = pathToFileURL(handlerPath).href;
      const m = await import(url);
      const handler = m.default ?? m.w ?? m.workerEntry ?? m;
      if (handler && typeof handler.fetch === 'function') {
        return handler;
      }
    } catch (e) {
      lastError = e;
    }
  }
  
  throw lastError || new Error('Could not find or initialize server handler');
}

function getRequestUrl(req) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  // Ensure the URL is correctly constructed for the SSR handler
  return new URL(req.url ?? '', `${protocol}://${host}`);
}

function createFetchRequest(req) {
  const url = getRequestUrl(req);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(key, item));
    } else {
      headers.append(key, String(value));
    }
  }

  return new Request(url.toString(), {
    method: req.method,
    headers,
    // ReadableStream body from IncomingMessage
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
    // @ts-ignore - node-fetch/undici specific
    duplex: 'half'
  });
}

function setResponseHeaders(res, response) {
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }
}

export default async function handlerFunction(req, res) {
  try {
    const handler = await getHandler();
    const request = createFetchRequest(req);
    const response = await handler.fetch(request, {}, {});

    res.statusCode = response.status;
    setResponseHeaders(res, response);

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error('SSR Bridge Error:', error);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end(`
      <html>
        <body style="background: #111; color: #fff; font-family: sans-serif; padding: 40px; line-height: 1.6;">
          <h1 style="color: #ff4444;">Whisky Hub Deployment Error</h1>
          <p>The server-side renderer failed to initialize or encountered a fatal error.</p>
          <div style="background: #222; padding: 20px; border-radius: 8px; border: 1px solid #444; margin-top: 20px;">
            <p><strong>Error Message:</strong> ${error.message}</p>
            <pre style="overflow: auto; font-size: 13px; color: #aaa;">${error.stack}</pre>
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #888;">
            Diagnostics: cwd=${process.cwd()} | dirname=${__dirname}
          </p>
        </body>
      </html>
    `);
  }
}

