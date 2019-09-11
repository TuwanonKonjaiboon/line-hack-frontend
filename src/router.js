import VueRouter from "vue-router";

import HomeScreen from "./screens/HomeScreen.vue";
import ExploreScreen from './screens/ExploreScreen.vue';
import CartScreen from './screens/CartScreen.vue'
import CheckoutScreen1 from "./screens/CheckoutScreen1.vue";

window.router = new VueRouter({
  mode: "history",
  base: "/", 
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/explore", component: ExploreScreen },
    { path: "/cart", component: CartScreen },
    { path: "/checkout/1", component: CheckoutScreen1 }
  ]
});

export default window.router;
