<template lang="pug">
  modal(
    name="confirm-modal"
    :classes="['v--modal', 'confirm-modal']"
    :width="400"
    :height="300"
  )
    .confirm-modal-content
      .confirm-modal-title Title
      .confirm-modal-cta
        button.confirm-btn() Remove
        button.cancel-btn() Cancel
</template>

<script>
export default {
  name: "ConfirmModal",
  props: []
}
</script>

<style lang="scss" scoped>

</style>