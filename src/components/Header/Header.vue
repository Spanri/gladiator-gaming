<template>
  <div class="header-wrapper">
    <component :is="headerComponent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  components: {
    Header0: () => import("@/components/Header/Header0.vue"),
    Header11: () => import("@/components/Header/Header11.vue"),
    Header100: () => import("@/components/Header/Header100.vue"),
    Header101: () => import("@/components/Header/Header101.vue")
  },

  computed: {
    isAith() {
      return true;
    },

    headerComponent() {
      /**
       * цифры по счету обозначают:
       * первая - есть ли авторизация
       * вторая - в своем профиле сейчас или нет
       * третья - в чужом профиле сейчас или нет
       */
      if (this.isAith && this.$route.meta.myProfile) {
        return "Header11";
      } else if (this.isAith && !this.$route.meta.myProfile) {
        return "Header100";
      } else if (this.isAith && this.$route.meta.otherProfile) {
        return "Header100";
      } else {
        return "Header0";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  max-width: 900px;
  height: min-content;
  background: $black;
  position: relative;
  margin-bottom: 50px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 70px;
    background: $black;
    z-index: -1;
  }

  &:before {
    left: -40px;
    transform: skewX(15deg);
    border-bottom-left-radius: 20px;
  }

  &:after {
    right: -40px;
    transform: skewX(-15deg);
    border-bottom-right-radius: 20px;
  }
}
</style>
