<template>
  <div class="signup">
    <HeaderJustTitle class="signup__header">Регистрация</HeaderJustTitle>
    <div class="signup__content">
      РЕГИСТРАААЦИЯЯЯ
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SignUp",

  components: {
    HeaderJustTitle: () => import("@/components/Header/HeaderJustTitle.vue")
  }
});
</script>

<style lang="scss" scoped>
.signup {
  height: 100%;

  &__content {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-top: 25px;
    }
  }
}
</style>
