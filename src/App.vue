<template lang="pug">
  #app
    transition(name="fade")
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

button {
  &:focus {
    outline: none;
  }
  &:active {
    opacity: .85;
  }
}

@import "styles/base";
</style>

