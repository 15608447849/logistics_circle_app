<template>
  <div>
    <div class="issueHeaderLog">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>基本信息</span>
      <div class="alignCenter"></div>
    </div>
    <div class="enterprisePic">
      <img :src="logoPath" alt="">
    </div>
    <span class="pLabel">{{compByUid.fname}}</span>
    <span class="creditGrade">信用等级</span>
    <ul class="startBoxCredit">
      <li v-for="(item, index) in cLevel" :key="index"><img :src= "item" alt=""></li>
    </ul>
    <ul class="dispatchCircleList">
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">联系方式</span>
        <span class="circleFirendContent floatright">{{compByUid.pho}}</span>
        <span class="circleFirendContent textMargin-right10 floatright">{{compByUid.phone}}</span>
      </li>
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">地址</span>
        <span class="circleFirendContent floatright">{{compByUid.address}}</span>
      </li>
      <li class="needBorder">
        <span class="circleFirendTitle floatleft">发送时间</span>
        <span class="circleFirendContent floatright"><span class="yearTime">{{details.sendDate}}</span><span>{{details.sendTime}}</span></span>
      </li>
      <li>
        <span class="circleFirendTitle floatleft">发送内容</span>
        <span class="circleFirendContent floatright"></span>
      </li>
    </ul>
    <div class="firendContent ">
      <p>请求将您加入他的资源圈</p>
      <p>加入圈子后，您发的订单将被我优先查看和接单</p>
      <p>期待和您的合作，谢谢！</p>
    </div>
    <div class="agreeAndRefuse" v-show="isOperation" v-if="details.isread === 0">
      <a class="agree" @click.stop="refuseFriend(details,details.msgid,details.msgtype)">拒绝</a>
      <a class="refuse" @click.stop="addFriend(details,details.msgid,details.msgtype)">同意</a>
    </div>
  </div>
</template>

<script>
  import {alertContent} from "../../../utils/enum";
  export default {
    data(){
      return {
        messageList:[],
        isOperation: true,
        cLevel: [],// 认证等级
        compByUid:[],
        userId: this.$app_store.getters.userId,
        details: {},
        logoPath: '', // 头像
        score: 0, // 认证等级
      }
    },
    mounted() {
      this.getMessageList();// 未处理消息
      console.log(this.messageList)
      this.details = this.$route.query.details;
      console.log(this.details);
      //企业基本信息
      this.querygetCompByUid();
    },
    methods:{
      // 未处理列表
      getMessageList() {
        let self = this;
        this.$Ice_MessageService.queryMsgListByUid(self.userId,0, new IceCallback(function (result) {
          if (result.code === 0) {
            // 成功
            self.messageList = result.obj;
          } else {
            self.$vux.toast.text(result.msg, 'top');
          }
        }, function (error) {

          //失败
        }))

      },
      // 获取企业ID获取企业信息
      querygetCompByUid: function () {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(self.details.sender, new IceCallback(function (result) {
          debugger
          if (result.code !== 0) {
            self.$vux.toast.text(result.msg, 'top');
          } else {
            // 成功
            debugger
            self.compByUid = result.obj;
            self.logoPath = result.obj.logoPath;
            self.score = result.obj.creadit;
            self.computeLevel();
            console.log(result.obj)
          }
        }, function (error) {
          //失败
        }))
      },
      // 同意
      addFriend: function (details, index, msgtype) {
        debugger
        let content = '';
        let self = this;
        if (msgtype === 1) {
          content = alertContent.CIRCLE_ADD_DISPATHCHER;
        } else if (msgtype === 2) {
          content = alertContent.CIRCLE_ADD_SOURCE;
        } else {
          content = alertContent.RECEIVE_ORDER;
        }
        this.message.showAlert(this, content)
          .then(() => {
            // 成功
            // details.sender
            self.$Ice_CircleService.agreeOrRefuse(details.msgid, 0, new IceCallback(

              function (result) {
                debugger
                if (result.code === 0) {
                  self.isOperation = false;
                  self.messageList.splice(index, 1);
                  self.$vux.toast.text('好友圈添加成功', 'top');
                } else {
                  debugger
                  self.$vux.toast.text('您的订单已被受理', 'top');
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
      // 拒绝
      refuseFriend(item, index, msgtype) {
        debugger
        let content = '';
        let self = this;
        if (msgtype === 1) {
          content = alertContent. CIRCLE_REFUSE_DISPATHCHER;
        } else if (msgtype === 2) {
          content = alertContent.CIRCLE_REFUSE_SOURCE;
        } else {
          content = alertContent.REFUSE_ORDER;
        }
        this.message.showAlert(this, content)
          .then(() => {
            debugger
            self.$Ice_CircleService.agreeOrRefuse(item.msgid, 1, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.messageList.splice(index, 1);
                  self.isOperation = false;
                  self.$vux.toast.text('已拒绝对方的好友圈', 'top');
                  if (msgtype === 1) {
                    self.$vux.toast.text(' 已拒绝对方添加调度圈', 'top');
                  } else if (msgtype === 2) {
                    self.$vux.toast.text('已拒绝对方添加货源圈', 'top');
                  } else if (msgtype === 3) {
                    self.$vux.toast.text('拒绝订单成功', 'top');
                  }
                } else {
                  self.$vux.toast.text('您的订单未被受理', 'top');
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
      //计算星星
      computeLevel() {
        let result = []; // 返回的是一个数组,用来遍历输出星星
        let score = Math.floor(this.score) / 2; // 计算所有星星的数量
        // let hasDecimal = score % 1 !== 0; // 非整数星星判断
        let integer = Math.floor(score); // 整数星星判断
        for (let i = 0; i < integer; i++) { // 整数星星使用on
          result.push( require('../../../assets/images/small/star36_on@2x.png'));
        }
        // if (hasDecimal) { // 半星
        //   result.push("half");
        // }
        while (result.length < 5) {// 余下的用无星星补全,使用off
          result.push(require('../../../assets/images/small/star36_off@2x.png'));
        }
        this.cLevel = result;
      },
      fallback() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>

</style>
