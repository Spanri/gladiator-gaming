<template>
  <Header>
    <div class="header">
      <ButtonHeader to="/" side="left" class="header__title">
        Арена
      </ButtonHeader>
      <HeaderProfileContent class="header__content" />
      <div class="header__right-buttons">
        <ButtonHeader
          :to="'/users/' + profile.nickname"
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
        <button
          class="header__settings"
          @mouseover="fill = 'rgb(72, 109, 109)'"
          @mouseleave="fill = '#83E4E4'"
        >
          <IconSettings class="header__settings-svg" :fill="fill" />
          <span class="header__settings-text">Настройки</span>
        </button>
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
    IconSettings: () => import("@/ui-components/icons/IconSettings.vue"),
    HeaderProfileContent: () =>
      import("@/components/Header/HeaderProfileContent.vue")
  },

  data() {
    return {
      fill: "#83E4E4"
    };
  },

  computed: {
    // через mapgetters
    profile() {
      return {
        nickname: "Nagibator_123",
        status: "Роза упала на лапу Азора",
        balance: 922
      };
    },

    balance() {
      /**
       * если слишком больше число, оно
       * неправильно обрабатывает
       */
      return (this as any).profile.balance.toLocaleString();
    }
  }
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__title {
    margin: 35px 20px 20px 0;
  }

  &__content {
    margin: 35px 30px 25px 30px;
  }

  &__right-buttons {
    z-index: 2;
  }

  &__profile {
    margin: 35px 0 11px 20px;
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
        border: 1px solid $black;
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
    color: $white;
    font: 0.75rem/0.875rem Roboto Mono, Serif; // 12/14
    margin-top: 0px;
    margin-left: 17px;
    padding: 0;

    display: flex;
    flex-direction: row;

    &-text {
      margin-top: 5px;
    }

    &-svg {
      margin-right: 12px;
      width: 16px;
    }

    &:hover {
      cursor: pointer;
      color: $gray;
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
