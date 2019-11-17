<template>
  <div class="header">
    <div :data-title="title" class="header__title button">
      <span class="header__title-text">{{ title }}</span>
    </div>
    <div class="header__content">
      <div class="header__content-img">Фото</div>
      <div class="header__content-info">
        <span>{{ profile.nickname }}</span>
        <span>{{ profile.status }}</span>
        <span>HEADER 11</span>
      </div>
    </div>
    <div class="header__right-buttons">
      <div class="header__profile button">
        <div class="header__profile-data">
          <span
            :data-title="nickname.length > 16 ? nickname : undefined"
            class="header__profile-nickname"
          >
            {{
              nickname.length > 16
                ? nickname.substring(0, 16) + "..."
                : nickname
            }}
          </span>
          <span
            :data-title="balance.length > 16 ? balance : undefined"
            class="header__profile-balance"
          >
            {{
              balance.length > 13 ? balance.substring(0, 13) + "..." : balance
            }}
            ₽
          </span>
        </div>
        <div class="header__profile-logo">
          Лого
        </div>
      </div>
      <div class="header__"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderAuthTrueProfileTrue",

  computed: {
    title() {
      return this.$route.meta.title;
    },

    profile() {
      return {
        nickname: "Nagibator_123",
        status: "Роза упала на лапу Азора"
      };
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
  @include button;
  max-width: 900px;
  height: 100%;
  background: $black;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  &__title {
    margin: 35px 20px 20px 0;
  }

  &__content {
    margin: 30px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;

    &-img {
      min-width: 64px;
      background: $white;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    &-info {
      display: flex;
      flex-direction: column;

      padding: 5px 10px 5px 20px;
      color: $white;
      min-width: 300px;
    }
  }

  &__profile {
    margin: 10px 0 20px 20px;

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

    & > * {
      text-align: right;
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
