import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFriendlyIframe from "vue-friendly-iframe";
import Vuebar from 'vuebar';
import Vuelidate from "vuelidate";

Vue.use(Vuelidate as any);
Vue.use(Vuebar);
Vue.component("vue-friendly-iframe", VueFriendlyIframe);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
