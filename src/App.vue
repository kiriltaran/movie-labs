<template>
  <div id="app">
    <app-header/>
    <el-main 
      v-loading="isLoading" 
      class="main">
      <transition 
        name="el-fade-in-linear" 
        mode="out-in">
        <router-view/>
      </transition>
    </el-main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  computed: {
    isLoading() {
      return this.$store.getters.LOADING;
    },
  },
  mounted() {
    this.loadGenres();
  },
  methods: {
    loadGenres() {
      this.$store.dispatch('loadGenres');
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
