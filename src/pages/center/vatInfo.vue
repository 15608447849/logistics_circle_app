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
    <!--<ul class="invoiceList">-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">发票抬头</span>-->
        <!--<span class="invoiceContent">{{compInfo.invtitle}}</span>-->
      <!--</li>-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">发票类型</span>-->
        <!--<span class="invoiceContent">{{compInfo.invtype}}</span>-->
      <!--</li>-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">发票税号</span>-->
        <!--<span class="invoiceContent">{{compInfo.taxno}}</span>-->
      <!--</li>-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">电话</span>-->
        <!--<span class="invoiceContent">{{compInfo.phone}}</span>-->
      <!--</li>-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">开户银行</span>-->
        <!--<span class="invoiceContent">{{compInfo.openbank}}</span>-->
      <!--</li>-->
      <!--<li class="needBorder">-->
        <!--<span class="invoiceTitle">开户账号</span>-->
        <!--<span class="invoiceContent">{{compInfo.openaccount}}</span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<span class="invoiceTitle">发票地址</span>-->
        <!--<span class="invoiceContent">{{compInfo.billaddr}}</span>-->
      <!--</li>-->
    <!--</ul>-->
    <van-cell-group>
      <van-field
        v-model="compInfo.invtitle"
        label="发票抬头"
        placeholder="请输入发票抬头"
        error-message="手机号发票抬头"
      />
      <van-field
        v-model="compInfo.invtype"
        label="发票类型"
        placeholder="请选择发票类型"
        error-message="请选择发票类型"
      />
      <van-field
        v-model="compInfo.invtype"
        label="发票税号"
        placeholder="请输入发票税号"
        error-message="请选择发票类型"
      />
      <van-field
        v-model="compInfo.invtype"
        label="联系人电话"
        placeholder="请填写电话"
        error-message="电话有误"
      />
      <van-cell title="电话" is-link arrow-direction="down" value="内容" />
      <van-cell title="开户银行" is-link arrow-direction="down" value="内容" />
      <van-cell title="开户账号" is-link arrow-direction="down" value="内容" />
      <van-cell title="发票地址" is-link arrow-direction="down" value="内容" />
    </van-cell-group>
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
      debugger
      this.compInfo = this.$route.params;
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
