import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
// import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

// const PageNotFound = { template: '<p>Page not found</p>' }
// const Home = { template: '<p>home page</p>' }
// const SignUp = { template: '<p>singup page</p>' }
// const Login = { template: '<p>login page</p>' }

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
  // { path: "*", component: PageNotFound }

];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
