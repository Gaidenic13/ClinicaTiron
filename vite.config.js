import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        blog:     resolve(__dirname, 'blog.html'),
        blogPost: resolve(__dirname, 'blog-post.html'),
      },
      output: {
        manualChunks: {
          three: ['three'],
          gsap:  ['gsap'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
