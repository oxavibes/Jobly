import { API_REQUEST, API_SUCCESS, API_ERROR, API_LOGOUT } from "./types"; //Mutations
import { AUTH_LOGIN, AUTH_REQUEST, AUTH_LOGOUT } from "./types"; //Actions
import api from "../../../api/index";

// const loginUrl = "accounts:signInWithPassword?key=[API_KEY]";
// const signUpUrl = "accounts:signUp?key=[API_KEY]";

const state = {
  token: localStorage.getItem("user-token") ?? "",
  status: ""
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const mutations = {
  [API_REQUEST]: state => {
    state.status = "loading";
  },
  [API_SUCCESS]: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  [API_ERROR]: state => {
    state.status = "error";
  },
  [API_LOGOUT]: state => {
    state.token = "";
  }
};

const actions = {
  async [AUTH_REQUEST]({ commit }, user) {
    try {
      commit(API_REQUEST);
      const { data } = await api.post(AUTH_LOGIN, user);
      const { token } = data;

      localStorage.setItem("user-token", token);
      commit(API_SUCCESS, token);
    } catch (error) {
      commit(API_ERROR, error);
      localStorage.removeItem("user-token");
    }
  },
  async [AUTH_LOGOUT]({ commit }) {
    try {
      commit(API_LOGOUT);
      localStorage.removeItem("user-token");
    } catch (error) {
      console.error(error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
