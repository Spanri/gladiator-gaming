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
          disabled
        >
          <span
            :data-title="balance.length > 16 ? balance : undefined"
            class="header__profile-balance"
          >
            {{
              balance.length > 13 ? balance.substring(0, 13) + "..." : balance
            }}
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
      let num = 923456734534534534543346452245;
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
