<template lang="pug">
  .screen-container
    .header-container
      .header-icons
        icon-base.icon(style="margin-right: 24px;" icon-name="camera" width="24px" height="22px"): icon-camera
        icon-base.icon(icon-name="camera" width="24px" height="22px"): icon-camera
      .header-heading.mb-4 Explore
      CataList(:catas="catagories")
    main
      .list-container
        .list-header
          h2 Feature
          a(href="#") VIEW ALL 
        ItemHori(:items="items")
      .list-container
        .list-header
          h2 Trending
          a(href="#") VIEW ALL 
        ItemHori(:items="items")
      .list-container
        .list-header
          h2 Recommend For You
          a(href="#") VIEW ALL 
        ItemHori(:items="items")
</template>

<script>
import store, {storeState} from '../store';
import ItemHori from '../components/ItemHori.vue';
import CataList from '../components/CataList.vue';
import IconBase from '../components/IconBase';
import IconCamera from '../components/layouts/icons/IconCamera.vue';

export default {
  name: "ExploreScreen",
  store,
  computed: {
    ...storeState()
  },
  components: { ItemHori, CataList, IconBase, IconCamera }
}
</script>

<style lang="scss" scoped>
  .header-container {
    padding: 4rem 0 1.5rem 0;
    position: relative;
    background-image: linear-gradient(to bottom right, #2AAF6C, #87BE6A);
    margin-bottom: 2rem;
    .header-icons {
      position: absolute;
      right: 10%;
      top: 20%;
      .icon svg g {
        fill: #fff;
      }
    }
    .header-heading {
      padding-left: 24px; 
      font-size: 2.1rem;
      font-weight: 400;
      color: #f4f4f4;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-bottom: 56px;
  }
  .list-container {
    font-size: .8rem;
    margin-top: 1rem;
    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      h2 {
        font-weight: 400;
      }
      a {
        text-decoration: none;
        padding-right: 16px;
        cursor: pointer;
        &:link, &:visited {
          color: #2AAF6C;
        }
        &:active, &:hover {
          color: #2AAF6C;
        }
      }
    }
  }
</style>