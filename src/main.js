import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import ViewPost from "./components/ViewPost";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home },
  { path: "/comments/:id", component: UserDetails, props: true },
  { path: "/post/:id", component: ViewPost, props: true },
  { path: "/*", component: Home },
];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
