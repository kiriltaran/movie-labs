<template>
  <div class="movie-page">
    <movie-info 
      :movie="movie" 
      class="info"
    />
    <movie-related 
      :movies="related" 
      class="related"
    />
  </div>
</template>

<script>
import api from '@/api';
import MovieInfo from '@/components/MovieInfo.vue';
import MovieRelated from '@/components/MovieRelated.vue';

export default {
  name: 'MoviePage',
  components: {
    MovieInfo,
    MovieRelated,
  },
  data() {
    return {
      movie: {},
      related: [],
    };
  },
  watch: {
    $route() {
      this.loadMovieInfo(this.$route.params.id);
      this.loadRelatedMovies(this.$route.params.id);
    },
  },
  mounted() {
    this.loadMovieInfo(this.$route.params.id);
    this.loadRelatedMovies(this.$route.params.id);
  },
  methods: {
    async loadMovieInfo(id) {
      try {
        this.$store.dispatch('setLoading', true);
        this.movie = { ...(await api.getMovieInfo(id)) };
      } catch (e) {
        window.console.log(e);
      } finally {
        this.$store.dispatch('setLoading', false);
      }
    },
    async loadRelatedMovies(id) {
      try {
        this.$store.dispatch('setLoading', true);
        const { results } = await api.getRelatedMovies(id);

        this.related = results.filter((el, i) => i < 4);
      } catch (e) {
        window.console.log(e);
      } finally {
        this.$store.dispatch('setLoading', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin-bottom: 30px;
}
</style>
