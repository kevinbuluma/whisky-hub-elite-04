import handlerModule from '../dist/server/index.js';

const handler = handlerModule.default ?? handlerModule.w ?? handlerModule.workerEntry ?? handlerModule;

function getRequestUrl(req) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
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
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
  });
}

function setResponseHeaders(res, response) {
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }
}

export default async function handlerFunction(req, res) {
  try {
    const request = createFetchRequest(req);
    const response = await handler.fetch(request, {}, {});

    res.statusCode = response.status;
    setResponseHeaders(res, response);

    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/plain; charset=utf-8');
    res.end(`Internal Server Error: ${error.message}\n${error.stack}`);
  }
}
