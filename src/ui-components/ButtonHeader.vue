<template>
  <router-link
    :to="to"
    class="button-header"
    :class="[`button-header__${side}`, disabled ? 'disabled' : '']"
  >
    <span class="button-header__span">
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

    disabled: {
      type: Boolean,
      default: false
    },

    to: {
      type: String,
      default: "/"
    }
  }
});
</script>

<style lang="scss" scoped>
.disabled {
  &.button-header {
    pointer-events: none;

    & > * {
      color: $white;
    }

    &:before {
      background: none;
      border-color: $accent;
    }
  }
}

.button-header {
  padding: 10px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: min-content;
  width: min-content;
  min-width: 120px;

  position: relative;

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
    font: normal normal bold 14px/16px Roboto Mono, Serif;
    color: $black;
    display: flex;
    justify-content: space-between;
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
    border: 1px solid transparent;
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;

    &.button-header > * {
      color: $white;
    }

    &:before {
      background: transparent;
      border: 1px solid $accent;
    }
  }
}
</style>
