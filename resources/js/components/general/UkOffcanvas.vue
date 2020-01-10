<template>
  <div :id="id" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "offcanvas-flip"
        }
    }

}
</script>

<style>

</style>