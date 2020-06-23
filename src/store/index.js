import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "session-layout"
  },
  getters: {
    layout (state) {
      return state.layout
    }
  },
  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload
    }
  },
  actions: {
    SET_LAYOUT({ commit }, layout) {
      commit("SET_LAYOUT", layout);
    }
  },
  modules: {}
});
