<template>
  <div class="content">
    <section class="content__info">
      <img
        v-if="profile.photo"
        class="content__img"
        alt="Фото"
        src="@/assets/photo.jpg"
      />
      <img v-if="!profile.photo" class="content__img" alt="Фото" src="" />
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
          v-if="myProfile && profile.status == ''"
          v-show="!statusChange"
          @click="showChangeStatus"
          class="content__status content__status-change"
        >
          добавить статус
        </p>
        <p
          v-if="myProfile && profile.status != ''"
          v-show="!statusChange"
          @click="showChangeStatus"
          class="content__status content__status-change"
        >
          {{
            profile.status.length > 35
              ? profile.status.substring(0, 35) + "..."
              : profile.status
          }}
        </p>
        <input
          maxlength="27"
          v-show="statusChange"
          ref="inputStatus"
          autofocus
          @focusout="hideChangeStatus"
          class="content__status-input"
          type="text"
          v-model="status"
          @keyup.enter="changeStatus"
        />
        <div
          class="content__soc-networks"
          :class="statusChange ? 'statusChange' : ''"
        >
          <router-link
            v-for="(item, index) in socNetworks"
            :key="index"
            :to="profile.socNetworks[item.network]"
          >
            <component :is="item.component" :fill="fill[index]" />
          </router-link>
        </div>
        <!-- @mouseover="fill[index] = 'white'" @mouseleave="fill[index] = '#83E4E4'" -->
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

type ComplexObjectProfile = {
  nickname: string;
  photo: string;
  status: string;
  socNetworks: object;
  csgo: object;
};

export default Vue.extend({
  name: "HeaderProfileContent",

  data() {
    return {
      statusChange: false,
      fill: new Array(3).fill("#83E4E4")
    };
  },

  components: {
    IconFacebook: () =>
      import("@/ui-components/icons/socNetworks/IconFacebook.vue"),
    IconYouTube: () =>
      import("@/ui-components/icons/socNetworks/IconYouTube.vue"),
    IconVK: () => import("@/ui-components/icons/socNetworks/IconVK.vue")
  },

  computed: {
    myProfile(): boolean {
      return true;
    },

    title(): string {
      return (this as any).$route.meta.title;
    },

    socNetworks(): object {
      console.log(
        [
          { component: "IconFacebook", network: "facebook" },
          { component: "IconYouTube", network: "youtube" },
          { component: "IconVK", network: "vk" }
        ].filter(el => (this as any).profile.socNetworks[el.network] != "")
      );
      return [
        { component: "IconFacebook", network: "facebook" },
        { component: "IconYouTube", network: "youtube" },
        { component: "IconVK", network: "vk" }
      ].filter(el => (this as any).profile.socNetworks[el.network] != "");
    },

    profile(): ComplexObjectProfile {
      return {
        nickname: "Nagibator_123",
        photo: "Фото",
        status: "Роза упала на лапу Азора",
        socNetworks: {
          facebook: "",
          youtube: "",
          vk: "ссылка"
        },
        csgo: {
          rating: 1234
        }
      };
    },

    status: {
      get(): string {
        return this.profile.status;
      },

      set(val: string): string {
        return val;
      }
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

    showChangeStatus() {
      this.statusChange = true;
      const ref = this.$refs.inputStatus as HTMLInputElement;
      this.$nextTick(() => ref.focus());
    },

    hideChangeStatus() {
      this.statusChange = false;
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

  &__soc-networks {
    * + * {
      margin-left: 10px;
    }

    * {
      &:hover {
        cursor: pointer;
      }
    }
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
