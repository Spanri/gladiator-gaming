<template>
  <div class="profile">
    <component
      :is="myProfile ? 'HeaderMyProfile' : 'HeaderOtherProfile'"
      class="profile__header"
    />
    <HeaderOtherProfile v-if="otherProfile" class="profile__header" />
    <div class="profile__content">
      <ButtonLink class="profile__button" to="games" side="right">
        Игры
      </ButtonLink>
      <ButtonLink
        v-if="myProfile"
        class="profile__button"
        to="finances"
        side="right"
      >
        Финансы
      </ButtonLink>
      <router-view class="profile__content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  components: {
    HeaderMyProfile: () => import("@/components/Header/HeaderMyProfile.vue"),
    HeaderOtherProfile: () =>
      import("@/components/Header/HeaderOtherProfile.vue"),
    ButtonLink: () => import("@/ui-components/ButtonLink.vue")
  },

  computed: {
    myProfile() {
      // ес ли id юзера искомого совпадает с id юзера из store
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  @include header;

  &__button {
    min-width: 120px;
    margin-bottom: 40px;

    & + & {
      margin-left: 10px;
    }
  }
}
</style>
