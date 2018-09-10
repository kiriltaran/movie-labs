<template>
  <el-header class="header">
    <el-menu
      :default-active="$route.path"
      :router="true"
      mode="horizontal"
      class="menu"
    >
      <a 
        href="/" 
        class="logo">
        <img 
          src="@/assets/logo.png" 
          alt="logo"
          class="logo-image"
        >
      </a>
      <el-menu-item index="/">Popular</el-menu-item>
      <el-menu-item index="/favorites">Favorites</el-menu-item>
      <search-input class="search"/>
    </el-menu>
    
  </el-header>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'AppHeader',
  components: {
    SearchInput,
  },
};
</script>


<style lang="scss" scoped>
.header {
  line-height: 60px;

  .logo {
    float: left;
    height: 60px;
    margin-right: 20px;
    &-image {
      height: 100%;
    }
  }

  .menu {
    height: 100%;
  }

  .search {
    float: right;
  }
}
</style>

