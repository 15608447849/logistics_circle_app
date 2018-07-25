<template>
 <div class="basiInformation">
   <div class="issueHeaderNav">
    <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
    <span>基本信息</span>
    <div></div>
   </div>
   <div class="enterprisePic">
     <img src="../../assets/images/small/bussiness-man.png" alt="">
   </div>
   <span class="pLabel">{{compInfo.fname}}</span>
   <span class="creditGrade">信用等级</span>
   <ul class="startBoxCredit">
     <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
     <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
     <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
     <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
     <li><img src="../../assets/images/small/star36_off@2x.png" alt=""></li>
   </ul>
   <ul class="enterpriseInformation" @click="toenterprise">
     <li class="enterpriseSmallPic">
       <i class="icon iconfont icon-qiyexinxi"></i>
       <span>企业信息</span>
     </li>
     <li class="contactMode">
       <span>联系方式：</span>
       <span>{{compInfo.phone}}</span>
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
     <a class="moveDetele" v-show="!isYourCompInfo" @click="removePartner">移除伙伴</a>
     <a class="addBlacklist" v-show="!isYourCompInfo" @click="addBlacklist">加入黑名单</a>
   </div>
 </div>
</template>

<script>
    export default {
      data() {
        return {
          compInfo: {},
          isYourCompInfo: true
        }
      },
      mounted() {
        this.isYourCompInfo = this.$route.query.isYourCompInfo;
        if(this.isYourCompInfo) {
          this.compInfo = this.$app_store.getters.compInfo
        }else {
          // 根据企业id获取企业信息
          let compId = this.$route.query.id;
          this.querygetCompByCid(compId);
        }
      },
      methods:{
        // 获取企业信息
        querygetCompByCid(compId) {
          let self = this;
          this.$Ice_CompService.querygetCompByCid(compId,
            new IceCallback(
              function (result) {
                this.compInfo = result.obj
              },
              function (error) {
                self.message.Toast(this,'warn','企业信息获取失败',false);
              }
            )
          );
        },
        fallback() {
          this.$router.go(-1)
        },
        toInvoice(){
          debugger
          this.$router.push({
            name: 'vatInfo',
            params: this.compInfo
          })
        },
        toenterprise(){
          this.$router.push({
            path: '/entInfo',
            params: this.compInfo
          })
        },
        toCertificates(){
          this.$router.push({
            path: '/cartInfo',
            params: this.compInfo
          })
        },
        // 根据企业编号 获取企业详情
        removePartner() {
          this.message.showAlert(this,'移除伙伴','伙伴移除后订单信息将不会优先查看,您确定要移除吗?')
            .then(() => {

            })
            .catch(() => {

            })
        },
        addBlacklist() {
          this.message.showAlert(this,'黑名单添加','伙伴添加至黑名单后, 双方发单信息都将无法查看?')
            .then(() => {

            })
            .catch(() => {

            })
        },
      }
    }
</script>

<style scoped>

</style>
