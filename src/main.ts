import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import firebase from './plugins/firebase';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(firebase, { name: "Pyown-Kun" });

app.mount('#app');
