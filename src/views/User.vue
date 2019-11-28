<template>
  <div class="profile">
    <component
      :is="myProfile ? 'HeaderMyProfile' : 'HeaderOtherUser'"
      class="profile__header"
    />
    <button @click="my = !my">Кнопка</button>
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
  name: "User",

  components: {
    HeaderMyProfile: () => import("@/components/Header/HeaderMyProfile.vue"),
    HeaderOtherUser: () => import("@/components/Header/HeaderOtherUser.vue"),
    ButtonLink: () => import("@/ui-components/ButtonLink.vue")
  },

  props: {
    nickname: String
  },

  data() {
    return {
      my: true
    };
  },

  computed: {
    myProfile() {
      // если id юзера искомого совпадает с id юзера из store
      return this.my;
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
