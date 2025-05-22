import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx'],
      'text/javascript': ['js', 'jsx']
    }
  }
});