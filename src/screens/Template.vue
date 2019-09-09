<template lang="pug">
  div My name is Chomtana {{items}}.item-container
</template>

<script>
import store, { storeState } from "../store";

export default {
  name: "HomeScreen",
  store,
  computed: {
    ...storeState()
  }
};
</script>
