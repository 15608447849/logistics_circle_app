<template>
  <div class="basiInformation">
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>基本信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <van-notice-bar v-if="isShowNotice" mode="closeable">
      当前登录企业未进行认证(无法进行发单、抢单操作) 完善企业名称与上传营业执照后即可完成企业认证。
    </van-notice-bar>
      <div class="enterprisePic">
        <img :src="compInfo.logoPath" alt="" v-if="compInfo.logoPath !== ''">
        <img src="../../assets/images/small/moren.png" alt="" class="loginPictureDefaultUser" v-if="compInfo.logoPath === ''">
          <cube-upload
            v-show="isYourCompInfo"
            style="position:absolute;top:.2rem;left:.2rem;width:1rem;height:1rem;opacity: 0;"
            ref="upload"
            v-model="files"
            class="cube-upload-btn-def"
            :action="{target: uploadUrl,data: {'picNo': 7,'compId': compInfo.compid}}"
            @files-added="filesAdded"
            @file-success="filesSuccess"
            @file-error="filesError">
          </cube-upload>

      </div>
      <span class="pLabel">{{subStr(compInfo.fname,10)}}</span>
      <span class="creditGrade">信用等级</span>
      <ul class="startBoxCredit">
        <li v-for="(item, index) in cLevel" :key="index"><img :src= "item" alt=""></li>
      </ul>
      <ul class="enterpriseInformation" @click="toenterprise">
        <li class="enterpriseSmallPic">
          <i class="icon iconfont icon-qiyexinxi"></i>
          <span>企业信息</span>
          <i class="icon iconfont icon-icon-test floatright"></i>
        </li>
      </ul>
      <ul class="enterpriseInformation" @click="toInvoice">
        <li class="enterpriseSmallPic">
           <i class="icon iconfont icon-fapiao1"></i>
           <span>发票信息</span>
           <i class="icon iconfont icon-icon-test floatright"></i>
        </li>
      </ul>
      <ul class="enterpriseInformation">
        <li class="enterpriseSmallPic" @click="toCertificates">
          <i class="icon iconfont icon-zhengjianzhao"></i>
          <span>证件信息</span>
          <i class="icon iconfont icon-icon-test floatright"></i>
        </li>
        <!--<li class="alreadyUpload">-->
        <!--<span class="CertificatesName">营业执照</span>-->
        <!--<span class="uploadState">已上传</span>-->
        <!--</li>-->
        <!--<li class="alreadyUpload">-->
        <!--<span class="CertificatesName">法人证件</span>-->
        <!--<span class="uploadState">已上传</span>-->
        <!--</li>-->
        <!--<li class="alreadyUpload">-->
        <!--<span class="CertificatesName">运输许可证</span>-->
        <!--<span class="uploadState">已上传</span>-->
        <!--</li>-->
        <!--<li class="alreadyUpload">-->
        <!--<span class="CertificatesName">投保证明</span>-->
        <!--<span class="uploadState">已上传</span>-->
        <!--</li>-->
        <!--<li class="notUpload">-->
        <!--<span class="CertificatesName">国税登记证</span>-->
        <!--<span class="uploadState">上传</span>-->
        <!--</li>-->
        <!--<li class="notUpload">-->
        <!--<span class="CertificatesName">地税登记证</span>-->
        <!--<span class="uploadState">上传</span>-->
        <!--</li>-->
        <!--<li class="notUpload" id="nomarginBottom">-->
        <!--<span class="CertificatesName">机构代码证</span>-->
        <!--<span class="uploadState">上传</span>-->
        <!--</li>-->
      </ul>
    <div class="blacklist" v-show="status == 1">
      <a class="moveDetele" @click="removePartner">移除伙伴</a>
      <a class="addBlacklist" @click="addBlacklist">加入黑名单</a>
    </div>
    <div class="blackListBtn" v-show="status == 5">
      <a class="moveOutBlack" @click="removeBlackList">移出黑名单</a>
    </div>
    <div class="dispatchBottomBtn" v-show="status == 6">
      <div>
        <a class="borderRight" @click="sCircleAdd(2)">加入货源圈</a>
        <a class="borderRight" @click="sCircleAdd(1)">加入调度圈</a>
        <a @click="addBlacklist">加入黑名单</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { uploadUrl,cardUrl ,delCardUrl} from '../../../static/libs/server/config'
  import {AVATAR_URL, COMP_INFO} from "../../store/mutation-types";
  import { subString } from '../../utils/stringUtil'
  import { NoticeBar } from 'vant';

  export default {
    data() {
      return {
        uploadUrl: uploadUrl, // 证件上传地址
        cardUrl: cardUrl,// 获取地址
        delCardUrl: delCardUrl, // 删除地址
        isEditor: false,
        score: 0,
        files: [],
        cLevel: [],// 认证等级
        compInfo: {},// 企业详情
        isYourCompInfo: false,
        status: 0, // 0 自己编辑 1 货源圈 2 调度圈  5 黑名单 6 调度 7 消息 8 订单
        userId: '',
        isShowNotice: false
      }
    },
    activated() {
      this.isShowNotice = false;
      this.userId = this.$app_store.state.userId;
      this.isYourCompInfo = this.$route.query.isYourCompInfo;
      if (this.verifyUtil.stringIsBoolean(this.isYourCompInfo.toString())) {
          this.compInfo = JSON.parse(this.$app_store.state.compInfo);
          this.status = 0;
        this.queryCompByCid(this.compInfo.compid);
          // this.computeLevel();
      } else {
        this.queryCompByCid(this.$route.query.id);
        this.status = this.$route.query.status;
      }
      // 判断当前登录角色
      if(this.verifyUtil.stringIsBoolean(this.isYourCompInfo.toString())) {
        this.isYourCompInfo  =  Number(this.$app_store.state.roid) !== 132;
      }
      // 根据企业id获取企业信息
    },
    methods: {
      /**
       * 根据用户码查询指定企业信息(不加路线)
       * @param userId
       */
      querygetCompByUid(userId) {
        let self = this;
        this.$Ice_CompService.querygetCompByUid(Number(userId),
          new IceCallback(
            function (result) {
              self.compInfo = result.obj
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败，请稍后重试!', 'top');
            }
          )
        );
      },
      /**
       * 根据企业码查询指定企业信息(不加路线)
       * @param compId
       */
      queryCompByCid(compId) {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              if(result.code === 0) {
                if(result.obj.logoPath !== '') {
                  result.obj.logoPath = result.obj.logoPath + '?' + new Date().getSeconds();
                }
                self.compInfo = result.obj;
                self.computeLevel();
                if(self.verifyUtil.stringIsBoolean(self.isYourCompInfo.toString())) {

                  if(result.obj.creadit === 0) {
                    // 当前企业未认证
                    self.isShowNotice = true
                  }
                  self.$app_store.commit(COMP_INFO, JSON.stringify(result.obj));
                  self.$app_store.commit(AVATAR_URL,result.obj.logoPath);
                }
              }else {
                self.$vux.toast.text(result.msg, 'top');
              }

            },
            function (error) {
              self.$vux.toast.text('企业信息获取失败!', 'top');
            }
          )
        );
      },
      subStr: function (str, len) {
        return subString(str, len)
      },
      fallback() {
        this.$router.go(-1)
      },
      toInvoice() {
        this.$router.push({
          name: 'vatInfo',
          params: this.compInfo,
          query: {
            isEditor: this.isYourCompInfo
          }
        })
      },
      loadImage(imgId, url) {
        let imgPath = ['', '', '', '', '', '', '', ''];
        imgPath[imgId] = url;
        let self = this;
        this.$Ice_InfoService.feedbackCredentRelpath(this.compInfo.compid, imgPath,
          new IceCallback(
            function (result) {
              self.$vux.toast.text('头像上传成功!', 'top');
              self.$app_store.commit(COMP_INFO, JSON.stringify(self.compInfo));
              self.$app_store.commit(AVATAR_URL,self.compInfo.logoPath);
            },
            function (error) {
              self.$vux.toast.text('头像上传失败!', 'top');
            }
          )
        );
      },
      filesError(files) {

      },
      filesSuccess(files) {
        this.$vux.toast.text(files.response.msg, 'top');
        if (files.response.code === 0) {
          const file = this.files[0];
          file && this.$refs.upload.removeFile(file);
          this.compInfo.logoPath = files.response.data.nginx+""+ files.response.data.relativeAddr + '?' + new Date().getSeconds();
          this.loadImage(7,files.response.data.nginx+""+ files.response.data.relativeAddr);
        }
      },
      filesAdded(files) {

        // let self = this;
        // let hasIgnore = false;
        // const maxSize = 2 * 1024 * 1024; // 2M
        // for (let k in files) {
        //   const file = files[k];
        //   if (file.size > maxSize) {
        //     file.ignore = true;
        //     hasIgnore = true;
        //   }
        // }
        // hasIgnore && this.$createToast({
        //   type: 'warn',
        //   time: 1000,
        //   txt: '你上传的图片 > 2M '
        // }).show()
      },
      toenterprise() {
        this.$router.push({
          name: 'entInfo',
          params: this.compInfo,
          query: {
            isEditor: this.isYourCompInfo
          }
        })
      },
      computeLevel() {
        let result = []; // 返回的是一个数组,用来遍历输出星星
        let score = Math.floor(this.compInfo.creadit) / 2; // 计算所有星星的数量
        // let hasDecimal = score % 1 !== 0; // 非整数星星判断
        let integer = Math.floor(score); // 整数星星判断
        for (let i = 0; i < integer; i++) { // 整数星星使用on
          result.push(require('../../assets/images/small/star36_on@2x.png'));
        }
        // if (hasDecimal) { // 半星
        //   result.push("half");
        // }
        while (result.length < 5) {// 余下的用无星星补全,使用off
          result.push(require('../../assets/images/small/star36_off@2x.png'));
        }
        this.cLevel = result;
      },
      toCertificates() {
        this.$router.push({
          name: 'cartInfo',
          params: this.compInfo,
          query: {
            isEditor: this.isYourCompInfo,
          }
        })
      },
      removePartner() {
        let self = this;
        let content = '您确定要将好友从好友圈中移除吗?';
        let type = null;
        if (this.status === 1) {
          type = 128
        } else {
          type = 64
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.removeCircle(this.userId, this.compInfo.compid, type, new IceCallback(
              function (result) {
                self.$vux.toast.text(result.msg, 'top');
                if (result.code === 0) {
                  // self.$vux.toast.text('好友圈移除成功', 'top');
                  self.status = 10;
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
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
                self.$vux.toast.text(result.msg, 'top');
                if (result.code === 0) {
                  if (ctype === 2) {
                    // self.routeList[index].cstatus = 32;

                  }
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
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
                self.$vux.toast.text(result.msg, 'top');
                if (result.code === 0) {
                  self.status = 10;
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
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
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      }
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'order') {
        to.meta.isUseCache = true;
      }
      if (to.name === 'acceptOrders') {
        to.meta.isUseCache = true;
      }
      next();
    }
  }
</script>

<style>

</style>
