<template>
  <div class="invoiceBox">
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>发票信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright "></div>
      </div>
    </div>
    <ul class="invoiceList">
      <li class="needBorder">
        <span class="invoiceTitle">发票抬头</span>
        <span class="invoiceContent">{{compInfo.invtitle}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票类型</span>
        <span class="invoiceContent">{{compInfo.invtype}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票税号</span>
        <span class="invoiceContent">{{compInfo.taxno}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">电话</span>
        <span class="invoiceContent">{{compInfo.phone}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户银行</span>
        <span class="invoiceContent">{{compInfo.openbank}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户账号</span>
        <span class="invoiceContent">{{compInfo.openaccount}}</span>
      </li>
      <li>
        <span class="invoiceTitle">发票地址</span>
        <span class="invoiceContent">{{compInfo.billaddr}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        compInfo: {}
      }
    },
    mounted() {
      this.compInfo = this.$route.params;
      console.log(this.compInfo);
    },
    methods: {
      fallback() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>

</style>
