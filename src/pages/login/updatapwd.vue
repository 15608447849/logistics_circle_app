<template>
    <div>
      <div>
        <yd-navbar title="修改密码" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
          <router-link to="/login" slot="left">
            <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
          </router-link>

          <img slot="right" src="../../assets/images/small/logo_26.png"/>
        </yd-navbar>
      </div>
      <div class="phoneNum">
        <span class="numText">手机号码</span>
        <span class="eightSix">+86</span>
        <div class="inputNumBox">
           <input type="text" placeholder="请输入您的手机号" class="inputNum">
        </div>
      </div>
      <button class="nextStep" @click="toVerification">下一步</button>
    </div>
</template>

<script>
    export default {
      methods:{
        toVerification(){
          this.$router.push({path: '/login/Verification'})
        },
      }
    }
</script>

<style scoped>
</style>
