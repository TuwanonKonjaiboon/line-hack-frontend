<template>
  <div class="favourite-items-container">
    <template v-for="(item,itemi) in items">
      <Item :item="item" :itemi="itemi" :key="itemi"/>
    </template>
  </div>
</template>

<script>
import store, { storeState } from "../store";
import Item from "../components/Item.vue";

//console.log(Item)

export default {
  name: "HomeScreen",
  store,
  computed: {
    ...storeState()
  },
  components: { Item }
};
</script>

<style lang="scss">
.favourite-items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
