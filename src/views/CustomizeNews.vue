<template>
    <div>
      <label v-for="(category, index) in categories" :key="index">
        <input
          type="checkbox"
          :value="category"
          v-model="selectedCategories"
        />
        {{ category }}
      </label>
      <button>Fetch News</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
        countries: ['Argentina', 'United States', 'Japan', 'South Korea'],
        selectedCategories: [],
      };
    },
    methods: {
      // fetchNews() {
      //   // Fetch news based on selectedCategories
      //   const selectedCategoriesString = this.selectedCategories.join('&');
      //   const url = `https://newsapi.org/v2/top-headlines?country=de&category=${selectedCategoriesString}`;
        
      //   // Perform the fetch request here and update the data accordingly
      // },
    },
  };
  </script>
  