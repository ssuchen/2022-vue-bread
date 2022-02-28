import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/CartView.vue"),
      },
      {
        path: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "products",
        component: () => import("../views/ProductsView.vue"),
      },
      {
        path: "product",
        component: () => import("../views/ProductView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/AdminProductsView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
