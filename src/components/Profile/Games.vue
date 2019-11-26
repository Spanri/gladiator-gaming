<template>
  <div class="games">
    <GamesStats :stats="stats" class="games__stats" />
    <div class="pie">
      <div class="pie-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",

  components: {
    GamesStats: () => import("@/components/Profile/GamesStats.vue")
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
        percent: 45
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.pie {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: red;

  background-image: linear-gradient(to right, transparent 50%, #655 0);
}

.games {
  &__stats {
  }
}
</style>
