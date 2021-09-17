<template>
    <router-link :to="url" class="actorapp nav-link">
        <div class="row">
            <div class="col-md-5 actorresim">
                <img :src="imageurl" alt="">
            </div>
            <div class="col-md-7 actortitle">
                <h5 class="mt-4"> {{veriactor.name}} </h5>
                <p> {{veriactor.known_for_department}} </p>
                <div class="row">
                    <img src="../../assets/star.png" class="staricon" alt=""><p class="imdb">{{veriactor.popularity}}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style>
    .actorapp{
        margin: 5px;
        padding-left: 10px; padding-right: 10px; padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 7px;
        width: 500px;
        height: auto;
        display: inline-block;
        color: white;
        background-color: rgb(22, 22, 22);
    }
    .actorresim img{
        width: 118px;
        height:118px;
        border-radius: 50%;
        object-fit: cover;
    }
    .imdb{
        float: left;
        width: auto;
        margin-left: -7px;
        padding: 0;
    }
</style>

<script>

    export default({
        name: 'actorapp',
        props:["veriactor"],
        data(){
            return{
                imageurl:this.$store.state.apiImageurl+this.veriactor.profile_path,
                url: "/people/"+this.veriactor.id
            }
        }
    })
</script>