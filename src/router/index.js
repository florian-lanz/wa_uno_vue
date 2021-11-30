import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/new2',
    name: 'New Game 2 Players',
    component: Home
  },
  {
    path: '/new3',
    name: 'New Game 3 Players',
    component: Home
  },
  {
    path: '/new4',
    name: 'New Game 4 Players',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
