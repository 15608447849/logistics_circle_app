<template>
  <div>
    用户名:<input v-model="account"/>
    密  码:<input v-model="password"/>
    <button @click="loginBtnOnclick"> 登陆 </button>
  </div>
</template>
<script>



export default {
  data () {
    return {
      account:"",
      password:""
    }
  },
  methods: {
    loginBtnOnclick: function () {
      userVerify(this.account,this.password,function (result) {
        console.log(result)
      })
    }
  }
}
</script>

<style/>
