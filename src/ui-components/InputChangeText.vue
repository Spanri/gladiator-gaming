<template>
  <div class="input-change">
    <p v-if="!myProfile" class="input-change__text">
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
      class="input-change__text input-change__text-change"
    >
      добавить статус
    </p>
    <p
      v-if="myProfile && profile.status != ''"
      v-show="!statusChange"
      @click="showChangeStatus"
      class="input-change__text input-change__text-change"
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
      class="input-change__input"
      type="text"
      title="Максимум 25 символов."
      v-model="status"
      @keyup.enter="changeStatus"
    />
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
  name: "InputChangeText",

  data() {
    return {
      statusChange: false,
      fill: new Array(3).fill("#83E4E4")
    };
  },

  computed: {
    myProfile(): boolean {
      return true;
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

<style lang="scss" scoped>
.input-change {
  &__text-change {
    border: 1px solid transparent;

    &:hover {
      background: $accent-darker;
      padding: 5px;
      margin-left: -5px;
      margin-top: 6px;
      margin-bottom: -5px;
    }
  }

  &__input {
    background: transparent;
    border: 1px solid $accent;
    color: $white;
    font: 0.8571rem/1rem Roboto Mono, Serif;
    padding: 5px;
    width: 98%;
    margin-left: -5px !important;
    margin-top: 6px !important;
    margin-bottom: -1px !important;
  }
}
</style>
