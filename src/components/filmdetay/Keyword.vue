<template>
    <div class="keywordapp">
        #{{keywordata.name}}
    </div>
</template>

<style>
    .keywordapp{
        margin: 5px;
        border: 2px solid whitesmoke;
        padding-left: 10px; padding-right: 10px; padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 20px;
        width: auto;
        display: inline-block;
        color: white;

    }
</style>

<script>

    export default({
        name: 'keywordapp',
        props:["keywordata"]
    })
</script>