<template>
  <div>
    <NuxtWelcome />
    <vue-particles
      id="tsparticles"
      :options="config"
      @particles-loaded="particlesLoaded"
    />
  </div>
</template>
<script setup lang="ts">
import configs from "@tsparticles/configs";
import { ref } from "vue";
import { type Container, tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const config = ref({});

(async () => {
  if(process.client) {
    await loadFull(tsParticles)
    config.value = configs.basic
  }
})();

const particlesLoaded = (container: Container) => {
  console.log(container)
}

</script>
<style>
.bg-white {
  background: none !important;
}
</style>
