<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>消息</span>
      <div></div>
    </div>
    <div class="informationBox">
      <div class="handle needBorder">
        <div class="notHandle">
          待处理
        </div>
        <div class="alreadyHandle blueBorder">
          已处理
        </div>
      </div>
      <ul class="circleList">
        <li class="needBorder" @click="seeDetails">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>
          <div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>
          <a class="pullBlack" v-show="nothandle">同意</a>
          <a class="handleafter" v-show="display">已同意</a>
          <a class="read" v-show="read">已阅读</a>
        </li>
        <li class="needBorder">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>
          <div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>
          <a class="pullBlack" v-show="nothandle">同意</a>
          <a class="handleafter" v-show="display">已同意</a>
          <a class="read" v-show="read">已阅读</a>
        </li>
        <li class="needBorder">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>
          <div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>
          <a class="pullBlack" v-show="nothandle">同意</a>
          <a class="handleafter" v-show="display">已同意</a>
          <a class="read" v-show="read">已阅读</a>
        </li>
        <li class="needBorder">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>
          <div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>
          <a class="pullBlack" v-show="nothandle">同意</a>
          <a class="handleafter" v-show="display">已同意</a>
          <a class="read" v-show="read">已阅读</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          display:true,
          nothandle:false,
          read:false
        }

      },
      methods:{
        fallback() {
          this.$router.go(-1)
        },
        seeDetails(){
          this.$router.push({
            path:'/center/myInformation/seeInformation'
          })
        }
      }
    }
</script>

<style scoped>

</style>
