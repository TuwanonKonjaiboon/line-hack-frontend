<template lang="pug">
  .screen-container
    .header-container
      .header-icons
        icon-base.icon(style="margin-right: 24px;" icon-name="camera" width="24px" height="22px"): icon-camera
        icon-base.icon(icon-name="camera" width="28px" height="24px"): icon-search
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
import IconSearch from '../components/layouts/icons/IconSearch.vue';

let catagories = [
    { name: "Rose", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peach-rose-royalty-free-image-648161008-1548273443.jpg"},
    { name: "Cactus", img: "https://www.potterybarn.com/pbimgs/rk/images/dp/wcm/201922/0088/faux-potted-mini-cactus-c.jpg"},
    { name: "Fern", img: "https://www.adairs.com.au/globalassets/imported-assets/homewares/home-republic/home-republic/43817_fishbone/43817_fishbone_zoom_01.jpg"},
    { name: "Calendula", img: "https://cdn.pixabay.com/photo/2018/07/10/11/11/marigold-3528402__340.jpg"},
    { name: "Lily", img: "https://www.gardeners.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw68196a61/Articles/Gardening/Hero_Thumbnail/5326-lily-pxhere.jpg"},
    { name: "Sansevierias", img: "https://realornamentals.com/plant-store/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/r/o/robusta-snake-plant-small-ornamental-plant-sanseveria-robusta-realornamentals.com-web.jpg"},
  ]

export default {
  name: "ExploreScreen",
  store,
  computed: {
    ...storeState()
  },
  data() {
    return { catagories }
  },
  components: { ItemHori, CataList, IconBase, IconCamera, IconSearch }
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
      .icon g {
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
    padding-left: 16px;
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
        font-size: 20px;
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