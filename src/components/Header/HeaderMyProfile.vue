<template>
  <Header>
    <div class="header">
      <ButtonHeader to="/" side="left" class="header__title">
        Арена
      </ButtonHeader>
      <div class="header__content">
        <div class="header__content-img">Фото</div>
        <div class="header__content-info">
          <span>{{
            profile.nickname.length > 35
              ? profile.nickname.substring(0, 35) + "..."
              : profile.nickname
          }}</span>
          <span>{{
            profile.status.length > 35
              ? profile.status.substring(0, 35) + "..."
              : profile.status
          }}</span>
          <span>HEADER 11</span>
        </div>
      </div>
      <div class="header__right-buttons">
        <ButtonHeader to="/profile" side="right" class="header__profile">
          <div class="header__profile-data">
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
    ButtonHeader: () => import("@/ui-components/ButtonHeader.vue")
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
      let num = 9234567;
      return num.toLocaleString();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  @include buttonHeader;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__title {
    margin: 35px 20px 20px 0;
  }

  &__content {
    margin: 50px 30px 15px 30px;

    display: flex;
    flex-direction: row;

    font: 12px/14px Roboto Mono, Serif;

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

      padding: 0px 10px 5px 20px;
      color: $white;
      min-width: 300px;

      & > * + * {
        padding-top: 11px;
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
