<template lang="pug">
  .item-hori-container
    .item-hori-child(v-for="(item,i) in items")
      Item(v-bind:item="item" v-bind:key="i")
</template>


<script>
import Item from "./Item.vue";

export default {
  name: "ItemHori",
  props: ["items"],
  components: { Item }
};
</script>

<style lang="scss">
.item-hori-container {
  display: block;
  overflow-x: scroll;
  white-space: nowrap;

  .item-hori-child {
    display: inline-block;
  }
}
</style>
