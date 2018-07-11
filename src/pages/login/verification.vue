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
      <div class="verificationBox">
        <span class="verificationCode">输入验证码</span>
        <ul class="verificationList">
          <li><input type="text"></li>
          <li><input type="text"></li>
          <li><input type="text"></li>
          <li><input type="text"></li>
        </ul>
    </div>
    <button class="nextStep" @click="toconfirmpwd">下一步</button>
  </div>
</template>

<script>
    export default {
      methods:{
        toconfirmpwd(){
          this.$router.push({path: '/login/confirmpwd'})
        }
      }
    }
</script>

<style>

</style>
