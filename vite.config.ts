import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Thêm module path của Node.js để tạo đường dẫn tuyệt đối

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: { outDir: 'dist' },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        additionalData: `@import "@/styles/_mixins.scss";`
      }
    },
    postcss: {
      plugins: [
        // Thêm các plugin PostCSS khác nếu cần
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias chính cho thư mục src
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'styles': path.resolve(__dirname, './src/styles'),
      'services': path.resolve(__dirname, './src/services'),
      'utils': path.resolve(__dirname, './src/utils'),
    }
  }
});