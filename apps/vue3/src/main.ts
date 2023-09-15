import { createApp } from "vue";
import Particles from "@tsparticles/vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(Particles);

app.mount("#app");
