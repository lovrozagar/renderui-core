import react from '@vitejs/plugin-react'

const config = {
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
}

export default config
