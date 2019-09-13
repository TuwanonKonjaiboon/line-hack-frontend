<template lang="pug">
  .screen-container
    .header-container
      .header-icons
        span.material-icons.icon search
      .header-heading.mb-4 Shopping Cart
    .items-container
      template(v-for="(item, i) in cartItems")
        cart-item(:item="item" :key="i")
    section.conclusion-container
      .conclusion-detail
        .conclusion-text-key Subtotal
        .conclusion-text-value {{ `${subtotal} baht` }}
      .conclusion-detail
        .conclusion-text-key Discount Coupouns
        .conclusion-text-value.material-icons add
      .conclusion-detail
        .conclusion-text-key Total Amount
        .conclusion-text-value {{ `${subtotal} baht` }}
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
    ...storeState(),
    subtotal() {
      return store.getters.subTotal;
    },
    totalAmount() {
      // TODO return total amount (subtotal - discount)
      return 1;
    }
  },
  components: { 
    IconBase, 
    IconSearch, 
    CartItem,
  },
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
      .icon {
        font-size: 28px;
        color: #fff;
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
    margin-top: 200px;
    margin-bottom: 100px;
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