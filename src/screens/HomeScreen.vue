<template>
  <ItemHori :items="items"/>
</template>

<script>
import store, { storeState } from "../store";
import ItemHori from "../components/ItemHori.vue";

//console.log(Item)

export default {
  name: "HomeScreen",
  store,
  computed: {
    ...storeState()
  },
  components: { ItemHori }
};
</script>
