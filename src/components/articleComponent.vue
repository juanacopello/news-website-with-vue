<template>

  <article>
    <h1>{{newsArticles[0].title}}</h1>
  </article>
</template>

<script>
export default {
  name: 'articleComponent',
  props: ['newsArticles']
}
</script>