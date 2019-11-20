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
    <div class="stats__chart">
      <line-chart
        class="stats__chart-content"
        :width="120"
        :height="120"
        :chartdata="chartData"
        :options="chartOptions"
      />
      <span class="stats__chart-text"
        >{{ ("00" + stats.percent).slice(-2) }}%
      </span>
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
    lineChart: () => import("@/ui-components/LineChart.vue")
  },

  props: {
    stats: Object
  },

  data() {
    return {
      chartData: {
        datasets: [
          {
            borderWidth: 1,
            borderColor: "#83E4E4",
            backgroundColor: [
              this.stats.percent < 25
                ? "#EB5757"
                : this.stats.percent < 50
                ? "#FFD074"
                : this.stats.percent < 75
                ? "#B2DF8A"
                : "#3858FF",
              "transparent"
            ],
            hoverBackgroundColor: ["#f89999", "transparent"],
            data: [this.stats.percent, 100 - this.stats.percent]
          }
        ]
      },
      chartOptions: {
        cutoutPercentage: 80,
        rotation: -0.5 * Math.PI,
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        maintainAspectRatio: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.stats {
  border: 1px solid $accent;
  border-radius: 15px;
  padding: 15px 45px 25px;

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
    font: 14px/16px Roboto Mono, Serif;
  }

  &__value {
    color: $blue;
    font: normal normal bold 14px/16px Roboto Mono, Serif;
  }

  &__chart {
    height: 100%;
    position: relative;
    margin: auto 0;

    &-text {
      position: absolute;
      color: $white;
      font: normal normal bold 36px/42px roboto Mono, Serif;
      top: 40px;
      left: 25px;
    }
  }
}
</style>
