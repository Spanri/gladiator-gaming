<template>
  <div class="block">
    <span
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vel
      voluptatibus quis maxime, cupiditate porro quam nobis deserunt saepe
      labore culpa recusandae molestiae quaerat expedita, optio quo fugit
      mollitia quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Natus dolorem, corporis adipisci quisquam itaque veniam sed nostrum, illum
      minima quo explicabo nulla temporibus, quis maxime aliquid. Repellat
      voluptas sit quam! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Esse, quae pariatur? Suscipit omnis alias reprehenderit incidunt
      minus sed veniam, eum deleniti soluta molestias, assumenda iusto error
      sequi, a sunt vitae.
    </span>
    <!-- <object type="image/svg+xml" data="@/assets/photo.jpg">
      dfdff :data="data"
    </object> -->
  </div>
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

  & > * {
    position: relative;
  }
}
</style>
