<template>
  <div v-bar class="friends-list-wrapper">
    <div class="friends-list">
      <div
        class="friends-list__item"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="friends-list__photo"></div>
        <button class="friends-list__add">
          <IconAdd />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FriendsList",

  components: {
    IconAdd: () => import("@/ui-components/icons/IconAdd.vue")
  },

  data() {
    return {
      list: [
        { nickname: "Anna Kozlova?", photo: "a" },
        { nickname: "An Nguen4ik", photo: "b" },
        { nickname: "Anna Kozlova?", photo: "a" },
        { nickname: "An Nguen4ik", photo: "b" },
        { nickname: "Anna Kozlova?", photo: "a" },
        { nickname: "An Nguen4ik", photo: "b" },
        { nickname: "Anna Kozlova?", photo: "a" },
        { nickname: "An Nguen4ik", photo: "b" }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
// .vb-content {
//   overflow: auto !important;
// }

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
  background: red;
}
// .vb-visible {
//   overflow: auto auto !important;
//   padding: 20px;
// }
// .vb-content {
//   overflow: initial !important;
// }
// .vb-dragger {
//   display: none;
// }

.friends-list {
  &-wrapper {
    display: block;
    width: auto;
    height: 100vh;
  }

  max-height: 300px;

  &__item {
    display: flex;
    justify-content: center;

    & + & {
      margin-top: 15px;
    }
  }

  &__add {
    background: transparent;
    border: 0;
  }

  &__photo {
    background: $white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
}
</style>
