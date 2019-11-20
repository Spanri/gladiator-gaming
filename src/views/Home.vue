<template>
  <div class="home">
    <Header class="home__header" />
    <div class="home__content">
      <span>Арена</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",

  components: {
    Header: () => import("@/components/Header/HeaderHome.vue")
  }
});
</script>

<style lang="scss" scoped>
.home {
  @include header;

  color: white;
}
</style>
