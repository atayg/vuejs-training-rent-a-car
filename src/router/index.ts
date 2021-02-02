import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/home-page.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/ContactUs",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contact-us.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
