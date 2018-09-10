<template>
  <div class="favorites-page">
    <movies-list 
      :movies="movies" 
      :total-number="favorites.length"
    />
  </div>
</template>


<script>
import api from '@/api';
import MoviesList from '@/components/MoviesList.vue';

export default {
  name: 'FavoritesPage',
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    favorites() {
      return this.$store.getters.FAVORITES;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loadFavorites();
    });
  },
  methods: {
    async loadFavorites() {
      try {
        this.$store.dispatch('setLoading', true);
        // eslint-disable-next-line no-restricted-syntax
        for (const favoriteId of this.favorites) {
          // eslint-disable-next-line no-await-in-loop
          const movie = await api.getMovieInfo(favoriteId);
          this.movies.push(movie);
        }
      } catch (e) {
        window.console.log(e);
      } finally {
        this.$store.dispatch('setLoading', false);
      }
    },
  },
};
</script>

