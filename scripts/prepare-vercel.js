import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const root = process.cwd();

async function main() {
  const distPath = join(root, 'dist');
  const publicPath = join(root, 'public');

  // 1. Prepare Public Directory
  // We clear the public directory first to ensure no stale assets remain
  if (existsSync(publicPath)) {
    await rm(publicPath, { recursive: true, force: true });
    console.log(`Cleared existing ${publicPath}`);
  }

  const srcClient = join(distPath, 'client');
  
  if (existsSync(srcClient)) {
    await mkdir(publicPath, { recursive: true });
    await cp(srcClient, publicPath, { recursive: true });
    console.log(`Copied ${srcClient} contents to ${publicPath}`);
  }

  // 2. Ensure assets are in public/assets (redundant if already in dist/client/assets but safe)
  const srcAssets = join(srcClient, 'assets');
  const destAssets = join(publicPath, 'assets');
  if (existsSync(srcAssets) && !existsSync(destAssets)) {
    await cp(srcAssets, destAssets, { recursive: true });
    console.log(`Ensured assets are in ${destAssets}`);
  }
}

main().catch((error) => {
  console.error('Failed to prepare Vercel build:', error);
  process.exit(1);
});

