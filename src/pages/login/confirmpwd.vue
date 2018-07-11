<template>
  <div>
    <div>
      <yd-navbar title="修改密码" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
        <router-link to="#" slot="left">
          <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
        </router-link>

        <img slot="right" src="../../assets/images/small/logo_26.png"/>
      </yd-navbar>
    </div>
    <div class="updataPwdinputBox">
      <span class="settingspwd">设置密码</span>
    </div>
    <div class="updataPwdinputBox">
      <div class="inputPassword">
        <span class="textRed">*</span><span class="inputspan">密&nbsp&nbsp码</span><div class="inputBox"><input type="text" placeholder="请设置新密码"></div>
      </div>
      <div class="inputPassword">
        <span class="textRed">*</span><span class="inputspan">确认密码</span><div class="inputBox"><input type="text" placeholder="请设置新密码"></div>
      </div>
    </div>

    <button class="nextStep" @click="tologin">去登录</button>
  </div>
</template>

<script>
    export default {
      methods:{
        tologin(){
          this.$router.push({path: '/login/index'})
        }
      }
    }
</script>

<style>

</style>
