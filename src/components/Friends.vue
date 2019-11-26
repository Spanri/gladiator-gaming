<template>
  <div class="friends">
    <div class="friends__create-team-wrapper">
      <ButtonCommon class="friends__create-team friends__button">
        <span class="friends__text">Создать команду</span>
        <IconCreateTeam width="40" />
      </ButtonCommon>
    </div>
    <div class="friends__search">
      <Search class="friends__search-svg" />
      <input class="friends__input" v-model="search" />
    </div>
    <ButtonCommon class="friends__requests friends__button">
      <span class="friends__text">Заявки</span>
      <span class="friends__requests-number">{{ requests }}</span>
      <IconAddToFriends />
    </ButtonCommon>
    <ButtonCommon class="friends__challenge friends__button">
      <span class="friends__text">Вызовы</span>
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
      requests: 3,
      search: "dfdf"
    };
  },

  components: {
    ButtonCommon: () => import("@/ui-components/ButtonCommon.vue"),
    Search: () => import("@/ui-components/Search.vue"),
    IconAddToFriends: () =>
      import("@/ui-components/icons/IconAddToFriends.vue"),
    IconChallenge: () => import("@/ui-components/icons/IconChallenge.vue"),
    IconCreateTeam: () => import("@/ui-components/icons/IconCreateTeam.vue")
  }
});
</script>

<style lang="scss" scoped>
.button-common > * {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
}

.friends {
  height: 550px;
  width: 210px;
  background: $black;
  color: $white;
  padding: 20px;

  &__button {
    min-width: 100px !important;
    padding: 5px 10px !important;

    & > * {
      justify-content: space-between;
    }
  }

  &__requests-number {
    font: normal normal bold 0.5625rem/0.6875rem Roboto Mono, Serif; // 9/11
    margin-top: -3px;
    margin-right: -26px;
    margin-left: 26px;
  }

  &__text {
    font: normal normal bold 0.5625rem/0.6875rem Roboto Mono, Serif; // 9/11
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__input {
    width: calc(100% - 30px);
    border: 0;
    border-bottom: 1px solid $accent;
    color: $white;
    font: 0.75rem/0.875rem Roboto Mono, Serif; // 12/14
    background: transparent;
    margin: 20px;
    margin-right: 0;
    margin-left: -15px;
    padding-left: 25px;
    padding-bottom: 7px;
    display: inline-block;
  }

  &__create-team {
    &-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  &__search {
    &-svg {
      display: inline-block;
      margin-bottom: -2px;
    }
  }

  &__challenge {
    display: relative;
    top: 16px;
    margin-left: 7px;

    & .friends__text {
      margin-right: 7px;
    }
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
