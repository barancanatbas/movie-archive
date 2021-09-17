<template>
    <div class="resimapp">
        <img :src="imgurl" alt="">
    </div>
</template>

<style>
    .resimapp{
        display: inline-block;
        max-width: 250px;
        margin: 10px;
    }
    .resimapp img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>

<script>

    export default({
        name:"resimapp",
        props:["resim"],
        data()
        {
            return{
                imgurl:this.$store.state.apiImageurl+this.resim.file_path
            }
        }
    })
</script>