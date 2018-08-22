<template>
  <div class="addDriver">
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="goBackPage"></i>
      </div>
      <div class="width60">
        <span>添加业务员</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>

    </div>
    <div class="downfixed havedownfixed">
    <ul class="addDriverInfo">
      <li>
        <span class="driverTitle">业务员姓名</span>
        <input maxlength="6" v-model="dName" type="text" placeholder="请输入司机姓名" class="floatright">
      </li>
      <li>
        <span class="driverTitle">业务员电话</span>
        <input maxlength="11" v-model="dPhone" type="tel" placeholder="请输入司机电话" class="floatright">
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
        dName: '', // 业务员姓名
        dPhone: '', // 业务员手机
        type: '132', // 当前类别 1,添加司机;132,添加业务员;
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
      // 业务员新增保存
      dSave() {
        let self = this;
        if(!this.validator()) {
          return
        }
        if(this.isEditor) {
          this.$Ice_InfoService.updateStaffInfo(this.dName, this.dPhone, this.$app_store.getters.userId,this.uid, this.type, new IceCallback(
            function (result) {
              self.$vux.toast.text(result.msg, 'top');
              if(result.code === 0) {
                self.goBackPage();
              }
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ));
        }else {
          this.$Ice_InfoService.addStaffInfo(this.dName, this.dPhone, this.$app_store.getters.userId, this.type, new IceCallback(
            function (result) {
              self.$vux.toast.text(result.msg, 'top');
              if(result.code === 0) {
                self.goBackPage();
              }
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ));
        }
      },
      validator() {
        if (this.verifyUtil.isNull(this.dName)) {
          this.$vux.toast.text('业务员姓名不能为空', 'top');
          return false
        }
        if (this.verifyUtil.isPhoneNum(this.dPhone)) {
          this.$vux.toast.text('请输入正确的手机号', 'top');
          return false
        }
        return true
      }
    }
  }
</script>

<style scoped>

</style>
