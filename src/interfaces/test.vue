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

        // let obj = new businessBeans.ReleaseOrderBean();
        // obj.billno = "123132132132";
        // console.log(obj);

        // this.$Ice_UserService.requestPhoneSms("15608447849",false,
        //   new IceCallback(
        //     function (result) {
        //       console.log("收到",result)
        //     },
        //     function (result) {
        //     console.log("收到",result)
        //   }, function (result) {
        //       console.log("收到",result)
        //     }
        //   ));

        // console.log("*******************************");
        // this.$Ice_OrderService.queryCircleOrderByApp(
        //   "e140aa06136e4eb6937db4d31e5fe588","衡阳药品","100","衡阳",1,"2018-07-10 11:56:30",
        //   new IceCallback(
        //     function (result) {
        //     console.log("收到",result)
        //   },function (error) {
        //       console.log(error)
        //     }
        //   ));
        //
        // this.$Ice_EnterpriseService.queryDriverInfo(
        //   "e140aa06136e4eb6937db4d31e5fe588",
        //   "",
        //   "",
        //   "",
        //   new IceCallback(
        //     function (result) {
        //   console.log(result);
        //   },function (err) {
        //       console.log(err);
        //     }
        // ))

        // this.$Ice_OrderService.autoGenerationOrderSequence(
        //   new IceCallback(
        //     function (result) {
        //       console.log("收到",result)
        //     }
        //   ))

        this.$Ice_OrderService.queryCircleOrderByPc('e140aa06136e4eb6937db4d31e5fe588','','100',
          new IceCallback(
            function (result) {
              console.log("收到",result)
            },function (err) {
              console.log(err);
            }
          ))

        // this.$Ice_TEST.getBaseUnit(new IceCallback(function (res) {
        //   console.log(res);
        // }))

      }


      }

  }
</script>
<style>

</style>
