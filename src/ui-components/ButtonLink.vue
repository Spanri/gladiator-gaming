<template>
  <router-link :to="to" class="button-link" :class="`button-link__${side}`">
    <span>
      <slot />
    </span>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonLink",

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
.router-link-active {
  color: $white;

  &.button-link:before {
    background: $pre-accent;
    background: linear-gradient(90deg, $accent 0%, $pre-accent 100%);
    box-shadow: 0 0 25px $pre-accent;
  }
}

.button-link {
  border: 0;
  background: none;
  padding: 10px 15px;

  height: min-content;
  width: min-content;
  min-width: 90px;

  position: relative;
  display: inline-block;

  &__left {
    &.button-link:before {
      transform: skew(-170deg);
    }
  }

  &__right {
    &.button-link:before {
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
