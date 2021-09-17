<template>
   <div class="vizyonapp col-md-10 mx-auto mt-5">
       <h2>Vizyon'daki Fİlmler</h2>
       
       <hr style="background-color: whitesmoke; margin-top: 40px; margin-bottom: 50px;" class="col-md-11">
        <card v-for="film in filmler" v-bind:key="film.id" :film="film"></card>
   </div>
</template>

<style>

</style>
<script>
    import card from '@/components/vizyon/FilmCard.vue'

    export default({
        name:"vizyonapp",
        components:{
            card
        },
        computed:{
            filmler()
            {
                return this.$store.getters.getMovies
            }
        },
        created()
        {
            this.$store.dispatch("getVizyon")
        }
    })
</script>