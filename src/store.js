import api from '@/api';
import Vue from 'vue';
import Vuex from 'vuex';
import { setItem } from '@/helpers/ls';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    genres: {},
    favorites: [],
  },
  mutations: {
    SET_GENRES(state, payload) {
      const result = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const item of payload) {
        result[item.id] = item.name;
      }
      // eslint-disable-next-line no-param-reassign
      state.genres = { ...result };
    },
    SET_LOADING(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.loading = payload;
    },
    SET_FAVORITES(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.favorites = [...payload];
    },
    ADD_FAVORITE(state, payload) {
      state.favorites.push(payload);
    },
    REMOVE_FAVORITE(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.favorites = state.favorites.filter(el => el !== payload);
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
    toggleFavorite({ commit, state }, payload) {
      if (state.favorites.includes(payload)) {
        commit('REMOVE_FAVORITE', payload);
      } else {
        commit('ADD_FAVORITE', payload);
      }
      setItem('favorites', state.favorites);
    },
    setFavorites({ commit }, payload) {
      commit('SET_FAVORITES', payload);
    },
  },
  getters: {
    GENRES(state) {
      return state.genres;
    },
    LOADING(state) {
      return state.loading;
    },
    FAVORITES(state) {
      return state.favorites;
    },
  },
});
