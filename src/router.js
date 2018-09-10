import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MoviePage from '@/views/MoviePage.vue';
import GenresPage from '@/views/GenrePage.vue';
import FavoritesPage from '@/views/FavoritesPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MoviePage,
    },
    {
      path: '/genre/:id',
      name: 'genre',
      component: GenresPage,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage,
    },
  ],
});
