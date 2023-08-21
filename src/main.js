import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"

const app = createApp(App);

// Use the router with the Vue app
app.use(router);

app.mount("#app");