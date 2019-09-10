import Vue from "vue";
import Vuex from "vuex";
import { mapState } from "vuex";

let initialState = {
  items: [],
  catagories: [
    { name: "Rose", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peach-rose-royalty-free-image-648161008-1548273443.jpg"},
    { name: "Cactus", img: "https://www.potterybarn.com/pbimgs/rk/images/dp/wcm/201922/0088/faux-potted-mini-cactus-c.jpg"},
    { name: "Fern", img: "https://www.adairs.com.au/globalassets/imported-assets/homewares/home-republic/home-republic/43817_fishbone/43817_fishbone_zoom_01.jpg"},
    { name: "Calendula", img: "https://cdn.pixabay.com/photo/2018/07/10/11/11/marigold-3528402__340.jpg"},
    { name: "Lily", img: "https://www.gardeners.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw68196a61/Articles/Gardening/Hero_Thumbnail/5326-lily-pxhere.jpg"},
    { name: "Sansevierias", img: "https://realornamentals.com/plant-store/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/r/o/robusta-snake-plant-small-ornamental-plant-sanseveria-robusta-realornamentals.com-web.jpg"},
  ],
  plants: []
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
for (var i = 0; i < 20; i++) {
  initialState.items.push({
    ...itemObject,
    shop: i,
    name: `Shop ${i} Flower`
  });
}

Vue.use(Vuex);

window.store = new Vuex.Store({
  state: initialState,
  mutations: {},
  getters: {}
});

export default window.store;

export function storeState() {
  let template = {};
  for (let key in initialState) {
    template[key] = key;
  }
  return mapState(template);
}
