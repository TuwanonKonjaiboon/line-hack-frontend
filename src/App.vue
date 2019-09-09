<template lang="pug">
  #app
    router-view
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  props: ["title"],
  components: {
    HelloWorld
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
@import "styles/base";
</style>

