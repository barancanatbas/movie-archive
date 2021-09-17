import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    // state verileri tuttuğumuz yerdir
    apikey: '899f5edccc021bb929f278c024a08d29',
    apiurl: 'https://api.themoviedb.org/3/',
    apiImageurl : 'https://image.tmdb.org/t/p/w500',
    apiDil:"&language=tr",
    // home data
    filmler:[],
    kategoriler:[],
    images:[],
    // movie detail
    credits:[],
    keywords:[],
    benzerler:[],
    tvs:[],
    tvdetail:[],

    // people
    human:[],
    people:[]
  },
  mutations: {
    // state içinde var olan verileri güncellediğimiz zaman burayı kullanırız

    // home mutations
    initMovie(state,movies)
    {
      state.filmler = movies
    },
    initKategoriler(state,kategori)
    {
      state.kategoriler =kategori
    },

    // movie detail page
    initCredits(state,credits)
    {
      state.credits = credits
    },
    initKeyword(state,keywords)
    {
      state.keywords = keywords
    },
    initBenzerler(state,benzerler)
    {
      state.benzerler = benzerler
    },
    initImages(state,images)
    {
      state.images = images
    },

    // tv page
    initTvs(state,tvs)
    {
      state.tvs = tvs
    },

    // tv detail page
    initTvDetail(state,detail)
    {
      state.tvdetail = detail
    },

    // people page
    initPeopleDetail(state,human)
    {
      state.human = human
    }
    
  },
  actions: {
    // asekron olarak iletişim kurarız

    // home actions
    getMovie(context,page=1)
    {
      axios.get(context.state.apiurl+"movie/top_rated?api_key="+context.state.apikey+"&page="+page).then(response=>{
        context.commit("initMovie",response.data.results) // bu şekilde mutation içinde olan init methoduna istekte bulunduk 
        // ilk parametre method adı ikinci parametre ise data
        console.log(response.data.results)
      })
    },
    getMovieTur(context,obj){
      // obj[0] = page, obj[1] = id
      axios.get(context.state.apiurl+"movie/top_rated?api_key="+context.state.apikey+context.state.apiDil+"&with_genres="+obj[1]+"&page="+obj[0]).then(response=>{
        context.commit("initMovie",response.data.results) // bu şekilde mutation içinde olan init methoduna istekte bulunduk 
        // ilk parametre method adı ikinci parametre ise data
        console.log(response.data.results)
      })
    },
    getCategory(context)
    {
      axios.get(context.state.apiurl+"genre/movie/list?api_key="+context.state.apikey+context.state.apiDil).then(response => {
        context.commit("initKategoriler",response.data.genres)
      })
    },
    // movie detail page
    getMovieDetail(context,id){
      axios.get(context.state.apiurl+"movie/"+id+"?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initMovie",response.data)
        console.log(response.data)
      })
    },
    getMovieKeyword(context,id)
    {
      axios.get(context.state.apiurl+"movie/"+id+"/keywords?api_key="+context.state.apikey+context.state.apiDil).then(response =>{
        console.log(response)
        context.commit("initKeyword",response.data.keywords) 
      })
    },
    getMovieBenzer(context,id)
    {
      axios.get(context.state.apiurl+"movie/"+id+"/recommendations?api_key="+context.state.apikey+context.state.apiDil).then(response =>{
        console.log(response.data.results)
        context.commit("initBenzerler",response.data.results) 
      })
    },
    getMovieCredits(context,id)
    {
      axios.get(context.state.apiurl+"movie/"+id+"/credits?api_key="+context.state.apikey+context.state.apiDil).then(response =>{
        console.log(response.data)
        context.commit("initCredits",response.data.cast) 
      })
    },
    // tvs page
    getTvs(context,page=1)
    {
      axios.get(context.state.apiurl+"tv/popular?api_key="+context.state.apikey+context.state.apiDil+"&page="+page).then(response=>{
        context.commit("initTvs",response.data.results) // bu şekilde mutation içinde olan init methoduna istekte bulunduk 
        // ilk parametre method adı ikinci parametre ise data
      })
    },
    // tv detail page
    getTvDetail(context,id)
    {
      axios.get(context.state.apiurl+"tv/"+id+"?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initTvDetail",response.data)
      })
    },
    getTvOyuncular(context,id)
    {
      axios.get(context.state.apiurl+"tv/"+id+"/credits?api_key="+context.state.apikey).then(response=>{
        context.commit("initCredits",response.data.cast)
      })
    },
    getTvKeyword(context,id)
    {
      axios.get(context.state.apiurl+"tv/"+id+"/keywords?api_key="+context.state.apikey).then(response=>{
        context.commit("initKeyword",response.data.results)
      })
    },
    // people page
    getHuman(context,id)
    {
      axios.get(context.state.apiurl+"person/"+id+"?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initPeopleDetail",response.data)
      })
    },
    getHumanMovies(context,id)
    {
      axios.get(context.state.apiurl+"person/"+id+"/movie_credits?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initMovie",response.data.cast)
      })
    },
    getHumanTv(context,id)
    {
      axios.get(context.state.apiurl+"person/"+id+"/tv_credits?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initTvs",response.data.cast)
      })
    },
    getHumanImages(context,id)
    {
      axios.get(context.state.apiurl+"person/"+id+"/images?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initImages",response.data.profiles)
      })
    },
    // vizyon page
    getVizyon(context)
    {
      axios.get(context.state.apiurl+"movie/upcoming?api_key="+context.state.apikey+context.state.apiDil).then(response=>{
        context.commit("initMovie",response.data.results)
        console.log(response)
      })
    },
    // popülerfilmler
    getPopulerMovie(context,page=1)
    {
      axios.get(context.state.apiurl+"movie/popular?api_key="+context.state.apikey+"&page="+page).then(response=>{
        context.commit("initMovie",response.data.results) // bu şekilde mutation içinde olan init methoduna istekte bulunduk 
        // ilk parametre method adı ikinci parametre ise data
      })
    },
    // oyuncular page
    getPeoples(context,page=1)
    {
      axios.get(context.state.apiurl+"person/popular?api_key="+context.state.apikey+context.state.apiDil+"&page="+page).then(response=>{
        context.commit("initPeopleDetail",response.data.results) // bu şekilde mutation içinde olan init methoduna istekte bulunduk 
        // ilk parametre method adı ikinci parametre ise data
        console.log(response.data.results)
      })
    }
  },
  getters:{
    // state içindeki herhangi bir veriyi bize geri döndürür.
    // home getters
    getMovies(state){return state.filmler},
    getKategori(state)
    {
      return state.kategoriler
    },
    getImages(state)
    {
      return state.images
    },

    // movie detail
    getMovieDetail(state)
    {
      return state.filmler
    },
    getKeyword(state)
    {
      return state.keywords
    },
    getMovieBenzer(state)
    {
      return state.benzerler
    },
    getCredits(state)
    {
      return state.credits
    },

    // tvs page
    getTvs(state)
    {
      return state.tvs
    },

    // tv detail
    getTvDetail(state)
    {
      return state.tvdetail
    },

    // people page
    getHuman(state)
    {
      return state.human
    }
  }
});
