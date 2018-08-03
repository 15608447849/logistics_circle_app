<template>
  <div>
    <div class="issueHeaderLog">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>基本信息</span>
      <div></div>
    </div>
    <div class="enterprisePic">
      <img src="../../../assets/images/small/evaluate_03.png" alt="">
    </div>
    <span class="pLabel"></span>
    <span class="creditGrade">信用等级</span>
    <ul class="startBoxCredit">
      <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
      <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
      <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
      <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
      <li><img src="../../../assets/images/small/star36_off@2x.png" alt=""></li>
    </ul>
    <ul class="dispatchCircleList">
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">联系方式</span>
        <span class="circleFirendContent floatright">15878963666</span>
      </li>
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">地区</span>
        <span class="circleFirendContent floatright">长沙</span>
      </li>
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">发送时间</span>
        <span class="circleFirendContent floatright"><span class="yearTime">2018-08-01</span><span>09:52</span></span>
      </li>
      <li>
        <span class="circleFirendTitle floatleft">发送内容</span>
        <span class="circleFirendContent floatright"></span>
      </li>
    </ul>
    <div class="firendContent">
      <p>请求将您加入他的资源圈</p>
      <p>加入圈子后，您发的订单将被我优先查看和接单</p>
      <p>期待和您的合作，谢谢！</p>
    </div>
    <div class="agreeAndRefuse">
      <a class="agree">拒绝</a>
      <a class="refuse">同意</a>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
        }
      },
      methods:{
        fallback() {
          this.$router.go(-1)
        },
      }
    }
</script>

<style scoped>

</style>
