import Vue from "vue";
import Vuex from "vuex";
import uuid from 'uuid';
import { mapState } from "vuex";

import { ADD_AMOUNT, REMOVE_AMOUNT, REMOVE_CART_ITEM, ADD_CART_ITEM } from './types/mutation_types.js'

let initialState = {
  items: [],
  plants: [],
  cartItems: []
};

const itemObject = {
  id: "",
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
for (let i = 0; i < 20; i++) {
  initialState.items.push({
    ...itemObject,
    id: uuid(),
    shop: 'OK Shop',
    name: `Shop ${i} Flower`
  });
}

Vue.use(Vuex);

window.store = new Vuex.Store({
  state: initialState,
  mutations: {
    [ADD_AMOUNT](state, {itemId, amount}) {
      const ind = state.cartItems.findIndex(item => item.id === itemId);
      state.cartItems[ind].amount += amount;
    },
    [REMOVE_AMOUNT](state, {itemId, amount}) {
      const ind = state.cartItems.findIndex(item => item.id === itemId);
      if(state.cartItems[ind].amount > 0)
        state.cartItems[ind].amount -= amount;
    },
    [REMOVE_CART_ITEM](state, {itemId}) {
      const ind = state.cartItems.findIndex(item => item.id === itemId);
      state.cartItems.splice(ind, 1);
    },
    [ADD_CART_ITEM](state, {itemId}) {
      if(state.cartItems.find(item => item.id === itemId) !== undefined) {
        return;  
      }
      const ind = state.items.findIndex(item => item.id === itemId);
      state.cartItems = [ ...state.cartItems, { ...state.items[ind], amount: 1 }];
    }
  },
  getters: {
    subTotal: (state) => {
      let sum = 0;
      state.cartItems.forEach(item => {
        sum += item.price * item.amount;
      })
      return sum;
    }
  },
  actions: {
    add_amount_by_one: (context, payload) => {
      context.commit(ADD_AMOUNT, payload);
    },
    remove_amount_by_one: (context, payload) => {
      context.commit(REMOVE_AMOUNT, payload);
    },
    add_cart_item: (context, payload) => {
      context.commit(ADD_CART_ITEM, payload);
    },
    remove_cart_item: (context, payload) => {
      context.commit(REMOVE_CART_ITEM, payload);
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
