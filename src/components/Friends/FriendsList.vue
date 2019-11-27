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
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar"),
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
.vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
  background: red none repeat scroll 0% 0% !important;

  width: 5px !important;

  right: 0;
}

.friends-list {
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
