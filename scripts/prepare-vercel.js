import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const root = process.cwd();

async function main() {
  // 1. Assets
  const distPath = join(root, 'dist');
  const srcAssets = join(distPath, 'client', 'assets');
  const destAssets = join(root, 'public', 'assets');
  
  await rm(destAssets, { recursive: true, force: true });
  if (existsSync(srcAssets)) {
    await mkdir(destAssets, { recursive: true });
    await cp(srcAssets, destAssets, { recursive: true });
    console.log(`Copied ${srcAssets} to ${destAssets}`);
  }

  // 2. Favicon
  const srcFavicon = join(distPath, 'client', 'favicon.ico');
  const destFavicon = join(root, 'public', 'favicon.ico');
  if (existsSync(srcFavicon)) {
    await cp(srcFavicon, destFavicon);
    console.log(`Copied ${srcFavicon} to ${destFavicon}`);
  }
}

main().catch((error) => {
  console.error('Failed to prepare Vercel build:', error);
  process.exit(1);
});
