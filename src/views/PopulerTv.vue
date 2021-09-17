<template>
    <div class="container-fuild">
    
        <div class="row col-md-12">
          <div class="col-md-9 mt-5 mx-auto row">
            <h2 class="basliklar"> {{ title }} </h2>
            <Filmcard v-for="veri in getTvs" v-bind:key="veri.id" :veri="veri" ></Filmcard>
            <page :p="p" :name="populertv"></page>
          </div>
          <div class="col-md-2 mt-5 mx-auto">
            <h2 class="basliklar">Kategoriler</h2>
              <kategori v-for="kategori in kategoriler" v-bind:key="kategori.id" :verikategori="kategori"></kategori>
          </div>
        </div>
    </div>
</template>

<script>
    // kütüphane ve component dahil ettik
    import axios from 'axios'
    import Filmcard from '@/components/FilmCard.vue'
    import kategori from '@/components/SagMenu.vue'
    import page from '@/components/Pagination.vue'
    export default({
        name:"populerfilmler",
        data()
        {
            return {
                title:"Popüler Diziler",
            }
        },
        props:["p"],
        computed:{
            getTvs()
            {
               return this.$store.getters.getTvs
            },
            kategoriler()
            {
                return this.$store.getters.getKategori
            }
        },
        components:{
            Filmcard,
            kategori,
            page
        },
        created()
        {
            this.$store.dispatch("getTvs",this.p),
            this.$store.dispatch("getCategory")
        }
    })

</script>