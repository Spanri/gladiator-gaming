<template>
  <table class="history">
    <tr class="history__title">
      <th>Команда</th>
      <th>Счёт</th>
      <th>Против</th>
      <th>Закончился</th>
      <th>Демо</th>
    </tr>
    <tr class="history__date">
      <td colspan="5">Дата - 343434</td>
    </tr>
    <tr class="history__item">
      <td>10000</td>
      <td>44545</td>
      <td>10000</td>
      <td>44545</td>
      <td>10000</td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GamesHistory"
});
</script>

<style lang="scss" scoped>
.history {
  margin-top: 20px;
  width: 101%;
  margin-left: -2px;

  &__title {
    padding-left: 15px;
    padding-bottom: 10px;
    color: $white;
    font: normal normal bold 1rem/1.1875rem Roboto Mono, Serif; // 16,19
  }

  &__date {
    color: $white;
    font: 1rem/1.1875rem Roboto Mono, Serif; // 16,19
    background: $black;
    width: 100%;
  }
}
</style>
