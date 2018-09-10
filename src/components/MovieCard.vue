<template>
  <el-card
    :body-style="{ padding: '0', display: 'flex', height: '100%' }"
    shadow="hover"
    class="movie-card"
  >
    <div class="poster">
      <img 
        :src="`http://image.tmdb.org/t/p/w185/${movie.poster_path}`" 
        class="poster-image"
      >
    </div>
    <div class="info">
      <div class="title">
        {{ movie.title }}
      </div>
      <div class="vote">
        {{ movie.vote_average }}
      </div>
      <div class="genre">
        <div>
          Genre:
        </div>
        <el-tag 
          v-for="genreId in movie.genre_ids"
          :key="genreId"
          size="small"
          class="genre-tag"
          @click.native="onClickGenre(genreId)"
        >
          {{ genres[genreId] }}
        </el-tag>
      </div>
      <div class="actions">
        <!-- favorite button should be separeted component -->
        <el-button 
          :icon="isInFavorites ? 'el-icon-star-on' : 'el-icon-star-off'" 
          type="text"
          class="fav-btn"
          @click="onClickFavorite"
        />
        <el-button 
          type="text" 
          class="more-btn"
          @click="onClickMore"
        >
          More
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genres() {
      return this.$store.getters.GENRES;
    },
    isInFavorites() {
      return this.$store.getters.FAVORITES.includes(this.movie.id);
    },
  },
  methods: {
    onClickMore() {
      this.$router.push({ name: 'movie', params: { id: this.movie.id } });
    },
    onClickGenre(id) {
      this.$router.push({ name: 'genre', params: { id } });
    },
    onClickFavorite() {
      this.$store.dispatch('toggleFavorite', this.movie.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  &:hover {
    opacity: 0.8;
  }
}

.poster {
  width: 40%;
  &-image {
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
}

.info {
  width: 60%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .vote {
    background-color: #409eff;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .genre {
    &-tag {
      margin-right: 5px;
      margin-bottom: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;

    .fav-btn {
      font-size: 20px;
    }
  }
}
</style>


