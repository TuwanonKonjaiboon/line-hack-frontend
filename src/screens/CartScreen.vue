<template lang="pug">
  .screen-container
    .header-container
      .header-icons
        icon-base.icon(icon-name="camera" width="28px" height="24px"): icon-search
      .header-heading.mb-4 Shopping Cart
    .items-container
      template(v-for="(item, i) in cartItems")
        cart-item(:item="item" :key="i")
    .conclusion-container
      mixin conclusion-detail(key, value)
        .conclusion-detail
          .conclusion-text-key=key 
          .conclusion-text-value&attributes(attributes)=value
      +conclusion-detail('Subtotal', 240 + ' baht')
      +conclusion-detail('Discount coupouns', 'add')(class="material-icons")
        .coupoins
      +conclusion-detail('Total Amount', 240 + ' baht')
    .cta.w-100
      button.btn-checkout Checkout

</template>

<script>
import store, {storeState} from '../store';
import IconBase from '../components/IconBase';
import IconSearch from '../components/layouts/icons/IconSearch.vue';
import CartItem from '../components/CartItem.vue';
export default {
name: "ExploreScreen",
  store,
  computed: {
    ...storeState()
  },
  components: { IconBase, IconSearch, CartItem }
}
</script>

<style lang="scss" scoped>
  .screen-container { height: 100vh; }
  .header-container {
    padding: 4rem 0 1.5rem 0;
    position: relative;
    background-image: linear-gradient(to bottom right, #2AAF6C, #87BE6A);
    margin-bottom: 2rem;
    .header-icons {
      position: absolute;
      right: 24px;
      top: 20%;
      .icon g {
        fill: #fff;
      }
    }
    .header-heading {
      padding-left: 24px; 
      font-size: 2.1rem;
      font-weight: 600;
      color: #f4f4f4;
    }
  }
  .items-container {
    padding: 0 16px;
  }
  .conclusion-container {
    padding: 0 16px;
    margin-top: 24px;
    .conclusion-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 2;
      .material-icons {
        color: #707074;
      }
      &:not(:first-child) {
        margin-top: 14px;
      }
      &:last-child {
        margin-top: 22px;
        font-weight: 600;
      }
    }
  }
  .cta {
    position: absolute;
    bottom: 80px;
    display: flex;
    justify-content: center;
    .btn-checkout {
      font-size: 22px;
      font-weight: 400;
      color: #fff;
      letter-spacing: 1.5px;
      padding: 12px 24px;
      background-image: linear-gradient(to bottom right, #2AAF6C, #87BE6A);
      border: none;
      border-radius: 5px;
      box-shadow: 0 3px 6px rgba(#000, .16);
    }
  }
</style>