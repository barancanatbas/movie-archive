<template>
    <div class="peoples col-md-10 mx-auto mt-5">
        <h2 class="basliklar">Oyuncular</h2>
        <div class="row col-md-12 mx-auto">
            <actors v-for="oyuncu in oyuncular" v-bind:key="oyuncu.id" :veriactor="oyuncu"></actors>
            <page :p="p" :name="peoples"></page>
        </div>
    </div>
</template>

<script>
    import actors from '@/components/filmdetay/Actors.vue'
    import page from '@/components/Pagination.vue'
    export default({
        name:"peoples",
        props:["p"],
        components:{
            actors,
            page
        },
        created()
        {
            this.$store.dispatch("getPeoples",this.p)
        },
        computed:{
            oyuncular()
            {
                return this.$store.getters.getHuman
            }
        }
    })
</script>


<style>

</style>