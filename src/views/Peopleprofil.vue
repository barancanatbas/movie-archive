<template>
    <div class="col-md-9 mt-5" style="margin: auto;">
        <div class="row peopleprofil">
            <div class="col-md-3 peopleimg">
                <img :src="$store.state.apiImageurl+veri.profile_path" alt="">
            </div>
            <div class="col-md-8">
                <h1> {{veri.name}} </h1>
                <h6> Doğum Tarihi : {{veri.birthday}} </h6>
                <p> {{veri.biography}} </p>
            </div>
        </div>
        <span></span>
        <hr style="background-color: whitesmoke; margin-top: 40px; margin-bottom: 50px;">
        <div class="resimler col-md-12">
            <h2 class="basliklar">Resimler</h2>
            <resimler v-for="resim in resimler" v-bind:key="resim.file_path" :resim="resim"></resimler>
        </div>
        <hr style="background-color: whitesmoke; margin-top: 100px; margin-bottom: 100px;">
        <div class="row peoplemovies">
            <div class="col-md-6">
                <h2 class="basliklar">Filmleri</h2>
                <filmleri v-for="film in movies" v-bind:key="film.id" :sezonveri="film"></filmleri>
            </div>
            <div class="col-md-6">
                <h2 class="basliklar">Diziler</h2>
                <filmleri v-for="film in tvs" v-bind:key="film.id" :sezonveri="film"></filmleri>
            </div>
        </div>
        
        
    </div>
</template>

<style>
    .peopleprofil{
        margin:auto;
        background-color: #1a1a1a;
        border-radius: 5px;
    }
    .peopleimg img{
        width: 280px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
        padding: 20px;
        
    }
    h6{
        color: gold;
        padding: 10px;
    }
    p{
        padding: 10px;
        color: whitesmoke;
    }
    .peoplemovies{
        margin-top: 10px;
    }
    .Pmoviesdetail{
        margin-top: 20px;
        box-shadow: 2px 1px 58px -3px rgba(0,0,0,0.75);
        -webkit-box-shadow: 2px 1px 58px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 1px 58px -3px rgba(0,0,0,0.75);
        border-radius: 5px;
    }
    .Pmoviesdetail summary{
        padding: 10px 30px;
        color: whitesmoke;
    }
    .PmoviesImage img{
        margin: 20px;
        width: 280px;
        height: 400px;
    }
    .basliklar{
        padding-left: 10px;
        border-left: 12px solid #f5c518;
    }

</style>

<script>
    import axios from 'axios'
    import filmleri from '@/components/tvdetay/Sezonlar.vue'
    import resimler from '@/components/people/Image.vue'
    export default({
        name:"peopleprofil",
        props:["id"],
        components:{
            filmleri,
            resimler
        },
        computed:{
            veri()
            {
                return this.$store.getters.getHuman
            },
            movies()
            {
                return this.$store.getters.getMovies
            },
            tvs()
            {
                return this.$store.getters.getTvs
            },
            resimler()
            {
                return this.$store.getters.getImages
            }
        },
        created()
        {
            this.$store.dispatch("getHuman",this.id),
            this.$store.dispatch("getHumanMovies",this.id),
            this.$store.dispatch("getHumanTv",this.id),
            this.$store.dispatch("getHumanImages",this.id)
            
        }
    })
</script>