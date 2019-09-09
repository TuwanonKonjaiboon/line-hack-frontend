import Vue from "vue";
import Vuex from "vuex";
import { mapState } from "vuex";

let initialState = {
  items: []
};

const itemObject = {
  img:
    "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name: "XYZ Flower",
  price: 80,
  shop: 1,
  rating: 4.5,
  favouriteBy: [],
  orderedBy: [],
  reviews: [],
  promoCode: { CODE: { price: 45 } }
};

// raise items for 20 items
for (var i = 0; i < 20; i++) {
  initialState.items.push({
    ...itemObject,
    shop: i,
    name: `[Shop ${i}]`
  });
}

Vue.use(Vuex);

window.store = new Vuex.Store({
  state: initialState,
  mutations: {},
  getters: {
    activated: state => {
      // state.available[state.kind]
      return;
    }
  }
});

export default window.store;

export function storeState() {
  let template = {};
  for (let key in initialState) {
    template[key] = key;
  }
  return mapState(template);
}
