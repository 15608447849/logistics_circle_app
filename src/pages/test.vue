<template>
  <div class="test">
    <button  class="test" @click="test">测试</button>
  </div>
</template>
<script>

  import {
    DICT
  } from '../store/mutation-types'
  // import store from '../../store'

  export default {
    data () {
      return {
      }
    },
    methods: {
      test: function () {

        this.$Ice_UserService.requestPhoneSms("15608447849",false,
          new IceCallback(
            function (result) {
              console.log("收到",result)
            },
            function (result) {
            console.log("收到",result)
          }, function (result) {
              console.log("收到",result)
            }
          ));

        // this.$Ice_OrderService.queryAllByKey("",
        //   new IceCallback(
        //     function (result) {
        //     console.log("收到",result)
        //   }
        //   ))

        // this.$Ice_OrderService.autoGenerationOrderSequence(
        //   new IceCallback(
        //     function (result) {
        //       console.log("收到",result)
        //     }
        //   ))

        }

      }

  }
</script>
<style>

</style>
