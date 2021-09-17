<template>
    <div class="container-fuild">
        <div class="row col-md-12">
          <div class="col-md-9 mt-5 mx-auto row">
            <h2 class="basliklar"> {{turad}} / <span v-if="p" >{{p}}</span><span v-else> 1 </span> </h2>
            <Filmcard v-for="veri in filmler" v-bind:key="veri.id" :veri="veri" ></Filmcard>
            <page :p="p" :name="movie"></page>
          </div>
          <div class="col-md-2 mt-5 mx-auto">
            <h2 class="basliklar">Kategoriler</h2>
              <kategori v-for="kategori in kategoriler" v-bind:key="kategori.id" :verikategori="kategori"></kategori>
          </div>
        </div>
    </div>
  </template>
  
  <style>
    h1{
      padding: 40px;
      margin-left: 20px;
      color: white;
    }
    h2{
      color: white;
      padding-top: 20px;
      padding-bottom: 30px;
    }
  </style>
  
  
  <script>
  import kategori from '@/components/SagMenu.vue'
  import Filmcard from '@/components/FilmCard.vue'
  import page from '@/components/Pagination.vue'
  
  export default {
    props:["id","turad","p"],
    name: "home",
    computed:{
      filmler()
      {
        return this.$store.getters.getMovies
      },
      kategoriler()
      {
        return this.$store.getters.getKategori
      }
    },
    components:{
      'kategori':kategori,
      'Filmcard':Filmcard,
      page
    },
    created(){
      this.$store.dispatch("getMovieTur",[this.p,this.id]),
      this.$store.dispatch("getCategory")
   },
  };
  </script>
  