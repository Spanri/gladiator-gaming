<template>
  <div class="games">
    <div class="games__stats">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="games__stats-item"
      >
        <span class="games__title">{{ item.title }}</span>
        <span class="games__value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",

  computed: {
    items() {
      return [
        { title: "a0", value: "b0" },
        { title: "a1", value: "b1" },
        { title: "a2", value: "b2" },
        { title: "a3", value: "b3" },
        { title: "a4", value: "b4" }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.games {
  &__stats {
    border: 1px solid $accent;
    border-radius: 15px;
    padding: 10px 30px 15px;

    &-item {
      width: 130px;
      display: flex;
      justify-content: space-between;
    }
  }

  &__title {
    color: $white;
    font: 14px/16px Roboto Mono, Serif;
  }

  &__value {
    color: $blue;
  }
}
</style>
