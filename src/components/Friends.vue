<template>
  <div class="friends">
    <ButtonCommon>
      <span class="friends__text">Создать команду</span>
      <IconAddToFriends />
    </ButtonCommon>
    <div class="friends__search">
      <input>
    </div>
    <ButtonCommon>
      <span class="friends__text">Заявки</span>
      <IconCreateTeam />
    </ButtonCommon>
    <ButtonCommon>
      <span class="friends__text">Вызовы</span>
      <span>{{ zayvki }}</span>
      <IconChallenge />
    </ButtonCommon>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Friends",

  data() {
    return {
      zayvki: 3
    }
  },

  components: {
    ButtonCommon: () => import("@/ui-components/ButtonCommon.vue"),
    IconAddToFriends: () =>
      import("@/ui-components/icons/IconAddToFriends.vue"),
    IconChallenge: () => import("@/ui-components/icons/IconChallenge.vue"),
    IconCreateTeam: () => import("@/ui-components/icons/IconCreateTeam.vue"),
  }
});
</script>

<style lang="scss" scoped>
.friends {
  height: 550px;
  width: 250px;
  background: $black;
  color: $white;

  &__text {
    font: normal normal bold 9px/11px Roboto Mono, Serif;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 90px;
    background: $black;
  }

  &:before {
    top: -50px;
    transform: skewY(-15deg);
    border-top-left-radius: 20px;
  }

  &:after {
    bottom: -50px;
    transform: skewY(15deg);
    border-bottom-left-radius: 20px;
  }

  & > * {
    position: relative;
  }
}
</style>
