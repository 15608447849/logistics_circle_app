<template>
  <div id="splash">
    <!--<img src="">-->
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #splash
    position fixed
    top 0
    left 0
    z-index 6
    width 100%
    height 100%
    opacity 1
    transition opacity .3s ease
    box-sizing border-box
    &.fade-enter,&.fade-leave-to
      opacity 0;
</style>
