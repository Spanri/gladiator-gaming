<template>
  <div id="app">
    <main class="app__main">
      <router-view class="app__main-inner" />
    </main>
    <Footer class="app__footer" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",

  components: {
    Footer: () => import("@/components/Footer.vue")
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

@media (min-width: 1000px) {
  .app {
    &__header,
    &__footer {
      margin: 0 auto;
    }

    &__main {
      margin: 0 auto auto;
    }
  }
}
</style>
