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
        <InputChangeText />
        <!-- <p v-if="!myProfile" class="content__status">
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
          maxlength="25"
          v-show="statusChange"
          ref="inputStatus"
          autofocus
          @focusout="hideChangeStatus"
          class="content__status-input"
          type="text"
          title="Максимум 25 символов."
          v-model="status"
          @keyup.enter="changeStatus"
        /> -->
        <div
          class="content__soc-networks"
          :class="statusChange ? 'statusChange' : ''"
        >
          <a
            v-for="(item, index) in socNetworks"
            :key="index"
            :href="profile.socNetworks[item.network]"
            target="_blank"
          >
            <component
              :is="item.component"
              :fill="fill[index]"
              @mouseover="fill[index] = item.fill"
              @mouseleave="fill[index] = '#83E4E4'"
            />
          </a>
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
    InputChangeText: () => import("@/ui-components/InputChangeText.vue"),
    IconFacebook: () =>
      import("@/ui-components/icons/socNetworks/IconFacebook.vue"),
    IconYouTube: () =>
      import("@/ui-components/icons/socNetworks/IconYouTube.vue"),
    IconVK: () => import("@/ui-components/icons/socNetworks/IconVK.vue"),
    IconTwitch: () =>
      import("@/ui-components/icons/socNetworks/IconTwitch.vue"),
    IconTwitter: () =>
      import("@/ui-components/icons/socNetworks/IconTwitter.vue"),
    IconInstagram: () =>
      import("@/ui-components/icons/socNetworks/IconInstagram.vue")
  },

  computed: {
    myProfile(): boolean {
      return true;
    },

    title(): string {
      return (this as any).$route.meta.title;
    },

    socNetworks(): object {
      return [
        { component: "IconFacebook", network: "facebook", fill: "white" },
        { component: "IconYouTube", network: "youtube", fill: "red" },
        { component: "IconVK", network: "vk", fill: "blue" },
        { component: "IconTwitch", network: "twitch", fill: "green" },
        { component: "IconTwitter", network: "twitter", fill: "gray" },
        { component: "IconInstagram", network: "instagram", fill: "yellow" }
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
          vk: "https://vk.com/animeshny_kot",
          twitter: "",
          twitch: "",
          instagram: "https://www.instagram.com/spanri"
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
  font: 0.8571rem/1rem Roboto Mono, Serif; // 12/14

  display: flex;
  flex-direction: row;

  &__info {
    display: flex;
    flex-direction: row;
  }

  // &__status-change {
  //   border: 1px solid transparent;

  //   &:hover {
  //     background: $accent-darker;
  //     padding: 5px;
  //     margin-left: -5px;
  //     margin-top: 6px;
  //     margin-bottom: -5px;
  //   }
  // }

  // &__status-input {
  //   background: transparent;
  //   border: 1px solid $accent;
  //   color: $white;
  //   font: 0.8571rem/1rem Roboto Mono, Serif;
  //   padding: 5px;
  //   width: 98%;
  //   margin-left: -5px !important;
  //   margin-top: 6px !important;
  //   margin-bottom: -1px !important;
  // }

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
      font: 1rem/1.1875rem Roboto Mono, Serif; // 16/19
      text-align: right;
    }

    &-value {
      color: $accent;
      font: normal normal bold 1.5rem/1.75rem Roboto Mono, Serif; // 24/28
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
    min-width: 210px;
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
