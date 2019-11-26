<template>
  <div class="block">
    <div class="block__before"></div>
    <div class="block__content"></div>
    <!-- <iframe
      class="block__content"
      frameborder="0"
      scrolling="no"
      src="https://www.deepl.com/ru/translator#ru/en/"
      marginwidth="0"
      marginheight="0"
      width="1024"
      height="1000"
    >
      <p>Этот блок не поддерживается вашим браузером.</p>
    </iframe> -->
    <!-- <vue-friendly-iframe
      class="block__content"
      src="https://www.deepl.com/ru/translator#ru/en/"
      @load="onLoad"
      @document-load="onDocumentLoad"
      @click="window.open('https://www.somewebsite.com', '_blank')"
      marginwidth="0"
      marginheight="0"
      frameborder="0"
      scrolling="no"
    /> -->
    <div class="block__after"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Block",

  computed: {
    data(): string {
      return require("@/assets/game.jpg");
    }
  }
});
</script>

<style lang="scss" scoped>
.block {
  height: 550px;
  width: 250px;
  background: $black;
  color: $white;
  z-index: 5;

  &__content {
    // min-height: calc(100% + 150px);
    height: 84%;
    width: 100%;
    z-index: 1;

    margin-top: -83px;
    // overflow: hidden;

    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0% 100%);
  }

  &__before,
  &__after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 90px;
    background: $black;
    z-index: 0;
  }

  &__before {
    top: -50px;
    transform: skewY(15deg);
    border-top-right-radius: 20px;
  }

  &__after {
    bottom: -50px;
    transform: skewY(-15deg);
    border-bottom-right-radius: 20px;
  }

  & > * {
    position: relative;
  }
}

@media (max-height: 600px) {
  .block {
    height: calc(100% + 10px);

    &__before,
    &__after {
      height: 0;
    }
  }
}
</style>
