import Vue from 'vue'
import App from './App.vue'
import Particles from "@tsparticles/vue";
import { loadFull } from "tsparticles";
import type { Engine } from '@tsparticles/engine';

Vue.config.productionTip = false


Vue.use(Particles, {
    init: async (engine: Engine) => {
        // you can initialize the tsParticles instance (main)
        // here, adding custom shapes or presets
        await loadFull(engine);
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
