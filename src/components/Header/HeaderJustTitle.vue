<template>
  <Header>
    <div class="header">
      <div class="header__content">
        <slot />
      </div>
    </div>
  </Header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderMyProfile",

  components: {
    Header: () => import("@/components/Header/Header.vue")
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  @include buttonHeader;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__content {
    margin: 80px auto 20px;
    color: $white;
    font: normal normal bold 18px/21px Roboto Mono, Serif;
  }
}

@media (max-width: 1030px) {
  .header {
    max-width: 800px;
  }
}

@media (max-width: 920px) {
  .header {
    max-width: 700px;
  }
}
</style>
