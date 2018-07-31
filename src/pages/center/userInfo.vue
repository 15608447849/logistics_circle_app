<template>
  <div class="basiInformation">
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>基本信息</span>
      <div></div>
    </div>
    <div class="downfixed havedownfixed">
      <div class="enterprisePic">
        <img :src="avatarUrl" alt="">
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
        <li class="firstCertificates" @click="toCertificates">
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

    <div class="blacklist" v-show="status === 1">
      <a class="moveDetele" @click="removePartner">移除伙伴</a>
      <a class="addBlacklist" @click="addBlacklist">加入黑名单</a>
    </div>

    <div class="blackListBtn" v-show="status === 5">
      <a class="moveOutBlack" @click="removeBlackList">移出黑名单</a>
    </div>

    <div class="dispatchBottomBtn" v-show="status === 6">
      <div>
        <a class="borderRight" @click="sCircleAdd(2)">加入货源圈</a>
        <a class="borderRight" @click="sCircleAdd(1)">加入调度圈</a>
        <a @click="addBlacklist">加入黑名单</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        compInfo: {},
        isYourCompInfo: true,
        avatarUrl: '../../assets/images/small/bussiness-man.png',
        status: 0, // 0 自己编辑 1 货源圈 2 调度圈  5 黑名单 6 调度
        userId: this.$app_store.getters.userId,
      }
    },
    activated() {
      let compId;
      this.isYourCompInfo = this.$route.query.isYourCompInfo;
      if (this.isYourCompInfo) {
        compId = this.userId;
      } else {
        // 根据企业id获取企业信息
        compId = this.$route.query.id;
        this.status = this.$route.query.status;
      }
      this.queryCompByCid(compId);
      this.queryCompByBasicUid(compId);
    },
    methods: {
      // 获取企业头像
      queryCompByBasicUid(compId) {
        let self = this;
        this.$Ice_CompService.queryCompByBasicUid(compId,
          new IceCallback(
            function (result) {
              if (result.code === 0) {

              }
            },
            function (error) {
              self.message.Toast(this, 'warn', '企业头像获取失败', false);
            }
          )
        );
      },
      // 获取企业信息
      queryCompByCid(compId) {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              self.compInfo = result.obj
            },
            function (error) {
              self.message.Toast(this, 'warn', '企业信息获取失败', false);
            }
          )
        );
      },
      fallback() {
        this.$router.go(-1)
      },
      toInvoice() {
        this.$router.push({
          name: 'vatInfo',
          params: this.compInfo
        })
      },
      toenterprise() {
        this.$router.push({
          name: 'entInfo',
          params: this.compInfo
        })
      },
      toCertificates() {
        this.$router.push({
          name: 'cartInfo',
          path: '/cartInfo',
          params: this.compInfo
        })
      },
      removePartner() {
        let self = this;
        let content = '您确定要将好友从好友圈中移除吗?';
        let type = null;
        if(this.status === 1) {
          type = 128
        } else {
          type = 64
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.removeCircle(this.userId, this.compInfo.compid, type, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('好友圈移除成功', 'top');
                  self.status = 10;
                } else {
                  self.$vux.toast.text('好友圈移除失败', 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
              }
            ))
          })
          .catch(() => {

          })
      },
      sCircleAdd(ctype) {
        let content = '';
        let self = this;
        if (ctype === 2) {
          content = '您确定要添加好友至货源圈吗?';
        } else {
          content = '您确定要添加好友至调度圈吗?';
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.sendAddMyCircleMsg(this.userId, this.compInfo.compid, ctype, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  if (ctype === 2) {
                    // self.routeList[index].cstatus = 32;
                    self.$vux.toast.text('货源圈好友添加成功', 'top');
                  } else {
                    self.$vux.toast.text('调度圈好友添加成功', 'top');
                  }
                } else {
                  self.$vux.toast.text('好友圈添加失败', 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
              }
            ))
          })
          .catch(() => {

          })
      },
      addBlacklist() {
        let self = this;
        let content = '您确定要将好友添加至黑名单吗?';
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.addBlackList(this.userId, this.compInfo.compid, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('黑名单添加成功', 'top');
                  self.status = 10;
                } else {
                  self.$vux.toast.text('黑名单添加失败', 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
              }
            ))
          })
          .catch(() => {

          })
      },
      removeBlackList() {
        let self = this;
        let content = '您确定要将好友从黑名单中移除吗?';
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.removeCircle(this.userId, this.compInfo.compid, 512, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('黑名单移除成功', 'top');
                  self.status = 10;
                } else {
                  self.$vux.toast.text('黑名单移除失败', 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
              }
            ))
          })
          .catch(() => {

          })
      }
    }
  }
</script>

<style scoped>

</style>
