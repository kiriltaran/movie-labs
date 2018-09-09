<template>
  <el-card
    :body-style="{ padding: '0' }"
    shadow="hover"
    class="movie-card"
  >
    <el-row
      type="flex" 
      justify="space-between"
    >
      <el-col :span="11">
        <div class="poster">
          <img 
            :src="`http://image.tmdb.org/t/p/w185/${movie.poster_path}`" 
            class="poster-image">
        </div>
      </el-col>
      <el-col :span="13">
        <div class="info">
          <div class="title">
            {{ movie.title }}
          </div>
          <div class="vote">
            {{ movie.vote_average }}
          </div>
          <div class="genre">
            Genre:
            <el-tag 
              v-for="genreId in movie.genre_ids"
              :key="genreId"
              size="small"
              class="genre-tag"
            >
              {{ allGenres[genreId] }}
            </el-tag>
          </div>
          <div class="actions">
            <el-button 
              type="text" 
              icon="el-icon-star-off"
              class="fav-btn"
            />
            <el-button 
              type="text" 
              class="more-btn">
              More
            </el-button>
          </div>
        </div> 
      </el-col>
    </el-row>
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
    allGenres() {
      return this.$store.getters.GENRES;
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
  &-image {
    height: 100%;
  }
}

.info {
  position: relative;
  height: 100%;
  padding: 20px 5px;
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
    }
  }

  .actions {
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 45px;

    .fav-btn {
      font-size: 20px;
    }
  }
}
</style>


