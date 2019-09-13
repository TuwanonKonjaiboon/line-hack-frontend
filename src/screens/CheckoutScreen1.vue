<template lang="pug">
  transition(name="slide")
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
          +payment-step("SHIPPING")
          +payment-step("ORDER")

        .payment-detail-block
          .payment-detail-head CONTACT
          +payment-detail("FIRST NAME", "Chomtana")
          +payment-detail("LAST NAME", "Chanjaraswichai")
          
        .payment-detail-block
          .payment-detail-head ADDRESS
          +payment-detail("ADDRESS LINE 1", "blah")
          +payment-detail("ADDRESS LINE 2", "blah blah")
          
        router-link.payment-next-btn(to="/checkout/2") CONTINUE
    
    
    
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

.payment-detail-block {
  margin-top: 24px;

  .payment-detail-head {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .payment-detail-container {
    margin-top: 4px;
    padding: 12px 8px;
    border: 1px solid #5ab76b;
    border-radius: 10px;

    .payment-detail-title {
      color: #707074;
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
</style>

<script>
import store, { storeState } from "../store";

export default {
  name: "CheckoutScreen1",
  store,
  computed: {
    ...storeState()
  }
};
</script>
