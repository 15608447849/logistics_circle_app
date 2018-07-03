<template>
  <div>
    <button @click="icetest"> 测试 </button>
  </div>

</template>
<script>

// import sysmanage from '../../iceMethod/sysManage'
// import { queryIce } from '@/iceMethod/iceClient.js'

export default {

  data () {
    return {}
  },
  methods: {
    icetest: function () {
      var service = [, , ]

      // queryIce(sysmanage.SysManageServicePrx, 'SysManageService','loginCS',
      //   '15888888888', '123456',function (result) {
      //     console.log(result)
      //   });
      queryIce(sysmanage.SysManageServicePrx, 'SysManageService','loginCS',
        '15888888888', '123456',
        function (result) {

      },
        function (error) {
          console.log(error)
        }
        );
    }
  }
}
</script>

<style/>
