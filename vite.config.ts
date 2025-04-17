import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] }) // Generates TypeScript declaration files
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactDesignSystem',
      fileName: (format) => `react-design-system.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Ensure CSS files are included in the build with the correct name
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          if (assetInfo.name === 'devk-react-ui.css') return 'styles.css';
          return assetInfo.name || '';
        },
      },
    },
    // Ensure CSS is extracted to a separate file
    cssCodeSplit: false,
  },
})