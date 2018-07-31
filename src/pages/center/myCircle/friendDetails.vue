<template>
  <div class="basiInformation">
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>基本信息</span>
      <div></div>
    </div>
    <div class="enterprisePic">
      <img src="" alt="">
    </div>
    <span class="pLabel">长沙大唐物流有限公司</span>
    <span class="creditGrade">信用等级</span>
    <ul class="startBoxCredit">
      <li><img src="" alt=""></li>
      <li><img src="" alt=""></li>
      <li><img src="" alt=""></li>
      <li><img src="" alt=""></li>
      <li><img src="" alt=""></li>
    </ul>
    <ul class="enterpriseInformation" @click="toenterprise">
      <li class="enterpriseSmallPic">
        <i class="icon iconfont icon-qiyexinxi"></i>
        <span>企业信息</span>
      </li>
      <li class="contactMode">
        <span>联系方式：</span>
        <span>18373270790</span>
      </li>
    </ul>
    <ul class="enterpriseInformation" @click="toInvoice">
      <li class="enterpriseSmallPic">
        <i class="icon iconfont icon-fapiao1"></i>
        <span>发票信息</span>
      </li>
      <li class="contactMode">
        <span>发票信息尚未完整</span>
      </li>
    </ul>
    <ul class="Certificates">
      <li class="firstCertificates"  @click="toCertificates">
        <i class="icon iconfont icon-zhengjianzhao"></i>
        <span>证件信息</span>
      </li>
      <li class="alreadyUpload">
        <span class="CertificatesName">营业执照</span>
        <span class="uploadState">已上传</span>
      </li>
      <li class="alreadyUpload">
        <span class="CertificatesName">法人证件</span>
        <span class="uploadState">已上传</span>
      </li>
      <li class="alreadyUpload">
        <span class="CertificatesName">运输许可证</span>
        <span class="uploadState">已上传</span>
      </li>
      <li class="alreadyUpload">
        <span class="CertificatesName">投保证明</span>
        <span class="uploadState">已上传</span>
      </li>
      <li class="notUpload">
        <span class="CertificatesName">国税登记证</span>
        <span class="uploadState">上传</span>
      </li>
      <li class="notUpload">
        <span class="CertificatesName">地税登记证</span>
        <span class="uploadState">上传</span>
      </li>
      <li class="notUpload" id="nomarginBottom">
        <span class="CertificatesName">机构代码证</span>
        <span class="uploadState">上传</span>
      </li>
    </ul>
    <div class="blacklist">
      <a class="moveDetele" @click="removePartner">移除伙伴</a>
      <a class="addBlacklist"  @click="addBlacklist">加入黑名单</a>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          compInfo: {},
        }
      },
      mounted() {

      },
      methods: {
        // 根据企业编号 获取企业详情
        removePartner() {
          this.message.showAlert(this,'伙伴移除后订单信息将不会优先查看,您确定要移除吗?')
            .then(() => {

            })
            .catch(() => {

            })
        },
        addBlacklist() {
          this.message.showAlert(this,'伙伴添加至黑名单后, 双方发单信息都将无法查看?')
            .then(() => {

            })
            .catch(() => {

            })
        },
        fallback() {
          this.$router.go(-1)
        },
        toInvoice(){
          this.$router.push({
            path: '/vatInfo'
          })
        },
        toenterprise(){
          this.$router.push({
            path: '/entInfo'
          })
        },
        toCertificates(){
          this.$router.push({
            path: '/cartInfo'
          })
        }
      }
    }
</script>

<style scoped>

</style>
