import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { onClickOutside } from './utils/onClickOutside';

const app = createApp(App);
app.directive('on-click-outside', onClickOutside);
app.mount('#app');
