<template>
    <nav class="col-md-12 mx-auto  navbar navbar-expand-lg navbar-light menu">
            <div class="container">
              <a class="navbar-brand" style="color: #f5c518;" href="#"><h3>Film İzle</h3></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse position-relative" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
                  <li class="nav-item m-2">
                    <router-link to="/" class="nav-link colorgold" aria-current="page" >Anasayfa</router-link>
                  </li>
                  <li class="nav-item m-2">
                    <router-link to="/about" class="nav-link colorgold" href="#">Hakkımda</router-link>
                  </li>
                  <li class="nav-item m-2">
                    <router-link to="/populerfilmler" class="nav-link colorgold" href="#">Popüler Filmler</router-link>
                  </li>
                  <li class="nav-item m-2">
                    <router-link to="/populervt" class="nav-link colorgold" href="#">Popüler Diziler</router-link>
                  </li>
                  <li class="nav-item m-2">
                    <router-link to="/vizyon" class="nav-link colorgold" href="#">Vizyona Girenler</router-link>
                  </li>
                  <li class="nav-item m-2">
                    <router-link to="/peoples" class="nav-link colorgold" href="#">Oyuncular</router-link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
</template>

<style>
  .nav-link{
    color: white !important;
    font-size: medium !important;
  }
  .menu{
    background-color: #1a1a1a;
  }
</style>

<script>

export default({
  name:"Header"
})
</script>



