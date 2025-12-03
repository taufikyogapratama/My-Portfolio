import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ui from "@nuxt/ui/vue-plugin";
import router from "./router/index";
// import { createUI } from "@nuxt/ui-vue";

createApp(App).use(ui).use(router).mount("#app");
