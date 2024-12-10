import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "../vuetify";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap's JavaScript bundle (for components like modals, tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create and mount the Vue app
createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount("#app");
