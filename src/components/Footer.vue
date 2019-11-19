<template>
  <footer class="footer">
    <div class="footer-inner">
      <section class="footer__about">
        О нас
      </section>
      <section class="footer__rules">
        Правила пользования
      </section>
      <section class="footer__about2">
        О нас 2
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
.footer {
  max-width: 900px;
  width: 100%;
  height: 100%;
  background: $black;
  position: relative;
  margin-top: 50px;

  &-inner {
    max-width: 580px;
    width: 100%;
    color: $white;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > * {
      padding: 20px;
      padding-bottom: 80px;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 70px;
      background: $black;
      z-index: -1;
    }

    &:before {
      left: -40px;
      transform: skewX(-15deg);
      border-top-left-radius: 20px;
    }

    &:after {
      right: -40px;
      transform: skewX(15deg);
      border-top-right-radius: 20px;
    }
  }
}
</style>
