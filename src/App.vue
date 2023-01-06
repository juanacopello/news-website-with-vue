<template>
  <div>
    <div class="containerArticulos">
      <article v-for="(a, index) in articles" :key="index" class="cardArticulo">
        <img :src="articles[index].urlToImage" alt="imagen_noticia" />
        <div class="texto_articulo">
          <h4>{{ articles[index].title.split("-")[0] }}</h4>
          <p>
            <span v-if="articles[index].author !== null"
              >{{ articles[index].author }} in
            </span>
            <a :href="articles[index].url" target="_blank">{{
              articles[index].source.name
            }}</a>
          </p>
        </div>
      </article>
    </div>

    <!-- <articleComponent :newsArticles="articles" /> -->
    <!-- || articles[index].author.includes('https') == false -->
  </div>
</template>

<script>
import Axios from "axios";
// import articleComponent from "./components/articleComponent.vue";

export default {
  name: "App",
  components: {
    // articleComponent,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
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
  computed() {},
  methods: {},
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
}

.cardArticulo {
  display: flex;
  flex-direction: row;
  text-align: left;
  margin: auto;
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.cardArticulo a {
  color: var(--first-color);
  font-weight: 700;
}

.cardArticulo h4 {
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 0;
}

.cardArticulo p {
  padding: 20px 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
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
</style>
