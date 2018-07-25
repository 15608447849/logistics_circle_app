<template>
  <div class="invoiceBox">
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>发票信息</span>
      <div></div>
    </div>
    <ul class="invoiceList">
      <li class="needBorder">
        <span class="invoiceTitle">发票抬头</span>
        <span class="invoiceContent">{{CompInfo.invtitle}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票类型</span>
        <span class="invoiceContent">{{CompInfo.invtype}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票税号</span>
        <span class="invoiceContent">{{CompInfo.taxno}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">电话</span>
        <span class="invoiceContent">{{CompInfo.phone}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户银行</span>
        <span class="invoiceContent">{{CompInfo.openbank}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户账号</span>
        <span class="invoiceContent">{{CompInfo.openaccount}}</span>
      </li>
      <li>
        <span class="invoiceTitle">发票地址</span>
        <span class="invoiceContent">{{CompInfo.billaddr}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        CompInfo: {}
      }
    },
    mounted() {
      this.CompInfo = this.$route.params;
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
