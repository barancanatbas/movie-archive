<template>
  <div class="container-fuild">
      <div class="row col-md-12">
        <div class="col-md-9 mt-5 mx-auto row">
          <h2 class="basliklar"> {{turad}} / <span v-if="p" style="color: #f5c518;" >{{p}}</span><span v-else> 1 </span> </h2>
          <Filmcard v-for="veri in movies" v-bind:key="veri.id" :veri="veri" ></Filmcard>
          <page :p="p" :name="Home"></page>
        </div>
        <div class="col-md-2 mt-5">
          <h2 class="basliklar">Kategoriler</h2>
            <kategori v-for="ktg in kategoriler" v-bind:key="ktg.id" :verikategori="ktg"></kategori>
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
  name: "home",
  data()
  {
    return {
      turad:"Film Ve Diziler"
    }
  },
  components:{
    'kategori':kategori,
    'Filmcard':Filmcard,
    page
  },
  props:["p"],
  computed:{
   movies()
   {
      return this.$store.getters.getMovies
   },
   kategoriler()
   {
      return this.$store.getters.getKategori
   }
 },
 created()
 {
   this.$store.dispatch("getMovie",this.p),
   this.$store.dispatch("getCategory")
 }
};
</script>
