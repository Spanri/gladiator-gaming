<template>
  <div class="stats">
    <div class="stats__item-wrapper">
      <div v-for="index in [0, 1, 2, 3]" :key="index" class="stats__item">
        <span class="stats__title">{{ stats.items[index].title }}</span>
        <span class="stats__value">
          {{ stats.items[index].value.toLocaleString() }}
        </span>
      </div>
    </div>
    <div class="stats__chart-wrapper">
      <Doughnut class="stats__chart" :data="stats.percent" />
    </div>
    <div class="stats__item-wrapper">
      <div v-for="index in [4, 5, 6]" :key="index" class="stats__item">
        <span class="stats__title">{{ stats.items[index].title }}</span>
        <span class="stats__value">{{ stats.items[index].value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesStats",

  components: {
    Doughnut: () => import("@/ui-components/Doughnut.vue")
  },

  props: {
    stats: Object
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.stats {
  border: 1px solid $accent;
  border-radius: 15px;
  padding: 15px 45px 30px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__item {
    width: 150px;
    display: flex;
    justify-content: space-between;

    & + & {
      margin-top: 15px;
    }
  }

  &__title {
    color: $white;
    font: 1rem/1.1429rem Roboto Mono, Serif; // 14/16
  }

  &__value {
    color: $blue;
    font: normal normal bold 1rem/1.1429rem Roboto Mono, Serif; // 14/16
  }

  &__chart {
    height: 100%;
    position: relative;
    margin-top: 15px;

    &-wrapper {
      margin: auto 0;
    }
  }
}
</style>
