<template>
  <router-link :to="to" class="button-header" :class="`button-header__${side}`">
    <span>
      <slot />
    </span>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonHeader",

  props: {
    side: {
      type: String,
      default: "right"
    },

    to: {
      type: String,
      default: "/"
    }
  }
});
</script>

<style lang="scss" scoped>
.button-header {
  border: 0;
  background: none;
  padding: 5px 10px;

  height: min-content;
  width: min-content;

  position: relative;
  display: inline-block;

  &__left {
    &.button-header:before {
      transform: skew(-170deg);
    }
  }

  &__right {
    &.button-header:before {
      transform: skew(170deg);
    }
  }

  & > * {
    font: normal normal bold 16px/19px Roboto Mono, Serif;
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

    & > * {
      color: $white;
      transition: 0.3s all ease;
    }

    &:before {
      background: transparent;
      transition: 0.3s all ease;
    }
  }
}
</style>
