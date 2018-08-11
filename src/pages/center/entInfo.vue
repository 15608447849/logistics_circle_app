<template>
  <div class="enterpriseBox">
    <div class="issueHeaderNav">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>企业信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>



    </div>
    <div class="downfixed havedownfixed">
    <ul class="enterpriseList">
      <li class="touxiangBox needBorder">
        <span class="touxiang">头像</span>
        <img :src="compInfo.logoPath" alt="" class="enterprisetouxiang" v-if="compInfo.logoPath !== ''">
        <img src="../../assets/images/small/moren.png" alt="" class="loginPictureDefaultUser widthHeight140 floatleft" v-if="compInfo.logoPath === ''">
      </li>
      <li class="enterpriseLi needBorder" @click="show1 = true">
        <span class="invoiceTitle">企业名称</span>
        <span class="invoiceContent">
          {{compInfo.fname}}
        </span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业简称</span>
        <span class="invoiceContent">{{compInfo.sname}}</span>
      </li>
      <li class="enterpriseLi needBorder" @click="show2 = true">
        <span class="invoiceTitle">企业性质</span>
        <span class="invoiceContent">{{compInfo.ctype}}</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业规模</span>
        <span class="invoiceContent">{{compInfo.csale}}</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">联系方式</span>
        <span class="invoiceContent">{{compInfo.contact}}</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业地址</span>
        <span class="invoiceContent">{{compInfo.address}}</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">邮编</span>
        <span class="invoiceContent">{{compInfo.area}}</span>
      </li>
    </ul>
    </div>
    <!--<yd-popup v-model="show1" position="center" width="70%">-->
      <!--<div style="background-color:#fff;">-->
        <!--<div class="updataEnterpriseName">-->
          <!--<p>修改企业名称</p>-->
          <!--<input type="text">-->
          <!--<div>-->
            <!--<span class="cancel" @click="show1 = false">取消</span>-->
            <!--<span class="sure" @click="show1 = false">确定</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</yd-popup>-->
    <!--<yd-popup v-model="show2" position="bottom" height="30%" close-on-masker="true">-->
      <!--<div style="background-color:#fff;">-->
        <!--<div class="updataEnterpriseNature">-->
          <!--<p>修改企业性质</p>-->
          <!--<div class="natureBox">-->
            <!--<div @click="show2 = false">-->
              <!--<input type="radio" value="" name="Nature" id="Nature1">-->
              <!--<label for="Nature1"> &nbsp&nbsp国有企业</label>-->
            <!--</div>-->
            <!--<div @click="show2 = false">-->
              <!--<input type="radio" value="" name="Nature" id="Nature2">-->
              <!--<label for="Nature2"> &nbsp&nbsp集体企业</label>-->
            <!--</div>-->
            <!--<div @click="show2 = false">-->
              <!--<input type="radio" value="" name="Nature" id="Nature3">-->
              <!--<label for="Nature3"> &nbsp&nbsp民营企业</label>-->
            <!--</div>-->
            <!--<div @click="show2 = false">-->
              <!--<input type="radio" value="" name="Nature" id="Nature4">-->
              <!--<label for="Nature4"> &nbsp&nbsp股份合作制企业</label>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</yd-popup>-->
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        compInfo: {},
        BasicInfo: {},
        show1: false,
        show2: false
      }
    },
    mounted() {
      this.compInfo = this.$route.params;
      this.getBasicInfo();
    },
    methods: {
      fallback() {
        this.$router.go(-1)
      },
      // 获取企业logo的基本信息模型
      getBasicInfo() {

      }
    }
  }
</script>

<style scoped>

</style>
