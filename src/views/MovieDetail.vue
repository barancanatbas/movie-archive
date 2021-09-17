<template>
    <div class="col-md-10 mx-auto mt-5 ">
        <div class="row detail">
            <img :src="$store.state.apiImageurl+movie.backdrop_path" class="backg" alt="">
            <div class="col-md-8 p-5" style="z-index: 1;">
                <h1>{{movie.title}}</h1>
                <h5> {{movie.overview}} </h5>
                <h6> {{ movie.release_date }} </h6>
                <keyword v-for="kyw in keyword" v-bind:key="kyw.id" :keywordata="kyw" ></keyword>
            </div>
            <div class="col-md-4 detailimage" style="z-index: 1;"><img :src="$store.state.apiImageurl+movie.poster_path" alt=""></div>
        </div>
        <div class="mt-4 col-md-11 p-5">
            <h2 class="basliklar" >Önerilenler</h2>
            <film class="film" v-for="oner in benzerler" v-bind:key="oner.id" :veri="oner"></film>
        </div>
        <div class="mt-4 col-md-12 mb-5">
            <h2 class="basliklar" >Oyuncular</h2>
            <actors v-for="actor in oyuncular" v-bind:key="actor.id" :veriactor="actor"></actors>
        </div>
    </div>
</template>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .detail{
        position: relative;
        border-radius: 5px;
        min-height: 700px;
    }
    .backg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit:cover;
        opacity: 0.3;
        z-index: 0;
    }

    h5{
        color: whitesmoke;
    }
    h6{
        color: goldenrod;
    }
    .detailimage{
        position: relative;
    }
    .detailimage img{
        position: absolute;
        top:50px;
        left: 10px;
        width: 420px;
        height: 600px;
        object-fit: cover;
    }
    .film{
        display: inline-block;
    }
</style>


<script>
    import keyword from '@/components/filmdetay/Keyword.vue'
    import actors from '@/components/filmdetay/Actors.vue'
    import film from '@/components/FilmCard.vue'
    
    export default({
        data(){
            return{
                imageurl:"",
                bacgurl:""
            }
        },
        props:["id"],
        computed:{
            movie()
            {
                return this.$store.getters.getMovieDetail
            },
            keyword()
            {
                return this.$store.getters.getKeyword
            },
            benzerler()
            {
                return this.$store.getters.getMovieBenzer
            },
            oyuncular()
            {
                return this.$store.getters.getCredits
            }
        },
        created()
        {
            this.$store.dispatch("getMovieDetail",this.id),
            this.$store.dispatch("getMovieKeyword",this.id),
            this.$store.dispatch("getMovieBenzer",this.id),
            this.$store.dispatch("getMovieCredits",this.id)
            
        },
        components:{
            "keyword":keyword,
            actors,
            film
        }
    })
</script>