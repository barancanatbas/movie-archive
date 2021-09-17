<template>
    <div class="col-md-10 mx-auto mt-5 ">
        <div class="row detail">
            <img :src="$store.state.apiImageurl+veri.backdrop_path" class="backg" alt="">
            <div class="col-md-8 p-5" style="z-index: 1;">
                <h1> {{veri.name}} </h1>
                <h6> Dizi </h6>
                <h5> {{veri.overview}} </h5>
                <h6> {{ veri.first_air_date }} </h6>
                <keyword v-for="kyw in keywords" v-bind:key="kyw.id" :keywordata="kyw" ></keyword>
            </div>
            <div class="col-md-4 detailimage" style="z-index: 1;"><img :src="$store.state.apiImageurl+veri.poster_path" alt=""></div>
        </div>
        <div class="mt-4 col-md-11 p-5">
            <h2>Sezonlar</h2>
            <sezon v-for="sezon in veri.seasons" v-bind:key="sezon.id" :sezonveri="sezon"></sezon>
        </div>
        <div class="mt-4 col-md-11 p-5">
            <h2>Oyuncular</h2>
            <actors v-for="actor in credits" v-bind:key="actor.id" :veriactor="actor"></actors>
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
</style>


<script>
    import keyword from '@/components/filmdetay/Keyword.vue'
    import actors from '@/components/filmdetay/Actors.vue'
    import sezon from '@/components/tvdetay/Sezonlar.vue'
    
    export default({
        data(){
            return{
                bacgurl:""
            }
        },
        props:["id"],
        computed:{
            veri()
            {
                return this.$store.getters.getTvDetail
            },
            credits()
            {
                return this.$store.getters.getCredits
            },
            keywords()
            {
                return this.$store.getters.getKeyword
            }
        },
        created()
        {
            this.$store.dispatch("getTvDetail",this.id),
            this.$store.dispatch("getTvOyuncular",this.id),
            this.$store.dispatch("getTvKeyword",this.id)
            
        },
        components:{
            "keyword":keyword,
            actors,
            sezon
        }
    })
</script>