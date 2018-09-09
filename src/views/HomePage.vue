<template>
  <div class="home">
    <movies-list 
      :movies="movies" 
      :total-number="totalNumber"
      @change-page="onChangePage"
    />
  </div>
</template>

<script>
import api from '@/api';
import MoviesList from '@/components/MoviesList.vue';

export default {
  name: 'HomePage',
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: [],
      totalNumber: 0,
      pageNumber: 1,
    };
  },
  mounted() {
    this.loadMovies(1);
  },
  methods: {
    async loadMovies(page) {
      try {
        this.$store.dispatch('setLoading', true);
        // eslint-disable-next-line camelcase
        const { results, total_results } = await api.getPopularMovies(page);
        this.movies = [...results];
        // eslint-disable-next-line camelcase
        this.totalNumber = total_results;
      } catch (e) {
        window.console.log(e);
      } finally {
        this.$store.dispatch('setLoading', false);
      }
    },
    onChangePage(number) {
      this.loadMovies(number);
    },
  },
};
</script>
