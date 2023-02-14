import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/about",
      component: () => import("@/views/AboutPage.vue"),
    },
    {
      path: "/todolist",
      component: () => import("@/views/project-views/TodoList.vue"),
    },
    {
      path: "/two",
      component: () => import("@/views/project-views/ProjectTwo.vue"),
    },
    {
      path: "/three",
      component: () => import("@/views/project-views/ProjectThree.vue"),
    },
  ],
});

export default router;
