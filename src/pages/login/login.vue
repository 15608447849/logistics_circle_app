<template>
  <div>
    <button @click="icetest"> 测试 </button>
  </div>

</template>
<script>

import sysmanage from '../../iceMethod/sysManage'
import { queryIce } from '@/iceMethod/iceClient.js'

export default {

  data () {
    return {}
  },
  methods: {
    icetest: function () {
      console.log('点击')
      var service = ['loginCS', sysmanage.SysManageServicePrx, 'SysManageService']
      queryIce(15151515, '15608447849', '123456', function (e) {
        console.log(e)
      })
    }
  }
}
</script>

<style/>
