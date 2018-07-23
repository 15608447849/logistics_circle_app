<template>
  <button @click="test">接口测试</button>
</template>
<script>
  export default {
    data() {
      return {
        DriverInfo: new enterprise.DriverInfo(), // 司机信息
        RouteInfo: new enterprise.RouteInfo(), // 常用线路
        Routeviap: new enterprise.Routeviap() // 途径点中转点
      }
    },
    methods: {
      test() {
        this.DriverInfo.driverid = ''; // 司机码
        this.DriverInfo.carryname = ''; // 所属企业名
        this.DriverInfo.drivername = ''; // 司机姓名
        this.DriverInfo.driverphone = ''; // 司机手机
        this.DriverInfo.createdate = ''; // 创建日期
        this.DriverInfo.createtime = ''; // 创建时间
        this.DriverInfo.cstatus = ''; // 状态 （0：启动，1:删除，2：停用）

        this.$Ice_EnterpriseService.newDriver('', this.DriverInfo, new IceCallback(
          function (result) {
            // 登录成功
            if(result.cstatus === 0) {

            } else {

            }
          },
          function (error) {
            self.message.Toast(self,'服务器连接失败, 请稍后重试',result.msg,false);
          }
        ))
      }
    }
  }
</script>
<style>

</style>
