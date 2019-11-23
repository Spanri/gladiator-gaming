<template>
  <Header>
    <div class="header">
      <ButtonHeader to="/" side="left" class="header__title">
        Арена
      </ButtonHeader>
      <HeaderProfileContent class="header__content" />
      <div class="header__right-buttons">
        <ButtonHeader
          to="/profile"
          side="right"
          class="header__profile"
          @mouseover.native="fillProfileButton = 'white'"
          @mouseleave.native="fillProfileButton = '#11161B'"
        >
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
          <IconProfileButton
            class="header__profile-logo"
            :fill="fillProfileButton"
          />
        </ButtonHeader>
        <div class="header__interaction">
          <ButtonHeader
            title="Добавить в друзья"
            class="header__interaction-button"
            @mouseover.native="fillAddToFriends = 'white'"
            @mouseleave.native="fillAddToFriends = '#11161B'"
          >
            <IconAddToFriends :fill="fillAddToFriends" />
          </ButtonHeader>
          <ButtonHeader
            title="Бросить вызов"
            class="header__interaction-button"
            @mouseover.native="fillChallenge = 'white'"
            @mouseleave.native="fillChallenge = '#11161B'"
          >
            <IconChallenge :fill="fillChallenge" />
          </ButtonHeader>
          <ButtonHeader
            title="Создать команду"
            class="header__interaction-button"
            @mouseover.native="fillCreateTeam = 'white'"
            @mouseleave.native="fillCreateTeam = '#11161B'"
          >
            <IconCreateTeam :fill="fillCreateTeam" />
          </ButtonHeader>
        </div>
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
    IconProfileButton: () =>
      import("@/ui-components/icons/IconProfileButton.vue"),
    IconAddToFriends: () =>
      import("@/ui-components/icons/IconAddToFriends.vue"),
    IconChallenge: () => import("@/ui-components/icons/IconChallenge.vue"),
    IconCreateTeam: () => import("@/ui-components/icons/IconCreateTeam.vue"),
    HeaderProfileContent: () =>
      import("@/components/Header/HeaderProfileContent.vue")
  },

  data() {
    return {
      fillProfileButton: "#11161B",
      fillAddToFriends: "#11161B",
      fillChallenge: "#11161B",
      fillCreateTeam: "#11161B"
    };
  },

  computed: {
    title() {
      return (this as any).$route.meta.title;
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
      let num = 923456745454545454545;
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

  &__interaction {
    display: flex;
    margin-top: -5px;
    margin-left: 10px;

    &-button {
      min-width: 38px;
      height: 20px;
      z-index: 1;

      & + & {
        margin-left: 15px;
      }
    }
  }

  &__profile {
    margin: 10px 0 20px 20px;
    text-decoration: none;

    &-data {
      display: flex;
      flex-direction: column;
    }

    &-logo {
      display: flex;
      align-items: center;
      margin-left: 8px;
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
        opacity: 0;
        z-index: 5;
        visibility: hidden;
        max-width: 200px;
        padding: 5px 10px;
        white-space: normal;
        word-wrap: break-word;
        font-size: 100%;
        position: absolute;
        top: 1.5em;
        right: 0;
      }

      &[data-title]:after {
        // background: $black;
        color: $black;
        z-index: 6;
      }

      &[data-title]:before {
        color: transparent;
        transform: skew(170deg);
        border: 1px solid $black;
        border-radius: 5px;
        background-color: $accent;
        z-index: 6;
      }

      &[data-title] {
        position: relative;
      }
    }

    & > * {
      text-align: right;
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
