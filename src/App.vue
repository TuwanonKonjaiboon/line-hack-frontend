<template lang="pug">
  #app
    router-view
    NavMobile
</template>

<script>
import NavMobile from './components/layouts/NavMobile.vue'

export default {
  name: "App",
  props: ["title"],
  components: {
    NavMobile
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  font-family: "SF Pro Text", sans-serif;
  line-height: 24px;
  height: 100%;
}

@import "styles/base";
</style>

