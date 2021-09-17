<template>
  <div id="nav">
    <header-blog class="col-md-12"></header-blog>
  </div>
  <router-view :key="$route.path"/>
</template>

<style>
  .basliklar{
    margin-bottom: 30px;
    padding-left: 10px;
    border-left: 12px solid #f5c518;
  }
</style>

<script>
import header from '@/components/Header.vue'
export default({
  
  components:{
    'header-blog':header
  }
})
</script>

