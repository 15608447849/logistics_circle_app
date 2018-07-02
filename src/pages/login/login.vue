<template>
  <div>
    <p>姓名</p>
    <input v-model="username"/>
    <p >{{username}}</p>
  </div>

</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style/>
