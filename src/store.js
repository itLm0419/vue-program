import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// modules
import admin from "./views/user/store";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  modules: {
    admin
  },
  getters: {
    token: state => state.admin.token,
    isAuthenticated: state => !!state.admin.token,
    user: state => {
      return {
        id: state.admin.id,
        username: state.admin.username
      };
    },
    hasPermission: state => name =>
      state.admin.permissions[name] === undefined ||
      state.admin.permissions[name],
    menus: state => state.admin.menus
  }
});
