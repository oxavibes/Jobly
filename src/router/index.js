import Vue from "vue";
import VueRouter from "vue-router";

//Routes
import { routes as sessionRoutes } from "./session";
import { routes as candidateRoutes } from "./candidate";
import { routes as employerRoutes } from "./employer";

//Layouts
import DefaultLayout from "../layout/DefaultLayout";
import HomeLayout from "../layout/HomeLayout";
import SessionLayout from "../layout/SessionLayout";

//Views
import Home from "../views/Home";
import JobListing from "../views/Jobs/JobListing";
import ErrorPage from "../views/ErrorPage";

Vue.use(VueRouter);

const routes = [
  ...sessionRoutes,
  ...candidateRoutes,
  ...employerRoutes,
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: HomeLayout
    }
  },
  {
    path: "/job-listing",
    name: "job-listing",
    component: JobListing,
    meta: {
      layout: DefaultLayout,
      breadcrumb: [
        {
          name: "Inicio",
          link: "/"
        },
        {
          name: "Lista de trabajos",
          link: "/job-listing",
          active: true
        }
      ]
    }
  },
  {
    path: "/404",
    name: "404",
    component: ErrorPage,
    meta: {
      layout: SessionLayout
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    // return { x: 0, y: 0 };
  }
});

export default router;
