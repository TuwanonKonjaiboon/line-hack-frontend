<template lang="pug">
  .shop-container
    .shop-img-container: .shop-img(v-bind:src="item.img" v-bind:style=`
      {
        backgroundImage: 'url('+item.img+')'
      }
    `)
    .shop-content-container
      .shop-name {{ item.name }}
      .shop-detail: p This is a flower shop

</template>

<script>
export default {
  name: "Shop",
  props: {
    item: Object,
    itemi: Number
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.shop-container {
  padding: 10px 15px;
  display: flex;
  align-items: center;
}
.shop-img-container {
  margin-right: 15px;
  width: 75px;
  height: 75px;
  overflow: hidden;
  .shop-img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>




