<template>
  <el-header class="header">
    <el-row 
      type="flex" 
      justify="space-between">
      <a 
        href="/" 
        class="logo">
        <img 
          src="@/assets/logo.png" 
          alt="logo"
          class="logo-image"
        >
      </a>
      <search-input/>
    </el-row>
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
  background-color: #eee;
  line-height: 60px;

  .logo {
    height: 60px;
    &-image {
      height: 100%;
    }
  }
}
</style>

