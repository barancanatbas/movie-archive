<template>
  <router-link :to="url" class="filmcard nav-link">
        <div class="image">
          <img :src="resimurl" alt="">
        </div>
        <div class="bilgi">
          <div class="row m-2">
            <img src="../assets/star.png" class="staricon" alt=""><p class="imdb">{{veri.vote_average}}</p>
          </div>
          <div class="row">
            <p class="title" v-if="veri.name"> {{veri.name}} </p>
            <p class="title" v-else> {{veri.title}} </p>
            <p class="bilgi-item"> {{veri.crew}} </p>
          </div>
        </div>
  </router-link>
</template>

<style>
  .staricon{
    width: 44px;
    height: 20px;
  }
  .imdb{
    float: left;
    width: auto;
    padding-top: 5px;
    margin-left: -7px;
  }
  .filmcard{
    width: 190px;
    height: auto;
    box-sizing: border-box;
    margin-left:30px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 0;
    background-color: #1a1a1a;
  }
  .image{
    position: relative;
    width: 190px;
    height: 280px;
    box-sizing: border-box;
  }
  .image img{
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .bilgi{
    width: 100%;
    height: auto;
    margin-top: 5px;
    box-sizing: border-box;
  }
  .bilgi .title{
    padding-bottom: 10px;
    padding-left: 30px;
    color: white;
    font: 17px;
  }
  .bilgi-item{
    padding-left: 20px;
    color: #474747;
  }
</style>

<script>

export default {
  
  name: "kategoriler",
  props:["veri"],
  data()
  {
    return{
      url: '/movie/'+this.veri.id,
      resimurl : this.$store.state.apiImageurl+this.veri.poster_path
    }
  },
  methods:{
    loads()
    {
      if(this.veri.name)
      {
        this.url = "/tv/"+this.veri.id
      }
    }
  },
  beforeMount()
  {
    this.loads()
  }
};
</script>