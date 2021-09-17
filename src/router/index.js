import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/:p?",
    name: "Home",
    component: Home,
    props:true
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/movie/:id",
    name:"movie",
    component:()=>  import(/* webpackChunkName: "makale" */ "../views/MovieDetail.vue"),
    props:true
  },
  {
    path: "/movies/:id/:turad/:p?",
    name:"movies",
    component:()=>  import(/* webpackChunkName: "movies" */ "../views/MovieTur.vue"),
    props:true
  },
  {
    path: "/populerfilmler/:p?",
    name:"populerfilmler",
    component:()=>  import(/* webpackChunkName: "populerfilmler" */ "../views/PopulerFilmler.vue"),
    props:true
  },
  {
    path: "/populervt/:p?",
    name:"populertv",
    component:()=>  import(/* webpackChunkName: "populerfilmler" */ "../views/PopulerTv.vue"),
    props:true
  },
  {
    path: "/tv/:id",
    name:"tvdetail",
    component:()=>  import(/* webpackChunkName: "tvdetay" */ "../views/Tvdetail.vue"),
    props:true
  },
  {
    path: "/people/:id",
    name:"peopleprofil",
    component:()=>  import(/* webpackChunkName: "people profil" */ "../views/Peopleprofil.vue"),
    props:true
  },
  {
    path: "/peoples/:p?",
    name:"peoples",
    component:()=>  import(/* webpackChunkName: "oyuncular" */ "../views/People.vue"),
    props:true
  },
  {
    path: "/vizyon",
    name:"vizyon",
    component:()=>  import(/* webpackChunkName: "vizyon" */ "../views/Vizyon.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
