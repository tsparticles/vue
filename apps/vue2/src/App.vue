<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <vue-particles id="tsparticles" :options="options" :particlesInit="particlesInit"/>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import configs from "@tsparticles/configs";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default class App extends Vue {
  options = configs.basic;

  async particlesInit(engine: Engine) {
    await loadFull(engine);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
