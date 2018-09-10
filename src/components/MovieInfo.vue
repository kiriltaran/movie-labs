<template>
  <div class="movie-info">
    <el-row 
      :gutter="20"
      type="flex">
      <el-col :span="6">
        <div class="poster">
          <img 
            v-if="movie.poster_path"
            :src="`http://image.tmdb.org/t/p/w342/${movie.poster_path}`" 
            class="poster-image"
          >
        </div>
      </el-col>
      <el-col :span="18">
        <div class="info">
          <div class="info-title">
            {{ movie.title }}
            <el-button 
              :icon="isInFavorites ? 'el-icon-star-on' : 'el-icon-star-off'" 
              type="text"
              class="fav-btn"
              @click="onClickFavorite"
            />
          </div>
          <div class="info-item">
            <div class="key">Release date:</div>
            <div class="value">{{ movie.release_date }}</div>
          </div>
          <div class="info-item">
            <div class="key">Genre:</div>
            <div class="value">
              <el-tag 
                v-for="genre in movie.genres"
                :key="genre.id"
                class="genre-tag"
                @click.native="onClickGenre(genre.id)"
              >
                {{ genre.name }}
              </el-tag>
            </div>
          </div>
          <div class="info-item">
            <div class="key">Budget:</div>
            <div class="value">{{ movie.budget }}$</div>
          </div>
          <div class="info-item">
            <div class="key">Revenue:</div>
            <div class="value">{{ movie.revenue }}$</div>
          </div>
          <div class="info-item">
            <div class="key">Homepage:</div>
            <div class="value">
              <a :href="movie.homepage">{{ movie.homepage }}</a>
            </div>
          </div>
          <div class="info-item">
            <div class="key">Country:</div>
            <div class="value">
              <span 
                v-for="country in movie.production_countries"
                :key="country.name"
              >
                {{ country.name }}
              </span>
            </div>
          </div>
          <div class="info-item">
            <div class="key">Description:</div>
            <div class="value">{{ movie.overview }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'MovieInfo',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isInFavorites() {
      return this.$store.getters.FAVORITES.includes(this.movie.id);
    },
  },
  methods: {
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
.poster {
  text-align: center;
  &-image {
    width: 100%;
  }
}

.info {
  &-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 80px;

    .fav-btn {
      font-size: 28px;
    }
  }

  &-item {
    display: flex;
    margin-bottom: 20px;

    .key {
      font-style: italic;
      min-width: 150px;
    }
  }
}

.genre-tag {
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
}
</style>


