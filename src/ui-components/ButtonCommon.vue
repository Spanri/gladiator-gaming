<template>
  <button class="button-common" :class="`button-common__${side}`">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonCommon",

  props: {
    side: {
      type: String,
      default: "right"
    }
  }
});
</script>

<style lang="scss" scoped>
.button-common {
  border: 0;
  background: none;
  padding: 10px 15px;

  height: min-content;
  width: min-content;
  min-width: 90px;

  position: relative;
  display: inline-block;

  &__left {
    &.button-common:before {
      transform: skew(-170deg);
    }
  }

  &__right {
    &.button-common:before {
      transform: skew(170deg);
    }
  }

  & > * {
    position: relative;
    font: normal normal bold 1rem/1.1875rem Roboto Mono, Serif; // 16/19
    color: $black;
    display: flex;
    justify-content: center;
    z-index: 2;
  }

  &:before {
    content: "";

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 1;
    background: $accent;
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;
    color: $white;

    &:before {
      background: transparent;
      background: $pre-accent;
      background: linear-gradient(90deg, $accent 0%, $pre-accent 100%);
      box-shadow: 0 0 25px $pre-accent;
      transition: 0.3s all ease;
    }
  }
}
</style>
