<template>
  <div class="content">
    <section class="content__info">
      <div class="content__img">Фото</div>
      <div class="content__general">
        <p class="content__nickname">
          {{
            profile.nickname.length > 35
              ? profile.nickname.substring(0, 35) + "..."
              : profile.nickname
          }}
        </p>
        <p class="content__status">
          {{
            profile.status.length > 35
              ? profile.status.substring(0, 35) + "..."
              : profile.status
          }}
        </p>
        <p class="content__soc-networks">HEADER 11</p>
      </div>
    </section>
    <section class="content__rating">
      <p class="content__rating-title">Рейтинг:</p>
      <p class="content__rating-value">
        {{ profile.csgo.rating.toLocaleString() }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderProfileContent",

  computed: {
    title() {
      return this.$route.meta.title;
    },

    profile() {
      return {
        nickname: "Nagibator_123",
        status: "Роза упала на лапу Азора",
        csgo: {
          rating: 1234
        }
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
.content {
  margin: 50px 30px 15px 30px;
  font: 12px/14px Roboto Mono, Serif;

  display: flex;
  flex-direction: row;

  &__info {
    display: flex;
    flex-direction: row;
  }

  &__rating {
    &-title {
      color: $white;
      font: 16px/19px Roboto Mono, Serif;
      text-align: right;
    }

    &-value {
      color: $accent;
      font: normal normal bold 24px/28px Roboto Mono, Serif;
      text-align: right;
    }

    & > * {
      margin: 0;
    }

    & > * + * {
      padding-top: 10px;
    }
  }

  &__img {
    min-width: 64px;
    background: $white;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  &__general {
    color: $white;
    min-width: 300px;
    padding: 0px 10px 5px 20px;

    & > * {
      margin: 0;
    }

    & > * + * {
      padding-top: 11px;
    }
  }
}
</style>
