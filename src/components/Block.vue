<template>
  <div class="block">
    Реклама
  </div>
</template>

<style lang="scss" scoped>
.block {
  height: 550px;
  width: 250px;
  background: $black;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 70px;
    background: $black;
  }

  &:before {
    left: -40px;
    transform: skewX(15deg);
    border-bottom-left-radius: 20px;
  }

  &:after {
    right: -40px;
    transform: skewX(-15deg);
    border-bottom-right-radius: 20px;
  }
}
</style>
