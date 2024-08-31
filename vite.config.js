import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  build: {
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
=======
    build: {
        rollupOptions: {
            output:{
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
>>>>>>> 8772a7cfcc1ce5e6181667d7025ffd6923ba4e66
                }
            }
        }
    }
<<<<<<< HEAD
}
=======
>>>>>>> 8772a7cfcc1ce5e6181667d7025ffd6923ba4e66
})
