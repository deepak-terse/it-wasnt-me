import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Send from "../views/Send.vue";
import Received from "../views/Received.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/home", name: "Home", component: Home,
		meta: { requiresAuth: true }
	},
	{
		path: "/register", name: "SignUp", component: SignUp,
		meta: { requiresAuth: false }
	},
	{
		path: "/login", name: "Login", component: Login,
		meta: { requiresAuth: false }
	},
	{
		path: "/send", name: "Send", component: Send,
		meta: { requiresAuth: false }
	},
	{
		path: "/received", name: "Received", component: Received,
		meta: { requiresAuth: true }
	},
	{ 	path: "*", component: PageNotFound,
		meta: { requiresAuth: false } 
	}

];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

function isAuthenticated(){
	return true;
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router;
