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
        <p v-if="!myProfile" class="content__status">
          {{
            profile.status.length > 35
              ? profile.status.substring(0, 35) + "..."
              : profile.status
          }}
        </p>
        <p
          v-if="myProfile"
          v-show="!statusChange"
          @click="inputStatus"
          class="content__status content__status-change"
        >
          {{
            profile.status.length > 35
              ? profile.status.substring(0, 35) + "..."
              : profile.status
          }}
        </p>
        <!-- @focusout="inputStatus" -->
        <input
          v-if="myProfile"
          v-show="statusChange"
          v-click-outside="inputStatus"
          class="content__status-input"
          type="text"
          v-model="status"
          @keyup.enter.native="changeStatus"
        />
        <p
          class="content__soc-networks"
          :class="statusChange ? 'statusChange' : ''"
        >
          HEADER 11
        </p>
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
import ClickOutside from "vue-click-outside";

type ComplexObjectProfile = {
  nickname: string;
  status: string;
  csgo: object;
};

export default Vue.extend({
  name: "HeaderProfileContent",

  directives: {
    ClickOutside
  },

  data() {
    return {
      statusChange: false
    };
  },

  computed: {
    myProfile(): boolean {
      return true;
    },

    status(): string {
      return this.profile.status;
    },

    title(): string {
      return this.$route.meta.title;
    },

    profile(): ComplexObjectProfile {
      return {
        nickname: "Nagibator_123",
        status: "Роза упала на лапу Азора",
        csgo: {
          rating: 1234
        }
      };
    },

    nickname(): string {
      let nickname =
        "Nagibator_134_million_alyh_roz_million_alyh_roz_million_alyh_roz";
      return nickname;
    },

    balance(): string {
      /**
       * если слишком больше число, оно
       * неправильно обрабатывает
       */
      let num = 923456734534534534543346452245;
      return num.toLocaleString();
    }
  },

  methods: {
    changeStatus() {
      console.log(this.status);
      this.statusChange = false;
    },

    inputStatus(status: boolean) {
      if (status != true) {
        this.statusChange = false;
      } else {
        this.statusChange = true;
      }
      console.log(this.statusChange);
    }
  }
});
</script>

<style scoped lang="scss">
.statusChange {
  margin-top: 7px !important;
}

.content {
  margin: 50px 30px 15px 30px;
  font: 12px/14px Roboto Mono, Serif;

  display: flex;
  flex-direction: row;

  &__info {
    display: flex;
    flex-direction: row;
  }

  &__status-change {
    &:hover {
      background: $accent-darker;
      padding: 5px;
      margin-left: -5px;
      margin-top: 6px;
      margin-bottom: -5px;
    }
  }

  &__status-input {
    background: transparent;
    border: 1px solid $accent;
    color: $white;
    padding: 2px 5px;
    width: 90%;
    margin-top: 7px !important;
    margin-left: -5px !important;
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
    min-width: 200px;
    padding: 0px 10px 5px 20px;

    & > * {
      margin: 0;
    }

    & > * + * {
      margin-top: 11px;
    }
  }
}
</style>
