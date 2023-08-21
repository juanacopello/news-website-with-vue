import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import CustomizeNews from "@/views/CustomizeNews.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/customize-news", component: CustomizeNews }
  // Add more routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
