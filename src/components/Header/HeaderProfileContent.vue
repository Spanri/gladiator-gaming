<template>
  <div class="content">
    <div class="spinner" v-cloak style="color:white">
      SPINNER
    </div>
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
        <InputChangeText class="content__status" />
        <div class="content__soc-networks">
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
        {{ profile.csgo.rating.toLocaleString("en-IN") }}
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
      fill: new Array(3).fill("#83E4E4"),
      loading: true
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

  beforeMount() {
    this.loading = false;
  }
});
</script>

<style scoped lang="scss">
.spinner {
  display: none;
}

[v-cloak].spinner {
  display: block;
}

.content {
  font: 0.8571rem/1rem Roboto Mono, Serif; // 12/14

  display: flex;
  flex-direction: row;

  &__info {
    display: flex;
    flex-direction: row;
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
    margin-top: -3px;

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
  }
}
</style>
