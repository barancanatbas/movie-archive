<template>
      <router-link :to="url" class="nav-link kategoritem">
       <li> # {{verikategori.name}}</li>
      </router-link>
</template>
<style>
  .kategoritem{
    list-style: none;
  }
  .kategoritem li{
    width: 100%;
    padding:10px;
    border-left: 12px solid #030303;
  }
  .kategoritem li:hover{
    border-left: 12px solid #f5c518;
    background-color: #1a1a1a;
    transition: 0.35s;
  }
  

</style>

<script>
    
    export default {
      name: "kategoriler",
      props:["verikategori"],
      data()
      {
        return{
          url : "/movies/"+this.verikategori.id+"/"+this.verikategori.name
        }
      }
    };
</script>