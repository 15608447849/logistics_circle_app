<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>发表评论</span>
      <div class="alignCenter"></div>
    </div>
    <div class="evaluateBox">
      <div class="evaluateName">
        <div class="evalogisticsNameBox">
          <img src="../../../assets/images/small/evaluate_03.png" alt="">
          <span class="evaLogisticsName">黄旺物流</span>
        </div>
      </div>

      <ul class="evaluateList">
        <li class="expressionList">
          <span class="evaluateTitle margin-right63">评价</span>
          <img src="../../../assets/images/small/evaluate_07.png" alt="" class="marginright13">
          <span class="evaluateTitle margin-right56">好评</span>
          <img src="../../../assets/images/small/evaluate_09.png" alt="" class="marginright13">
          <span class="evaluateTitle margin-right56">中评</span>
          <img src="../../../assets/images/small/evaluate_10.png" alt="" class="marginright13">
          <span class="evaluateTitle">差评</span>
        </li>
      </ul>
      <div class="evaluateDiv">
        <span class="pingfeng evaluateTitle">评分</span>
        <ul class="evaluateStart">
          <li>
            <span class="evaluateTitle margin-right31">服务态度</span>
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_21.png" alt="">
          </li>
          <li>
            <span class="evaluateTitle margin-right31">运输质量</span>
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_21.png" alt="">
          </li>
          <li>
            <span class="evaluateTitle margin-right31">时&nbsp&nbsp效</span>
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_18.png" alt="">
            <img src="../../../assets/images/small/evaluate_21.png" alt="">
          </li>
        </ul>
      </div>
      <div class="textareaBox">
        <span class="evaluateTitle margin-top22">描述</span>
        <textarea class="evaluateTextarea" placeholder="说说你对本次服务的感受吧，分享给平台的其它朋友~"></textarea>
      </div>
      <div class="addPhoto">
        <i class="icon iconfont icon-zhaoxiangji2"></i>
        <p>添加照片</p>
      </div>
      <div class="SubmissionBox">
        <button>提交评价</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){

      },
      methods:{
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
