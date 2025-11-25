import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const repoName = 'Tellegram_Miny-App-t_00'; 

export default defineConfig({
  plugins: [vue()],
  base: `/${repoName}/`, 
});
