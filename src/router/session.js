//Layout
import SessionLayout from "../layout/SessionLayout";

//Views
import Login from "../views/Session/Login";
import Register from "../views/Session/Register";

export const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: SessionLayout
    }
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: Register,
    meta: {
      layout: SessionLayout
    }
  }
];
