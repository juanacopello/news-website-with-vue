<template>
  <div>
    <input type="text" v-model="searchValue" placeholder="Search news..." />
    <button @click="getSearchedNews">Buscar</button>
    <div class="container">
      <article v-for="(a, index) in articles" :key="index" class="newsArticle"
       :class="{
        no_image: articles[index].urlToImage == null,
        with_image: articles[index].urlToImage !== null
       }">
        <img v-if="articles[index].urlToImage !== null"
        :src="articles[index].urlToImage" alt="imagen_noticia" />
        <div class="texto_articulo">
          <h4>{{ splitName(index) }}</h4>
          <p class="author">
            <span v-if="articles[index].author !== null"
              >{{ articles[index].author }} in
            </span>
            <a :href="articles[index].url" target="_blank">{{
              articles[index].source.name
            }}</a>
          </p>
          <p class="time">{{ timeTranform(index) }}</p>
        </div>
      </article>
    </div>

    <!-- <articleComponent :newsArticles="articles" /> -->
    <FooterComponent />
  </div>
</template>

<script>
import Axios from "axios";
// import articleComponent from "./components/articleComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';


export default {
  name: "App",
  components: {
    // articleComponent,
    FooterComponent
  },
  data() {
    return {
      articles: [],
      searchValue: ""
    };
  },
  mounted() {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d07831122a564646934cbc8636213c50"
    )
      .then((response) => {
        console.log(response.data.articles);
        this.articles = response.data.articles;
           
      })
      
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
   
  },
  methods: {
   timeTranform(i){
      dayjs.extend(relativeTime)
      const relTime = dayjs(this.articles[i].publishedAt).fromNow()
      return relTime
    },
    splitName(i){
      return this.articles[i].title.split("-")[0]
    },
    getSearchedNews(){
      let query = this.searchValue.replace(' ', '+')
      Axios.get(`https://newsapi.org/v2/everything?q='${query}'&apiKey=d07831122a564646934cbc8636213c50&pageSize=20&searchIn=title`)
      .then(response => {
      console.log(response)
      this.articles = response.data.articles
      })
    }
  },
};
</script>

<style>
:root {
  --first-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/styles/home_mobile.css';
@import './assets/styles/home_desktop.css';

</style>
