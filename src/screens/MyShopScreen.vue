<template>
  <div id="myshop">
    <hero title="My Shop"/>
    <shop v-for="(item, itemi) in items" :key="itemi" :item="item" :itemi="itemi"/>
  </div>
</template>

<script>
import store from "@/store";
import Shop from "@/components/Shop.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "MyShop",
  props: [],
  data() {
    return {
      items: store.state.items
    };
  },
  components: {
    shop: Shop,
    hero: Hero
  }
};
</script>


