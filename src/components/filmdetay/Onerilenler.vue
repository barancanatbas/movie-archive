<template>
    <router-link :to="url" class="onerilenapp nav-link">
    <div class="row">
            <img :src="imageurl" alt="">
        </div>
        <div class="onrtext">
            <h5 style="padding: 30px;">{{overi.title}}</h5><span>{{overi.vote_average}}</span>
        </div>
    
    </router-link>
</template>

<style>
    .onerilenapp{
        box-shadow: 10px -5px 106px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px -5px 106px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px -5px 106px 0px rgba(0,0,0,0.75);
        display: inline-block;
        margin-left: 20px;
        margin-top: 20px;
        width: 280px;
        max-width: 280px;
        height: auto;
    }
    .onerilenapp img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .onrtext{
        width: 280px;
        height: auto;
    
    }
    .onrtext span{
        color: gold;
        float: right;
        font-size:large;
        padding-bottom: 10px;
        padding-right: 30px;
    }
</style>

<script>

    export default({
        name:"onerilenapp",
        props:["overi"],
        data()
        {
            return{
                imageurl: this.$store.state.apiImageurl+this.overi.poster_path,
                url: '/movie/'+this.overi.id
            }
        }
    })
</script>