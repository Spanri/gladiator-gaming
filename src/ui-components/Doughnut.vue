<template>
  <div class="doughnut">
    <p class="doughnut__text">{{ data }}%</p>
    <svg
      class="doughnut__svg"
      width="120"
      height="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          class="doughnut__circle"
          r="50"
          cy="61"
          cx="61"
          :stroke="fill"
          :stroke-dasharray="circlePerimeter + ' ' + notCirclePerimeter"
        />
        <circle class="doughnut__circle-stroke" r="55" cy="61" cx="61" />
        <circle class="doughnut__circle-stroke" r="45" cy="61" cx="61" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonLink",

  props: {
    data: {
      type: Number,
      default: null
    }
  },

  computed: {
    fill() {
      return this.data < 25
        ? "#EB5757"
        : this.data < 50
        ? "#FFD074"
        : this.data < 75
        ? "#B2DF8A"
        : "#3858FF";
    },

    perimeter() {
      return 2 * 3.14 * 50;
    },

    circlePerimeter() {
      return ((this as any).perimeter / 100) * (this as any).data;
    },

    notCirclePerimeter() {
      return (this as any).perimeter - (this as any).circlePerimeter;
    }
  }
});
</script>

<style lang="scss" scoped>
.doughnut {
  position: relative;
  // float: left;

  &__text {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    color: $white;
    margin: 0;

    font: normal normal bold 30px/45px Roboto Mono, Serif;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__svg {
    transform: rotate(-90deg); // откуда начинается рисоваться
  }

  &__circle {
    stroke-dashoffset: 100;
    stroke-linecap: round;
    stroke-width: 11;
    fill: none;

    animation: doughnut 1s ease-out forwards;

    &-stroke {
      stroke-width: 1;
      stroke: #83e4e4;
      fill: none;
    }
  }
}

@keyframes doughnut {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
