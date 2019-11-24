<template>
  <div class="friends">
    <ButtonCommon><span>Создать команду</span></ButtonCommon>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Friends",

  components: {
    ButtonCommon: () => import("@/ui-components/ButtonCommon.vue")
  }
});
</script>

<style lang="scss" scoped>
.friends {
  height: 550px;
  width: 250px;
  background: $black;
  color: $white;

  &:before,
  &:after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 90px;
    background: $black;
  }

  &:before {
    top: -50px;
    transform: skewY(-15deg);
    border-top-left-radius: 20px;
  }

  &:after {
    bottom: -50px;
    transform: skewY(15deg);
    border-bottom-left-radius: 20px;
  }

  & > * {
    position: relative;
  }
}
</style>
