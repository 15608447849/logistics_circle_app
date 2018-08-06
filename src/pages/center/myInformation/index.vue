<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>消息</span>
      <div></div>
    </div>
    <div class="downfixed">
      <div class="circleListBox">
        <!--<div class="circleType">-->
        <!--<div class="SourceGoods marginLeft21" @click="tabClick" :class="{'activecircle': selectOneTab}">货源圈</div>-->
        <!--<div class="dispatch  marginRight21" @click="tabClick"  :class="{'activecircle': !selectOneTab}">调度圈</div>-->
        <!--</div>-->
        <tab
          active-color="#3189f5">
          <tab-item @on-item-click="tabClick" selected>
            未处理
            <i class="redSpot" v-if="isNewMsg > 0"></i>
          </tab-item>
          <tab-item @on-item-click="tabClick">
            已处理
          </tab-item>
        </tab>
        <ul class="circleList" v-show="isShow">
          <!--<p>这是未处理消息</p>-->
          <li class="needBorder" @click.stop="seeDetails(item)" v-for="(item, index) in messageList" :key="index">
            <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.sendName}}</span></div>
            <div class="lineName"><span class="lineInfo"> {{msgTypeToText(item.msgtype)}}</span></div>
            <a class="pullBlack" v-show="nothandle" @click.stop="addFriend(item,index,item.msgtype)">同意</a>
          </li>
        </ul>
        <!--已处理-->
        <ul class="circleList" v-show="!isShow">
          <!--<p>这是已经处理消息</p>-->
          <li class="needBorder" @click.stop="seeDetails(item)" v-for="(item, index) in readyHandMsg" :key="index">
            <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.sendName}}</span></div>
            <div class="lineName"><span class="lineInfo"> {{msgTypeToText(item.msgtype)}}</span></div>


            <a class="handleafter" v-show="display" v-if="item.isread!==0">已同意</a>
            <a class="read" v-show="read" v-if="item.isread==0">已阅读</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {alertContent} from "../../../utils/enum";
  import {Tab, TabItem} from 'vux'

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        messageList: [], //未处理数据集
        readyHandMsg: [], //已处理数据集
        alreadyHandle: false,//已处理view显示与否
        isShow: true,//未处理view显示与否
        isRedspot: false,//红点显示与否
        display: true,//已同意显示与否
        nothandle: true,//同意显示与否
        userId: this.$app_store.getters.userId,//vuex存储的用户id
        read: true,//已阅读显示与否
        isNewMsg:0//是否有新的消息
      }

    },
    mounted() {
      this.getNewMessage();//查询用户是否有新的消息
      this.getMessageList();
      // this.getNewMessage();
      this.noHandleMessage();
    },
    methods: {
      //同意
      addFriend(item, index, msgtype) {
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
            self.$Ice_CircleService.agreeOrRefuse(item.msgid, item.sender, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.messageList.splice(index, 1);
                  if (msgtype === 1) {
                    self.$vux.toast.text('调度圈好友添加成功', 'top');
                  } else if (msgtype === 2) {
                    self.$vux.toast.text('货源圈好友添加成功', 'top');
                  } else if (msgtype === 3) {
                    self.$vux.toast.text('接受订单成功', 'top');
                  }
                } else {
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
      msgTypeToText(type) {
        let disContent = '';
        switch (type) {
          case 1:
            disContent = '请求加入你的调度圈'
            break;
          case 2:
            disContent = '请求加入你的货源圈'
            break;
          case 3:
            disContent = '您有新的订单未处理'
            break;
        }
        return disContent
      },
      getMessageList() {
        let self = this;
        this.$Ice_MessageService.queryMsgListByUid(2, 0, new IceCallback(function (result) {
          if (result.code === 0) {
            // 成功
            self.messageList = result.obj;
            console.log(result.obj)
          } else {
            self.$vux.toast.text(result.msg, 'top');
          }
        }, function (error) {

          //失败
        }))

      },
      noHandleMessage() {
        let self = this;
        this.$Ice_MessageService.queryMsgListByUid(2, 1, new IceCallback(function (result) {
          if (result.code === 0) {
            // 成功

            self.readyHandMsg = result.obj;
            console.log(result.obj)
          } else {
            self.$vux.toast.text(result.msg, 'top');
          }
        }, function (error) {

          //失败
        }))
      },
      tabClick() {
        this.isShow = !this.isShow
      },


      //查询用户是否有新的消息
      getNewMessage() {
        let self = this;
        this.$Ice_MessageService.isUnreadMsg(2,new IceCallback( function(result){
          if(result.code === 0) {
            console.log(result);
            self.isNewMsg = result.__state;
          }else{

          }
        },function(error){
          //失败
        }))

      },
      fallback() {
        this.$router.go(-1)
      },
      seeDetails(item) {
        if(item.msgtype > 2){
          return
        }
        // 判断item这条数据 是属于什么类型消息
        // if(==='定向发单' || === ‘抢单信息’) {
        //   return
        // }
        this.$router.push({
          path: '/center/myInformation/seeInformation',
          query: {
            details: item,

          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
