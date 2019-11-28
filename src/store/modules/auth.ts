import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

type ComplexObjectAuth = {
  commit: any;
  dispatch: any;
};

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },
  getters: {
    isLoggedIn: (state: any) => !!state.token,
    authStatus: (state: any) => state.status,
    getUser: (state: any) => state.user,
  },
  mutations: {
    auth_request(state: any) {
      state.status = "loading";
    },
    auth_success(state: any, data: any) {
      state.status = "success";
      state.token = data.token;
      console.log("user", data.user);
      state.user = data.user;
    },
    auth_error(state: any) {
      state.status = "error";
    },
    logout(state: any) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit, }: ComplexObjectAuth /*user*/) {
      return new Promise((resolve /*reject*/) => {
        commit("auth_request");
        // axios({ url: 'http://localhost:3000/login', data: user, method: 'POST', })
        //   .then(resp => {
        let resp = {
          data: {
            token: "123456",
            user: {
              profile: {
                nickname: "Nagibator_123",
                photo: "Фото",
                status: "Роза упала на лапу Азора",
                socNetworks: {
                  facebook: "w",
                  youtube: "w",
                  vk: "https://vk.com/animeshny_kot",
                  twitter: "w",
                  twitch: "w",
                  instagram: "https://www.instagram.com/spanri",
                  steam: "w",
                  discord: "w"
                },
                csgo: {
                  rating: 1234
                }
              },
            },
          },
        };
        const token = resp.data.token;
        const user = resp.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", { token, user, });
        console.log(resp);
        resolve(resp);
        // })
        // .catch(err => {
        //   commit('auth_error');
        //   localStorage.removeItem('token');
        //   reject(err);
        // });
      });
    },
    register({ commit, }: ComplexObjectAuth /*user*/) {
      return new Promise((resolve /*reject*/) => {
        commit("auth_request");
        // axios({ url: 'http://localhost:3000/register', data: user, method: 'POST', })
        //   .then(resp => {
        let resp = {
          data: {
            token: "123456",
            user: {
              profile: {
                firstName: "Елизавета",
                lastName: "Иванникова",
                patronymic: "Александровна",
                phone: "123456",
                email: "email@mail.ru",
              },
            },
          },
        };
        const token = resp.data.token;
        const user = resp.data.user;
        localStorage.setItem("token", token);
        // Add the following line:
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", { token, user, });
        resolve(resp);
        // })
        // .catch(err => {
        //   commit('auth_error', err);
        //   localStorage.removeItem('token');
        //   reject(err);
        // });
      });
    },
    logout({ commit, }: ComplexObjectAuth) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  }
}