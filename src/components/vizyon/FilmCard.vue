<template>
    <div class="card vizyon text-white">
        <img
          :src="imgurl"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay texts">
          <h4 class="card-title">{{film.title}}</h4>
          <p class="cikistarih">
            {{film.release_date}}
          </p>
        </div>
      </div>
</template>

<style>
    .vizyon{
        width: 350px;
        height: 500px;
        display: inline-block;
        margin: 10px;
        background-color: none;
    }
    .vizyon img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .texts{
        background-color: rgba(0, 0, 0, 0.4)
    }
    .cikistarih{
        width: 100%;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        bottom: 0;
        left: 0;
        color: whitesmoke;
        font: medium;
    }
</style>
<script>

    export default({
        name:"filmcard",
        props:["film"],
        data()
        {
            return{
                imgurl:this.$store.state.apiImageurl+this.film.poster_path
            }
        }
    })

</script>