<template>
  <div class="profile">
    <ButtonLink class="profile__button" to="games" side="right">
      Игры
    </ButtonLink>
    <ButtonLink class="profile__button" to="finances" side="right">
      Финансы
    </ButtonLink>
    <router-view class="profile__content" />
  </div>
</template>

<script>
export default {
  name: "Profile",

  components: {
    ButtonLink: () => import("@/ui-components/ButtonLink.vue")
  }
};
</script>

<style lang="scss" scoped>
.profile {
  &__button {
    min-width: 120px;
    margin-bottom: 40px;

    & + & {
      margin-left: 10px;
    }
  }
}
</style>
