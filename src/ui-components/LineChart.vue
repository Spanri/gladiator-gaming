<script lang="ts">
import Vue from "vue";
import { Doughnut } from "vue-chartjs-typescript";

export default Vue.extend({
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    (this as any).renderChart(this.chartdata, this.options);
  }
});
</script>
