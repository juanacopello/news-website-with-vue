<template>
    <div>
    <input type="text" v-model="searchValue" v-on:keyup.enter="getSearchedNews" placeholder="Search news..." />
    <button @click="getSearchedNews">Search</button>
    </div>
  </template>
  
  <script>

import Axios from "axios";


  export default {
    data() {
      return {
        searchValue: "",
      };
    },
    methods: {
        getSearchedNews(){
      let query = this.searchValue.replace(' ', '+')
      Axios.get(`https://newsapi.org/v2/everything?q='${query}'&apiKey=d07831122a564646934cbc8636213c50&pageSize=20&searchIn=title`)
      .then(response => {
      console.log(response)
      this.articles = response.data.articles
      this.searchValue = ''
      })
    }
    }
  };
  </script>
  