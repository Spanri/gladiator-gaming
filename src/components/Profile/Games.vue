<template>
  <div class="games">
    <GamesStats :stats="stats" class="games__stats" />
  </div>
</template>

<script>
export default {
  name: "Games",

  components: {
    GamesStats: () => import("@/components/Profile/GamesStats.vue")
  },

  data() {
    return {
    };
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
        percent: 45
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
