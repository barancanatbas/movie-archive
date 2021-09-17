<template>
    <nav class="pagination col-md-12">
        <ul>
          <li v-if="p == 1"><router-link class="paginationLink" :to="{name:name,params:{p:1}}">Geri</router-link></li>
            <li v-else><router-link class="paginationLink" :to="{name:name,params:{p:parseInt(p)-1}}">Geri</router-link></li>
          <li v-if="p"><router-link class="paginationLink" :to="{name:name,params:{p:parseInt(p)+1}}">{{p}}</router-link></li>
          <li v-else> <router-link class="paginationLink" :to="{name:name,params:{p:1}}">1</router-link> </li>

          <li v-if ="p"><router-link class="paginationLink" :to="{name:name,params:{p:parseInt(p)+1}}">İleri</router-link></li>
          <li v-else><router-link class="paginationLink" :to="{name:name,params:{p:2}}">İleri</router-link></li>
        </ul>
      </nav>
</template>

<style>
    .pagination{
        margin-bottom: 50px;
        margin-top: 50px;
    }
    .pagination ul{
        width: auto;
        height: auto;
        margin: auto;
    }
    .pagination ul li{
        display: inline-block;
        margin: 2px;
        background-color: #1a1a1a;
        color: whitesmoke;
        padding: 10px 20px;
    }
    .paginationLink
    {
        color: whitesmoke !important;
        outline: none;
        text-decoration: none;
    }
</style>

<script>

    export default({
        name:"pagination",
        props:["p","name"]
    })

</script>