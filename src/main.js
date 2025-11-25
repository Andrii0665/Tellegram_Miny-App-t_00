import { createApp } from 'vue';
import { init } from '@telegram-apps/sdk-vue';
import App from './App.vue';

// Инициализация SDK
init();

const app = createApp(App);
app.mount('#app');
