<template>
    <details class="sezonapp">
        <summary v-if="sezonveri.name" >{{sezonveri.name}}</summary>
                <summary v-if="sezonveri.title" >{{sezonveri.title}}</summary>
        <div class="row">
            <div class="col-md-4">
                <img :src="imageurl" alt="">
            </div>
            <div class="col-md-7">
                <h1 v-if="sezonveri.name" >{{sezonveri.name}}</h1>
                <h1 v-if="sezonveri.title" >{{sezonveri.title}}</h1>
                <h6 v-if="sezonveri.air_date">{{ sezonveri.air_date }}</h6>
                <h6 v-if="sezonveri.first_air_date"> {{sezonveri.first_air_date}} </h6>
                <p v-if="sezonveri.overview">{{ sezonveri.overview }}</p>
                <p v-else> Açıklama Yok</p>
                <h6>{{sezonveri.episode_count}} Bölüm</h6>
            </div>
        </div>
    </details>
</template>

<style>
.sezonapp{
    background-color: #1a1a1a;
    width: 100%;
    display: inline-block;
    margin: 10px;
}
.sezonapp summary{
    padding: 20px;
    color: whitesmoke;
}
.sezonapp img {
    width: 70%;
    margin: 20px;
    height: auto;
}
.sezonapp h5{
    padding: 10px;
}
.sezonapp p{
    color: whitesmoke;
    font-size: medium;
}
</style>

<script>
    export default({
        name:"sezonapp",
        props:["sezonveri"],
        data()
        {
            return{
                imageurl: this.$store.state.apiImageurl+this.sezonveri.poster_path
            }
        }
    })
</script>