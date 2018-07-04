<template>
  <div>
    <button @click="icetest"> 测试 </button>
    <button @click="toGeoTestPage">高德地图测试</button>
  </div>

</template>
<script>



export default {
  data () {
    return {}
  },
  methods: {
    icetest: function () {
      var service = [, , ]


      queryIce(sysmanage.SysManageServicePrx,
        'SysManageService',
        'loginCS',
        '15888888888',
        '123456',
        function (object) {
          console.log(object)
      });
    },
    toGeoTestPage() {
      this.$router.push({

      })
    }
  }
}
</script>

<style/>
