<template>
  <el-autocomplete
    v-model="query"
    :fetch-suggestions="searchMovies"
    :trigger-on-focus="false"
    prefix-icon="el-icon-search"
    value-key="title"
    @select="onSelect"
  />
</template>

<script>
import api from '@/api';

export default {
  name: 'SearchInput',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    async searchMovies(query, cb) {
      try {
        const { results } = await api.searchMovies(query);
        cb(results);
      } catch (e) {
        window.console.log(e);
      }
    },
    onSelect(value) {
      this.$router.push({ name: 'movie', params: { id: value.id } });
      this.query = '';
    },
  },
};
</script>

