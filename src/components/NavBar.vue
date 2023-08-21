<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/customize-news">Your News</router-link>
      <SearchBar />
    </nav>
  </template>
  
  <script>
  import SearchBar from "@/components/SearchBar.vue";
  
  export default {
    components: {
      SearchBar
    }
  };
  </script>
  
  <style scoped>
  /* Your navbar styles here */
  </style>
  