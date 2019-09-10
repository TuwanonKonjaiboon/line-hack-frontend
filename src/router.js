import VueRouter from "vue-router";

import HomeScreen from "./screens/HomeScreen.vue";
import ExploreScreen from './screens/ExploreScreen.vue';

window.router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/explore", component: ExploreScreen },
  ]
});

export default window.router;
