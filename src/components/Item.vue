<template lang="pug">
  .item-container
    .item-img-container: img.item-img(v-bind:src="item.img")
    .item-name {{item.name}}
    .item-price {{item.price}}
    .item-shop-container.lcrbox
      .item-shop-name OK Shop
      div
      .item-fav-btn
        .item-fav-icon Fav
    .item-rating-container.lcrbox
      .item-rating-star S
      .item-rating {{item.rating}}
</template>

<script>
import store, { storeState } from "../store";

export default {
  name: "Item",
  store,
  computed: {
    ...storeState()
  },
  props: ["item", "itemi"]
};
</script>

<style lang="scss">
.item-container {
  padding: 8px;
  margin: 8px;

  .item-rating-star {
    margin-right: 4px;
  }

  .item-name {
    font-weight: bold;
  }

  .item-img-container {
    text-align: center;

    .item-img {
      width: 100px;
      height: 100px;
    }
  }

  &::after {
    content: "";
    flex: auto;
    flex-grow: 1;
  }
}
</style>

