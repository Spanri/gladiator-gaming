import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default {
  state: {
    currentWidth: '',
  },
  getters: {
    getCurrentWidth: (state: any) => {
      console.log(state.currentWidth);
      return state.currentWidth;
    },
  },
  mutations: {
    setCurrentWidth(state: any, data: any) {
      state.currentWidth = data;
    },
  },
  actions: {

  }
}