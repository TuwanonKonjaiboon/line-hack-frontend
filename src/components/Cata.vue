<template lang="pug">
  .cata-container
    .cata-img-container: img.cata-img(:src="cata.img")
    .cata-desc
      .cata-name {{ cata.name }}
</template>

<style lang="scss" scoped>
  .cata-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    .cata-img-container {
      width: 44px;
      height: 44px;
      border: 1.5px solid #fff;
      border-radius: 9999px;
      overflow: hidden;
      object-fit: cover;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cata-img {
        width: 100%;
        min-height: 100%;
        position: absolute;
      }
    }
    .cata-desc {
      font-size: .8rem;
      color: #fff;
      margin-top: 3px;
    }
  }
</style>

<script>
export default {
  name: "Cata",
  props: ['cata']
}
</script>