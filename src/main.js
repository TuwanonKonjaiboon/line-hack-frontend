import Vue from "vue";
import VModel from 'vue-js-modal';
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(VModel);

Vue.config.productionTip = false;

window.vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

setInterval(() => {
  window.vm.$forceUpdate();
}, 500);
