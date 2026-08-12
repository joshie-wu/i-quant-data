import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://joshie-wu.gitlab.io',
  base: '/i-quant-data',
  outDir: 'public',
  publicDir: 'static',
  integrations: [mdx()],
});