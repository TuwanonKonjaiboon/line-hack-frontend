import VueRouter from "vue-router";
import HomeScreen from "./screens/HomeScreen.vue";
import MyShopScreen from "./screens/MyShopScreen.vue";

window.router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    { path: "/", component: HomeScreen },
    {
      path: "/myshop",
      component: MyShopScreen
    }
  ]
});

export default window.router;
