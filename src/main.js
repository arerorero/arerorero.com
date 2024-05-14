import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css"; // Importar estilos globais

createApp(App).use(router).mount("#app");
