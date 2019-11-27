<template>
  <div class="games">
    <GamesStats class="games__stats" :stats="stats" />
    <GamesHistory class="games__history" />
  </div>
</template>

<script>
export default {
  name: "Games",

  components: {
    GamesStats: () => import("@/components/Profile/GamesStats.vue"),
    GamesHistory: () => import("@/components/Profile/GamesHistory.vue")
  },

  data() {
    return {};
  },

  computed: {
    stats() {
      return {
        items: [
          { title: "Убийства", value: 12649 },
          { title: "Смерти", value: 7344 },
          { title: "Сыгранные матчи", value: 100 },
          { title: "Выигранные матчи", value: 23 },
          { title: "Сыгранные раунды", value: 7100 },
          { title: "Выигранные раунды", value: 3513 },
          { title: "MVP", value: 849 }
        ],
        percent: 64
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.games {
  &__stats {
  }
}
</style>
