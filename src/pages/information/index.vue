<template>
  <div>
    <div class="issueHeaderNav">
      <div class="issueHeaderNavPic"><img src="../../assets/images/small/logo_26.png" alt=""></div>
      <div><span>信息大厅</span></div>
      <div @click="toissue"><span>发单</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: '', // 地址
        timeStr: '', // 订单标识
        key: '',// 关键词
        requestState: 0 // 获取最新 0, 获取历史1
      }
    },
    mounted() {
      // console.log(this.$app_store.state.userToken);
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        this.$Ice_OrderService.queryOrderByApp(
          this.$app_store.state.userToken, this.key, this.pageSize, this.address, this.requestState, this.timeStr,
          new IceCallback(
            function (result) {

            }, function (error) {
              self.mescroll.endErr();
            }
          ));
      },
      toissue() {
        this.$router.push({path: '/information/issue'})
      },
      toissueDetails() {
        this.$router.push({path: '/information/issueDetails'})
      },
    }
  }
</script>
<style>
  .top-load-wrapper {
    line-height: 50px;
    text-align: center;
  }
  .icon-arrow {
    transition: .2s;
    transform: rotate(180deg);
  }
  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>
