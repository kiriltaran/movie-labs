<template>
  <div class="genre-page">
    <movies-list
      :movies="movies" 
      :total-number="totalNumber"
      :page-number="pageNumber"
      @change-page="onChangePage"
    />
  </div>
</template>

<script>
import api from '@/api';
import MoviesList from '@/components/MoviesList.vue';

export default {
  name: 'GenrePage',
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
  watch: {
    $route() {
      this.pageNumber = 1;
      this.loadMovies(this.$route.params.id, this.pageNumber);
    },
  },
  mounted() {
    this.loadMovies(this.$route.params.id, this.pageNumber);
  },
  methods: {
    async loadMovies(genreId, page) {
      try {
        this.$store.dispatch('setLoading', true);
        // eslint-disable-next-line camelcase
        const { results, total_results } = await api.getMoviesByGenre(
          genreId,
          page,
        );
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
      this.pageNumber = number;
      this.loadMovies(this.$route.params.id, number);
    },
  },
};
</script>
