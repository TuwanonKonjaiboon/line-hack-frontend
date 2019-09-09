import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

window.vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

setInterval(() => {
  window.vm.$forceUpdate();
}, 500);
