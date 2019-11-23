<template>
  <div class="block">dfgdfg</div>
  <!-- <object type="image/svg+xml" data="@/assets/photo.jpg" class="block">
    dfdff :data="data"
  </object> -->
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Block",

  computed: {
    data(): string {
      return "@/assets/photo.jpg";
    }
  }
});
</script>
<style lang="scss" scoped>
.block {
  height: 550px;
  width: 250px;
  background: $black;
  color: $white;
  position: absolute;

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
    transform: skewY(15deg);
    border-top-right-radius: 20px;
  }

  &:after {
    bottom: -50px;
    transform: skewY(-15deg);
    border-bottom-right-radius: 20px;
  }
}
</style>
