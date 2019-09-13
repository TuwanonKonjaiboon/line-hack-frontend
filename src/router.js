import VueRouter from "vue-router";

// import HomeScreen from "./screens/HomeScreen.vue";
import ExploreScreen from './screens/ExploreScreen.vue';
import CartScreen from './screens/CartScreen.vue'
import CheckoutScreen1 from "./screens/CheckoutScreen1.vue";
import CheckoutScreen2 from "./screens/CheckoutScreen2.vue";
import CheckoutScreen3 from "./screens/CheckoutScreen3.vue";
import ItemInfoScreen from './screens/ItemInfoScreen.vue'

window.router = new VueRouter({
  mode: "history",
  base: "/", 
  routes: [
    // { path: "/", component: HomeScreen },
    { path: "/", component: ExploreScreen },
    { path: "/cart", component: CartScreen },
    { path: "/checkout/1", component: CheckoutScreen1 },
    { path: "/checkout/2", component: CheckoutScreen2 },
    { path: "/checkout/3", component: CheckoutScreen3 },
    { path: "/items/:itemId", component: ItemInfoScreen }
  ]
});
 
export default window.router;
