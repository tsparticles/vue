import { createApp } from "vue";
import Particles from "@tsparticles/vue";
import App from "./App.vue";

import "./assets/main.css";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const app = createApp(App);

app.use(Particles, {
    init: async (engine: Engine) => {
        // you can initialize the tsParticles instance (main)
        // here, adding custom shapes or presets
        await loadFull(engine);
    }
}); /*.use(Particles, {
    init: async (engine: Engine) => {
        // you can initialize the tsParticles instance (main)
        // here, adding custom shapes or presets
        await loadFull(engine);
    }
});*/

app.mount("#app");
