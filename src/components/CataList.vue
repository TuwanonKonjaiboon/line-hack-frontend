<template lang="pug">
  .catas-list-container
    .catas-list-child(v-for="(cata, i) in catas")
      Cata(:key="i" :cata="cata")
</template>

<script>
import Cata from './Cata.vue';
export default {
  name: "CataList",
  props: ['catas'],
  components: {
    Cata
  }
}
</script>

<style lang="scss" scoped>
  .catas-list-container {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    white-space: nowrap;
    .catas-list-child {
      display: inline-block;
    }
  }
</style>