import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const root = process.cwd();

async function main() {
  const distPath = join(root, 'dist');
  const publicPath = join(root, 'public');

  // 1. Prepare Public Directory
  // We copy everything from dist/client to public so Vercel can serve it statically
  const srcClient = join(distPath, 'client');
  
  if (existsSync(srcClient)) {
    // We don't want to delete the whole public dir if it contains other things (like api/ is at root though)
    // But since outputDirectory is "public", we should ensure it's clean for the assets
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

