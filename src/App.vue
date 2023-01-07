<template>
  <div>
    <div class="containerArticulos">
      <article v-for="(a, index) in articles" :key="index" class="cardArticulo">
        <img :src="articles[index].urlToImage" alt="imagen_noticia" />
        <div class="texto_articulo">
          <h4>{{ articles[index].title.split("-")[0] }}</h4>
          <p class="author">
            <span v-if="articles[index].author !== null"
              >{{ articles[index].author }} in
            </span>
            <a :href="articles[index].url" target="_blank">{{
              articles[index].source.name
            }}</a>
          </p>
          <p class="time">{{ timeTranform(index)}}</p>
        </div>
      </article>
    </div>

    <!-- <articleComponent :newsArticles="articles" /> -->
    <!-- || articles[index].author.includes('https') == false -->
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
    };
  },
  mounted() {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d07831122a564646934cbc8636213c50"
    )
      .then((response) => {
        console.log(response.data.articles);
        this.articles = response.data.articles;
        
        //console.log(dayjs(this.articles[0].publishedAt))
       
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

.containerArticulos {
  display: flex;
  flex-direction: column;
  margin: 0 5px;
}

.cardArticulo {
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 15px 0;
  border-bottom: 1px solid black;
  height: 160px;
  position: relative;
}


.cardArticulo:last-child{
  border-bottom: none;
}

.cardArticulo a {
  color: var(--first-color);
  font-weight: 700;
}

.cardArticulo h4 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1;
  color: #161616;
  margin-top: 10px;
}

.author {
  padding: 20px 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 10px;
  color: #706d6d;
}

.cardArticulo img {
  width: 200px;
  height: auto;
}

.texto_articulo {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.time{
  font-size: 12px;
  position: absolute;
  bottom: 10px;
}

</style>
