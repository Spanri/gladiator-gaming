<template>
  <div id="app">
    <main class="app__main">
      <Block class="app__block" />
      <router-view class="app__main-inner" />
      <Friends class="app__friends" />
    </main>
    <Footer class="app__footer" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    Footer: () => import("@/components/Footer.vue"),
    Block: () => import("@/components/Block.vue"),
    Friends: () => import("@/components/Friends.vue")
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100vw;
  min-height: 100vh;

  background-image: url("./assets/background.jpg");
  background-position: center 0%;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

@media (min-width: 1000px) {
  .app {
    &__block {
      position: absolute;
      margin-top: 250px;
      left: 0;
    }

    &__friends {
      position: absolute;
      margin-top: 250px;
      right: 0;
    }

    &__footer {
      margin: 0 auto;
    }

    &__main {
      margin: 0 auto auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
