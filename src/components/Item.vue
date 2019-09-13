<template lang="pug">
  .item-container(@click="navigateToInfo")
    .item-img-container: img.item-img(v-bind:src="item.img")
    .item-name {{item.name}}
    .item-shop-container.lcrbox
      .item-shop-name OK Shop
    .item-rating-container.lcrbox
      .item-rating {{item.rating}}
      i.fas.fa-star.ml-1
    .item-price {{item.price}} ฿
</template>

<style lang="scss" scoped>
  .item-container {
    position: relative;
    margin-right: 16px;
    .item-img-container {
      width: 139px;
      height: 106px;
      /* overflow: hidden; */
      .item-img {
        border-radius: 5px;
        width: 100%;
      }
    }
    .item-name {
      font-size: 1rem;
    }
    .item-shop-container, .item-rating-container {
      color: #707074;
    }
    .item-price {
      position: absolute;
      right: 5px;
      bottom: 2px;
      font-size: 18px;
    }
  }
</style>

<script>
import store, { storeState } from "../store";

export default {
  name: "Item",
  store,
  computed: {
    ...storeState()
  },
  props: ["item", "itemi"],
  methods: {
    navigateToInfo: function () {
      this.$router.push({ path: `/items/${this.$props.item.id}` })
    }
  }
};
</script>

