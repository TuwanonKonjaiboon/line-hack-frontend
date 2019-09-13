<template lang="pug">
  .checkout-screen-1
    .topbar.lcrbox
      div <
      div.topbar-title CHECKOUT
      
    .body-container
      mixin payment-step(text)
        .payment-step&attributes(attributes)
          .payment-check-container
            .payment-line.payment-line-left
            .payment-check: span.material-icons check
            .payment-line.payment-line-right
          .payment-text=text

      mixin payment-detail(title, value)
        .lrbox.payment-detail-container
          .payment-detail-title=title
          .payment-detail-value=value

      .payment-step-container
        +payment-step("PAYMENT").active
        +payment-step("SHIPPING").active
        +payment-step("ORDER")
        
      .payment-block
        .payment-block-head.lrbox
          .payment-block-head-text SHIPPING TO
          .payment-block-head-edit: span.material-icons edit
        div บ้านของ Chomtana
        
      .payment-block
        .payment-block-head.lrbox
          .payment-block-head-text ORDER
          .payment-block-head-edit: span.material-icons edit
        template(v-for="(item, i) in cartItems")
          cart-item-view(:item="item" :key="i")
          
      .payment-block
        .payment-block-head.lrbox
          .payment-block-head-text DELIVERY
          .payment-block-head-edit: span.material-icons edit
        .lrbox
          div Thai post (2 days)
          div 30 Baht
          
      .payment-summary
        .payment-summary-item
          div &nbsp;
          div.payment-summary-title Item cost ({{cartItems.length}})
          div.payment-summary-value {{itemCost}} Baht
        
      router-link.payment-next-btn(to="/checkout/3") PAY NOW
    
    
    
</template>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  font-size: 12pt;
}

* {
  box-sizing: border-box;
}

.lrbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.lcrbox {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > *:first-child + * {
    flex-grow: 1;
  }
}

.topbar {
  background-color: #5ab76b;
  color: white;
  padding: 16px;

  .topbar-title {
    text-align: center;
  }
}

.body-container {
  margin-top: 9px;
  padding: 18px;
}

.payment-step-container {
  display: flex;
  justify-content: space-around;

  .payment-step {
    flex-grow: 1;
    text-align: center;
  }

  .payment-text {
    color: #707074;
  }

  .payment-step:first-child {
    .payment-line-left {
      visibility: hidden;
    }
  }

  .payment-step:last-child {
    .payment-line-right {
      visibility: hidden;
    }
  }

  .payment-check-container {
    display: flex;
    margin-bottom: 8px;
    align-items: center;

    .payment-check {
      text-align: center;
      white-space: nowrap;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;

      border: 2px solid #5ab76b;

      .material-icons {
        font-size: 16px;
        line-height: 16px;
      }
    }

    .payment-line {
      border-bottom: 2px solid #5ab76b;
      flex-grow: 1;
      flex-basis: 50%;
      height: 3px;
    }
  }

  .payment-step.active {
    .payment-check {
      background-color: #5ab76b;
    }

    .payment-line-right {
      border-bottom-width: 4px;
    }

    & + .payment-step {
      .payment-line-left {
        border-bottom-width: 4px;
      }
    }
  }
}

.payment-block {
  margin-top: 8px;
  padding: 16px;
  box-shadow: 0px 2px 6pt rgba(0,0,0,0.1);
  
  .payment-block-head {
    color: #707074;
    
    .material-icons {
      font-size: 12pt;
    }
  }
}

.payment-next-btn {
	padding: 18px;
	background-color: #5AB76B;
	border-radius: 10px;
	margin-top: 30px;
	text-align: center;
	color: white;
  text-decoration: none;
  font-size: 14pt;
	
	display: block;
	
	&:hover {
		cursor: pointer;
		text-decoration: none;
	}
}

.payment-summary {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  
  .payment-summary-item {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 50% auto auto;
    
    .payment-summary-value {
      text-align: right;
    }
  }
}
</style>

<script>
import store, { storeState } from "../store";
import CartItemView from '../components/CartItemView.vue';

export default {
  name: "CheckoutScreen1",
  store,
  computed: {
    ...storeState(),
    itemCost() {
      return this.cartItems.reduce((sum, x)=>sum+x.price*x.amount, 0);
    }
  },
  components: {
    CartItemView
  },
  methods: {
    
  }
};
</script>
