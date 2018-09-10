<template>
  <div class="list-popular">
    <el-row 
      :gutter="20" 
      class="movies">
      <el-col
        v-for="item in movies"
        :span="6"
        :key="item.id"
        class="movies-item"
      >
        <movie-card 
          :movie="item" 
          class="movie-card"/>
      </el-col>
    </el-row>
    <el-pagination
      :page-size="20"
      :current-page="pageNumber"
      :total="totalNumber > 20000 ? 20000 : totalNumber"
      background
      layout="prev, pager, next"
      @current-change="onChangePage"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieCard,
  },
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      },
    },
    totalNumber: {
      type: Number,
      default: 0,
    },
    pageNumber: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onChangePage(number) {
      this.$emit('change-page', number);
    },
  },
};
</script>

<style lang="scss" scoped>
.movies {
  &-item {
    margin-bottom: 40px;

    .movie-card {
      height: 270px;
    }
  }
}
</style>

