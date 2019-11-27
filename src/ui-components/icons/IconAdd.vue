<template>
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6344 6.088H8.91196V1.36571C8.91196 -0.455238 6.08786 -0.455238 6.08786 1.36571V6.088H1.36541C-0.455137 6.088 -0.455137 8.912 1.36541 8.912H6.08786V13.6343C6.08786 15.4552 8.91196 15.4552 8.91196 13.6343V8.912H13.6344C15.4552 8.912 15.4552 6.088 13.6344 6.088Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IconAdd",

  props: {
    fill: {
      type: String,
      default: "#83E4E4"
    }
  }
});
</script>
