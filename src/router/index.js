import { createRouter, createWebHistory } from "vue-router";
import BooksList from "../views/BooksList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "book-list",
      component: BooksList,
    },
    {
      path: "/book/:id",
      name: "book-detail",
      component: () => import("../views/BookDetail.vue"),
    },
  ],
});

export default router;
