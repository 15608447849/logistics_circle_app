<template>
  <div class="addDriver">
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="goBackPage"></i>
      <span>司机管理</span>
      <div></div>
    </div>
    <div class="downfixed havedownfixed">
    <ul class="addDriverInfo">
      <li>
        <span class="driverTitle">司机姓名</span>
        <input v-model="dName" type="text" placeholder="请输入司机姓名">
      </li>
      <li>
        <span class="driverTitle">司机电话</span>
        <input v-model="dPhone" type="number" placeholder="请输入司机电话">
      </li>
    </ul>
    <button class="nextStep" @click="dSave">保 存</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dName: '', // 司机姓名
        dPhone: '', // 司机手机
        type: '1', // 当前类别 1,添加司机;132,添加业务员;
        dInfo: null,
        uid: '',
        isEditor: false
      }
    },
    activated() {

    },
    mounted() {
      this.dInfo = this.$route.params;
      if (this.dInfo.uid) {
        this.isEditor = true
      }
      if(this.dInfo !== null) {
        this.uid = this.dInfo.uid;
        this.dName = this.dInfo.name;
        this.dPhone = this.dInfo.phone;
      }
    },
    methods: {
      goBackPage() {
        this.$router.go(-1);
      },
      // 司机新增保存
      dSave() {
        let self = this;
        if(this.isEditor) {
          this.$Ice_InfoService.updateStaffInfo(this.dName, this.dPhone, this.$app_store.getters.userId || 4,this.uid, this.type, new IceCallback(
            function (result) {
              if(result.code === 0) {
                self.goBackPage();
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              self.message.Toast(self,'服务器连接失败, 请稍后重试',result.msg,false);
            }
          ));
        }else {
          this.$Ice_InfoService.addStaffInfo(this.dName, this.dPhone, this.$app_store.getters.userId || 4, this.type, new IceCallback(
            function (result) {
              if(result.code === 0) {
                self.goBackPage();
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              self.message.Toast(self,'服务器连接失败, 请稍后重试',result.msg,false);
            }
          ));
        }


      }
    }
  }
</script>

<style scoped>

</style>
