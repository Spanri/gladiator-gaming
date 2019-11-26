<template>
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.57142 12.3023C9.64843 12.3023 12.1428 9.78018 12.1428 6.66898C12.1428 3.55777 9.64843 1.03564 6.57142 1.03564C3.49441 1.03564 1 3.55777 1 6.66898C1 9.78018 3.49441 12.3023 6.57142 12.3023Z"
      :stroke="fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.75 10.894L14 14.1802"
      :stroke="fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IconSettings",

  props: {
    fill: {
      type: String,
      default: "#83E4E4"
    }
  }
});
</script>
