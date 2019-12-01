import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default {
  state: {
    currentWidth: String,
    isNotFound: Boolean
  },
  getters: {
    getCurrentWidth: (state: any) => {
      console.log(state.currentWidth);
      return state.currentWidth;
    },
    isNotFound: (state: any) => state.isNotFound,
  },
  mutations: {
    setCurrentWidth(state: any, data: any) {
      state.currentWidth = data;
    },
    setIsNotFound(state: any, data: any) {
      state.isNotFound = data;
    },
  },
  actions: {

  }
}