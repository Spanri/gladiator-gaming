<template>
  <Header>
    <div class="header">
      <ButtonHeader to="/" side="left" class="header__title">
        Арена
      </ButtonHeader>
      <HeaderProfileContent class="header__content" />
      <button class="header__settings">
        <span class="header__settings-text">Настройки</span>
        <object
          class="header__settings-svg"
          type="image/svg+xml"
          :data="svgSettings"
          >нас</object
        >
      </button>
      <div class="header__right-buttons">
        <ButtonHeader
          to="/profile"
          side="right"
          class="header__profile"
          disabled
        >
          <span
            :data-title="balance.length > 8 ? balance : undefined"
            class="header__profile-balance"
          >
            {{ balance.length > 5 ? balance.substring(0, 5) + "..." : balance }}
            ₽
          </span>
        </ButtonHeader>
      </div>
    </div>
  </Header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderMyProfile",

  components: {
    Header: () => import("@/components/Header/Header.vue"),
    ButtonHeader: () => import("@/ui-components/ButtonHeader.vue"),
    HeaderProfileContent: () =>
      import("@/components/Header/HeaderProfileContent.vue")
  },

  data() {
    return {
      svgSettings: require("@/assets/settings.svg")
    };
  },

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
      let num = 922;
      return num.toLocaleString();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  //@include buttonHeader;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__title {
    margin: 35px 20px 20px 0;
  }

  &__profile {
    margin: 35px 0 20px 20px;
    text-decoration: none;

    &-balance {
      white-space: nowrap;

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
        white-space: normal;
        word-wrap: break-word;
        opacity: 0;
        z-index: 99999;
        max-width: 120px;
        visibility: hidden;
        font-size: 100%;
        position: absolute;
        top: 2.2em;
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

  &__settings {
    background: none;
    border: 0;
    color: white;
    font: 18px/21px Roboto Mono, Serif;
    margin-top: 80px;
    margin-right: -100px;

    display: flex;
    flex-direction: row;

    &-text {
      margin-right: 15px;
      margin-top: 5px;
    }

    &-svg {
      width: 30px;
    }

    &:hover {
      cursor: pointer;
      color: $accent;

      & #settings-svg {
        cursor: pointer;
        fill: $white;
      }
    }
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
