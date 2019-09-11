<template lang="pug">
  .nav-container
    router-link.nav-item(v-for="l in list" :key="l.name" :to="l.href" @click="setActive(l.name)")
      icon-base(:icon-name="l.name" width="24px" height="24px")
        component(:is="l.icon")

</template>

<style lang="scss" scoped>
  .nav-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px 0 20px 0;
    bottom: 0;
    position: fixed;
    background-color: #ffffff;
    box-shadow: 0 0 6px rgba(#000, .16);
    .nav-item {
      font-size: 1.2rem;
      flex: auto;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &:focus {
        outline: none;
      }
      &:link, &:visited {
        svg g {
          fill: #D1D1D6;
        }
      }
      &.router-link-exact-active svg g, &:hover, &:active{
        fill: #2AAF6C !important;
      }
    }
  }
</style>

<script>
import IconBase from '../IconBase.vue';
import IconHome from './icons/IconHome.vue';
import IconStore from './icons/IconStore.vue';
import IconFavorite from './icons/IconFavorite.vue';
import IconProfile from './icons/IconProfile.vue';
import IconCart from './icons/IconCart.vue';

let navList = [
  { name: "home", icon: IconHome, href: `/`},
  { name: "favorite", icon: IconFavorite, href: `#`},
  { name: "cart", icon: IconCart, href: `/cart`},
  { name: "shop", icon: IconStore, href: `/explore`},
  { name: "profile", icon: IconProfile, href: `#`},
]

export default {
  name: "NavMobile",
  data() {
    return {
      list: navList,
    }
  },
  components: {
    IconBase,
    IconHome,
    IconStore
  },
  methods: {
  }
}
</script>

