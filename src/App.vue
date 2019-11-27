<template>
  <div id="app">
    <main class="app__main">
      <router-view class="app__main-inner" />
    </main>
    <div class="app__block-wrapper">
      <Block class="app__block" />
    </div>
    <div class="app__friends-wrapper">
      <Friends class="app__friends" />
    </div>
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
    Friends: () => import("@/components/Friends/Friends.vue")
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

// @media (min-width: 1000px) {
.app {
  &__block {
    position: fixed;
    top: calc((100% - 600px) / 2);
    left: 0;

    &-wrapper {
      position: relative;
    }
  }

  &__friends {
    position: fixed;
    top: calc((100% - 600px) / 2);
    right: 0;

    &-wrapper {
      position: relative;
    }
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
// }
</style>
