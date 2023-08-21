<template>

  <article class="destacada">
    <img :src="newsArticles[0].urlToImage" alt="imagen_destacada">
    <h1>{{newsArticles[0].title}}</h1>
  </article>
</template>

<script>
export default {
  name: 'articleComponent',
  props: ['newsArticles']
}
</script>

<style>
  .destacada{
    height: 500px;
    width: 300px;
  }
</style>