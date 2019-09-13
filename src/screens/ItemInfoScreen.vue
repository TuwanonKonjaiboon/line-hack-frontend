<template lang="pug">
  .item-info-screen
    template(v-if="currentItem")
      .topbar.lcrbox
        div.material-icons(@click="back") arrow_back_ios
        div.topbar-title {{ currentItem && currentItem.name }}
      .img-section
        .img-container: img.img(:src="currentItem.img")
      .detail-section.lrbox
        .description
          .item-name {{ currentItem.name }}
          .item-rating
            .stars: span.material-icons(v-for="n in Math.round(currentItem.rating)") star
            .rating {{ currentItem.rating }}/5
            .status In Stock
          .item-shop {{ currentItem.shop }}
        .description-cta
          .icons
            span.material-icons.favorite-icon favorite_border
            span.material-icons.share-icon share
          .item-price {{ currentItem.price }} Baht           
        .cta
      .information-section
        .navigate
          div(
            v-for="link in links"
            :class="{ active: isActive(link.name)}"
            @click="setActive(link.name)"
          ). 
            {{ link.name }}
        .content
          p.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        .add-to.lrbox
          button.add-to-wishlist.flex-grow Add to wishlist
          button.add-to-cart.flex-grow(@click="addCartItem") ADD TO CART

    template(v-else)
      .topbar.lcrbox
        div.material-icons arrow_back_ios
        div.topbar-title Not found
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

.item-info-screen {
  padding-bottom: 54px;
}

.img-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
  .img-container {
    width: 80vw;
    height: 80vw;
    overflow: hidden;
    .img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

.detail-section {
  padding: 0 24px;
  margin-bottom: 24px;
  .description {
    line-height: 1.5;
    .item-name {
      font-size: 22px;
      font-weight: 600;
    }
    .item-rating {
      display: flex;
      align-items: center;
      > * {
        margin-right:8px;
      }
      .stars {
        display: flex;
        align-items: center;
        span {
          font-size: 18px;
        }
      }
    }
  }
  .description-cta {
    div {
      display: block;
      text-align: right;
    }
  }
}

.information-section {
  .navigate {
    display: flex;
    align-items: center;
    div {
      flex: auto;
      flex-grow: 1;
      text-align: center;
      border: 2px solid #f4f4f4;
      border-left: none;
      border-right: none;
      padding: 4px 0;
    }

    div.active {
      border-color: #5ab76b;
      color: #5ab76b;
    }
  }
}

.content {
  height: 300px;
  overflow-y: scroll;
  padding: 0 16px;
  p {
    color: #707074;
  }
}

.add-to {
  button {
    font-size: 18px;
    font-weight: 600;
    padding: 14px 24px;
    border: none;
    &.add-to-wishlist {
      color: #8E8E93;
      background-color: #f4f4f4;
    }
    &.add-to-cart {
      color: #ffffff;
      background-color: #5ab76b;
    }
    &:focus {
      outline: none;
    }
    &:active {
      opacity: .85;
    }
  }
}


</style>

<script>
import store, { storeState } from "../store";

export default {
  name: "ItemInfoScreen",
  store,
  computed: {
    ...storeState(),
    currentItem: function () {
      const itemId = this.$route.params.itemId;
      const current = this.$store.state.items.find(item => item.id === itemId);
      if(current !== undefined) {
        return current;
      }
      return null;
    }
    // currentItem: function () {
    //   return this.$store.state.items[0];
    // }
  },
  components: {},
  methods: {
    isActive: function (link) {
      return link === this.activeLink;
    },
    setActive: function (link) {
      this.activeLink = link;
    },
    addCartItem: function () {
      this.$store.dispatch('add_cart_item', {
        itemId: this.currentItem.id
      })
    },
    back: function () {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      isFound: null,
      activeLink: 'Description',
      links: [
              {name : 'Description'}, 
              {name : 'Information'}, 
              {name : 'Seller'}, 
              {name : 'Review'}
            ]
    }
  },
};
</script>
