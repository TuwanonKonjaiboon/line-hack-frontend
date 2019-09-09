<template lang="pug">
  .container.px-3.pt-4.pb-2#hero
    h1 {{ title }}
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      default: "Heading"
    }
  },
  data() {
    return {
      SubComponent: UserProfile
    };
  }
};
</script>

<style lang="scss" scoped>
#hero {
  color: #343434;
  background: #f3f3f3;
}
</style>


