import type { App } from "vue-demi";
import Particles from "./components/vue-particles.vue";
import { type Engine, tsParticles } from "@tsparticles/engine";

export const ParticlesPlugin = {
    install(app: App, options: { init?: (engine: Engine) => Promise<void> }): void {
        (async () => {
            if (options.init) {
                await options.init(tsParticles);
            }
        })().then(() => {
            app.component("vue-particles", Particles);
        });
    },
};

export { Particles as ParticlesComponent };
export default ParticlesPlugin;
