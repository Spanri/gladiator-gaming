<template>
  <div class="not-found">
    <HeaderJustTitle class="not-found__header">Ошибка</HeaderJustTitle>
    <div class="not-found__content">
      <p class="not-found__text">Страница не найдена.</p>
      <ButtonLink class="not-found__button" to="/" side="right">
        На главную
      </ButtonLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NotFound",

  components: {
    HeaderJustTitle: () => import("@/components/Header/HeaderJustTitle.vue"),
    ButtonLink: () => import("@/ui-components/ButtonLink.vue")
  }
});
</script>

<style lang="scss" scoped>
.not-found {
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

  &__text {
    margin: 0;
    color: white;
  }

  &__button {
    width: max-content !important;
  }
}
</style>
