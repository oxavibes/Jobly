import Vue from "vue";
import VueRouter from "vue-router";

//Layouts
import DefaultLayout from "../layout/DefaultLayout";
import SessionLayout from "../layout/SessionLayout";

//Components
import Home from "../views/Home.vue";
import Login from "../views/Session/Login";
import Register from "../views/Session/Register";
// import Faqs from "../views/Faqs"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: SessionLayout
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      layout: SessionLayout
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
