import api from '@/api';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    genres: [],
  },
  mutations: {
    SET_GENRES(state, payload) {
      const result = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const item of payload) {
        result[item.id] = item.name;
      }
      // eslint-disable-next-line no-param-reassign
      state.genres = result;
    },
    SET_LOADING(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.loading = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    async loadGenres({ commit }) {
      try {
        const { genres } = await api.getGenreList();
        commit('SET_GENRES', genres);
      } catch (e) {
        window.console.log(e);
      }
    },
  },
  getters: {
    GENRES(state) {
      return state.genres;
    },
    LOADING(state) {
      return state.loading;
    },
  },
});
