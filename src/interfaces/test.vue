<template>
  <div class="test">
    <button class="test" @click="test">测试</button>
  </div>
</template>
<script>

  import {
    DICT
  } from '../store/mutation-types'
  // import store from '../../store'

  export default {
    data() {
      return {}
    },
    methods: {
      test: function () {
        // this.$Ice_CompService.queryCompByBasicUid('5',
        //   new IceCallback(
        //     function (result) {
        //       console.log(result)
        //     },
        //     function (error) {
        //       console.log(error)
        //     }
        //   )
        // );

        this.$Ice_CompService.querygetCompByUid('4',
          new IceCallback(
            function (result) {
              console.log(result)
            },
            function (error) {
              console.log(error)
            }
          )
        );
      }
    }

  }

  // /**
  //  * 根据用户码查询指定企业信息(不加路线)
  //  */
  // this.$Ice_CompService.querygetCompByUid(this.$app_store.getters.userId,
  //   new IceCallback(
  //     function (result) {
  //       console.log(result)
  //     },
  //     function (error) {
  //       console.log(error)
  //     }
  //   )
  // );
</script>
<style>

</style>
