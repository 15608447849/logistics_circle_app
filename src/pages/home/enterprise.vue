<template>
  <div class="enterpriseBox">
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>企业信息</span>
      <div></div>
    </div>
    <ul class="enterpriseList">
      <li class="touxiangBox needBorder">
        <span class="touxiang">头像</span>
        <img src="../../assets/images/small/bussiness-man.png" alt="" class="enterprisetouxiang">
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业名称</span>
        <span class="invoiceContent" @click="show1 = true">
          长沙大唐物流有限公司
        </span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业简称</span>
        <span class="invoiceContent">大唐物流</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业性质</span>
        <span class="invoiceContent" @click="show2 = true">民营企业</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业规模</span>
        <span class="invoiceContent">0~100人</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">联系方式</span>
        <span class="invoiceContent">18373270790</span>
      </li>
      <li class="enterpriseLi needBorder">
        <span class="invoiceTitle">企业地址</span>
        <span class="invoiceContent">湖南省长沙市营盘路</span>
      </li>
      <li class="enterpriseLi">
        <span class="invoiceTitle">邮编</span>
        <span class="invoiceContent">410002</span>
      </li>
    </ul>
    <yd-popup v-model="show1" position="center" width="70%">
      <div style="background-color:#fff;">
        <div class="updataEnterpriseName">
          <p>修改企业名称</p>
          <input type="text">
          <div>
            <span class="cancel" @click="show1 = false">取消</span>
            <span class="sure" @click="show1 = false">确定</span>
          </div>
        </div>
      </div>
    </yd-popup>
    <yd-popup v-model="show2" position="bottom" height="30%">
      <div style="background-color:#fff;">
        <div class="updataEnterpriseNature">
          <p>修改企业性质</p>
          <div class="natureBox">
            <input type="radio" value="" name="Nature"> <span>国有企业</span>
            <input type="radio" value="" name="Nature"> <span>集体企业</span>
            <input type="radio" value="" name="Nature"> <span>民营企业</span>
            <input type="radio" value="" name="Nature"> <span>股份合作制企业</span>
          </div>
          <div>
            <span class="cancel" @click="show1 = false">取消</span>
            <span class="sure" @click="show1 = false">确定</span>
          </div>
        </div>
      </div>
    </yd-popup>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          show1: false,
          show2: false
        }
      }

    }
</script>

<style scoped>

</style>
