import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Migrated from Create React App. React 16.13 has no automatic JSX runtime
// (added in 16.14), so we use the classic runtime — every file already does
// `import React from 'react'`.
//
// CRA keeps JSX inside .js files. Vite/esbuild only treats .jsx/.tsx as JSX by
// default, so we point esbuild's `jsx` loader at src/*.js (both for the dev
// transform via `esbuild.include` and for dependency pre-bundling via
// `optimizeDeps`). This avoids having to rename every file to .jsx.
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    port: 3000,
    open: true,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  build: {
    outDir: 'build',
  },
})
