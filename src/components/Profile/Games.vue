<template>
  <div class="profile">
    <button class="profile__button button button__left">
      Игры
    </button>
    <button class="profile__button button button__left">
      Финансы
    </button>
    <router-view class="profile__content" />
  </div>
</template>

<script>
export default {
  name: "Games",
  
};
</script>

<style lang="scss" scoped>
.profile {
  @include button;
}
</style>
