<template>
  <div>
    <div class="basiInformation">
      <div class="issueHeaderNav">
        <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
        <span>查看调度</span>
        <div></div>
      </div>
      <div class="enterprisePic">
        <img src="../../../assets/images/small/bussiness-man.png" alt="">
      </div>
      <span class="pLabel">长沙大唐物流有限公司</span>
      <span class="creditGrade">信用等级</span>
      <ul class="startBoxCredit">
        <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
        <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
        <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
        <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
        <li><img src="../../../assets/images/small/star36_on@2x.png" alt=""></li>
      </ul>
      <ul class="enterpriseInformation">
        <li class="enterpriseSmallPic">
          <i class="icon iconfont icon-qiyexinxi"></i>
          <span>企业信息</span>
        </li>
        <li class="contactMode">
          <span>联系方式：</span>
          <span>18373270790</span>
        </li>
      </ul>
      <ul class="enterpriseInformation">
        <li class="enterpriseSmallPic">
          <i class="icon iconfont icon-fapiao1"></i>
          <span>发票信息</span>
        </li>
        <li class="contactMode">
          <span>发票信息尚未完整</span>
        </li>
      </ul>
      <ul class="Certificates">
        <li class="firstCertificates">
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
    </div>
    <div class="dispatchBottomBtn">
      <div>
        <a class="borderRight">加入货源圈</a>
        <a class="borderRight">加入调度圈</a>
        <a >加入黑名单</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
