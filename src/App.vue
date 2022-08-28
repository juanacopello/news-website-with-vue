<template>
<div>
 <div class="containerArticulos">
  <article v-for="(a, index) in articles" :key="index"  class="cardArticulo">
  <h4>{{articles[index].title}}</h4>
  <p>{{articles[index].author}}</p>
  <a :href="articles[index].url" target="_blank">Ver más</a>
  </article>
  </div>

  <articleComponent :newsArticles = "articles" />
  
</div>

</template>

<script>
import Axios from 'axios';
import articleComponent from './components/articleComponent.vue';

export default {
  name: "App",
  components: {
    articleComponent
  },
  data() {
    return {
      articles: []
    };
  },
  created(){
  Axios.get("https://newsapi.org/v2/top-headlines?country=ar&apiKey=d07831122a564646934cbc8636213c50")
          .then(
                  response => {
                      console.log(response.data.articles)
                      this.articles = response.data.articles
                  }
              )
          .catch(error => {
            console.log(error)
          })
  },
  methods: {
    cambiarNombre(nombre, event) {
      this.name = nombre;
      console.log(event);
    },
    sumar(num) {
      this.count += num;
    },
    restar(num) {
      this.count -= num;
    },
    debug(value) {
      console.log(value);
    },
  },
};
</script>

<style>

:root{
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

.containerArticulos{
display: flex;
flex-direction: column;
}

.containerArticulos .cardArticulo{
    border-bottom: 1px solid var(--first-color);
}

.containerArticulos .cardArticulo a{
      color: var(--first-color);
    text-decoration: none;
}
</style>
