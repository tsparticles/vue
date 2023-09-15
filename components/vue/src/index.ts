import type { App } from "vue-demi";
import Particles from "./components/Particles.vue";

export const ParticlesPlugin = {
    install(app: App): void {
        app.component("Particles", Particles);
        app.component("vue-particles", Particles);
    },
};

export { Particles as ParticlesComponent };
export default ParticlesPlugin;
