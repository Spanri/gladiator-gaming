<template>
  <component :is="headerComponent" />
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
