<template lang="pug">
  
</template>

<script>
import store, { storeState } from "../store";

export default {
  name: "ExploreScreen",
  store,
  computed: {
    ...storeState()
  }
};
</script>
