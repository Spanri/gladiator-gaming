<template>
  <div class="profile">
    <router-link to="/games" class="profile__button button button__left">
      Игры
    </router-link>
    <router-link to="/finances" class="profile__button button button__left">
      Финансы
    </router-link>
    <router-view class="profile__content" />
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style lang="scss" scoped>
.profile {
  @include button;
}
</style>
