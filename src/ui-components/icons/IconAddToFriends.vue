<template>
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9.49219C16.2091 9.49219 18 7.58765 18 5.23828C18 2.88891 16.2091 0.984375 14 0.984375C11.7909 0.984375 10 2.88891 10 5.23828C10 7.58765 11.7909 9.49219 14 9.49219Z"
      :fill="fill"
    />
    <path
      d="M14 18C14 18 22 18 22 15.8731C22 13.3207 18.1 10.5557 14 10.5557C9.9 10.5557 6 13.3207 6 15.8731C6 18 14 18 14 18ZM5 7.36524V4.1748H3V7.36524H0V9.4922H3V12.6826H5V9.4922H8V7.36524H5Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IconAddToFriends",

  props: {
    fill: {
      type: String,
      default: "#11161B"
    }
  }
});
</script>