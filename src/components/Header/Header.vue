<template>
  <header class="header">
    <div :data-title="title" class="header__title">
      <span class="header__title-text">{{ title }}</span>
    </div>
    <component class="header__main" :is="component" />
    <div class="header__profile">
      <div class="header__profile-data">
        <span
          :data-title="nickname.length > 16 ? nickname : undefined"
          class="header__profile-nickname"
        >
          {{
            nickname.length > 16 ? nickname.substring(0, 16) + "..." : nickname
          }}
        </span>
        <span
          :data-title="balance.length > 16 ? balance : undefined"
          class="header__profile-balance"
        >
          {{ balance.length > 13 ? balance.substring(0, 13) + "..." : balance }}
          ₽
        </span>
      </div>
      <div class="header__profile-logo">
        Лого
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  components: {
    HeaderAuthFalse: () => import("@/components/Header/HeaderAuthFalse.vue"),
    HeaderAuthTrueProfileTrue: () =>
      import("@/components/Header/HeaderAuthTrueProfileTrue.vue"),
    HeaderAuthTrueProfileFalse: () =>
      import("@/components/Header/HeaderAuthTrueProfileFalse.vue")
  },

  computed: {
    title() {
      return this.$route.meta.title;
    },

    isAith() {
      return true;
    },

    component() {
      if (this.isAith && this.$route.meta.profile) {
        return "HeaderAuthTrueProfileTrue";
      } else if (this.isAith && !this.$route.meta.profile) {
        return "HeaderAuthTrueProfileFalse";
      } else {
        return "HeaderAuthFalse";
      }
    },

    nickname() {
      let nickname =
        "Nagibator_134_million_alyh_roz_million_alyh_roz_million_alyh_roz";
      return nickname;
    },

    balance() {
      /**
       * если слишком больше число, оно
       * неправильно обрабатывает
       */
      let num = 9234567;
      return num.toLocaleString();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  max-width: 900px;
  height: 100%;
  background: $black;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  &__title {
    margin: 20px;
    margin-left: 0px;
    padding: 5px 10px;

    font: normal, normal, bold, 14px/16px, Roboto Mono, Serif;
    color: $black;

    display: flex;
    align-items: center;
    height: min-content;

    position: relative;

    &-text {
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
      transform: skew(-170deg);
      background: $accent;
      border: 1px solid transparent;
      border-radius: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $white;

      &:before {
        background: transparent;
        border: 1px solid $accent;
      }
    }
  }

  &__main {
  }

  &__profile {
    margin: 20px;
    margin-right: 0px;
    padding: 5px 10px;

    font: normal, normal, bold, 14px/16px, Roboto Mono, Serif;
    color: $black;

    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;

    &-data {
      display: flex;
      flex-direction: column;
    }

    &-logo {
      display: flex;
      align-items: center;
      margin: 8px;
    }

    &-nickname,
    &-balance {
      &[data-title]:hover:after,
      &[data-title]:hover:before {
        opacity: 1;
        transition: all 0.3s ease-in;
        visibility: visible;
      }

      &[data-title]:after,
      &[data-title]:before {
        content: attr(data-title);
        padding: 5px 10px;
        white-space: nowrap;
        opacity: 0;
        z-index: 99999;
        visibility: hidden;
        font-size: 100%;

        position: absolute;
        bottom: -2.2em;
        right: 0;
      }

      &[data-title]:after {
        // background: $black;
        color: $black;
      }

      &[data-title]:before {
        content: attr(data-title);
        color: transparent;
        transform: skew(170deg);
        border: 1px solid $accent;
        border-radius: 5px;
        background-color: $accent;
      }

      &[data-title] {
        position: relative;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 1;
      transform: skew(170deg);
      background: $accent;
      border-radius: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $white;

      &:before {
        background: transparent;
        border: 1px solid $accent;
      }
    }

    & > * {
      text-align: right;
      z-index: 2;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 70px;
    background: $black;
  }

  &:before {
    left: -40px;
    transform: skewX(15deg);
    border-bottom-left-radius: 20px;
  }

  &:after {
    right: -40px;
    transform: skewX(-15deg);
    border-bottom-right-radius: 20px;
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
