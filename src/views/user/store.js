import Vue from "vue";
import { login } from "./models/user";

export default {
  namespaced: true,
  state: {
    id: "",
    username: "",
    /**
     * 当前用户令牌
     */
    token: null,
    /**
     * 权限字典
     */
    permissions: {},
    /**
     * 菜单树
     */
    menus: [],
    /**
     * 用户姓名缓存
     */
    userNames: {},
    /**
     * 角色名称缓存
     */
    roleNames: {},
    /**
     * 机构名称缓存
     */
    organizationNames: {}
  },
  mutations: {

    setToken(state, token) {
      state.token = token;
    },
    // setUserInfo(state, { id, username }) {
    //   state.id = id;
    //   state.username = username;
    // },
    // setPermissions(state, { permissions, menus }) {
    //   state.permissions = permissions;
    //   state.menus = menus;
    // }
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit("setToken", "");
      const user = await login({ username, password });
      commit("setToken", user.token);
      // commit("setUserInfo", { id: user.id, username: user.username });

    //   var { permissions, menus } = await findMyPermissions();
    //   commit("setPermissions", { permissions, menus });
    },
    async logout({ commit }) {
      commit("setToken", "");
    }
  }
};
