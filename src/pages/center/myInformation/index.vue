<template>
  <div>
    <div class="issueHeaderLog">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>消息</span>
      <div></div>
    </div>
    <div class="informationBox">
      <!--<div class="handle needBorder">-->

        <!--<div class="notHandle" :class="{'activecircle' : item.isSelected}"  v-for="(item , index) in tabList" :key="index"  @click.stop="displayTab(item)">{{item.name}}-->
          <!--<i class="redSpot" ></i>-->
          <!--</div>-->
        <ul class="circleList" v-show="">
          <li class="needBorder" @click.stop="seeDetails" v-for="(item, index) in messageList" :key="index">
            <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.sendName}}</span></div>
            <div class="lineName"><span class="lineInfo"> {{msgTypeToText(item.msgtype)}}</span></div>

            <a class="pullBlack" v-show="nothandle" @click.stop="addFriend(item,index,item.msgtype)">同意</a>
            <a class="handleafter" v-show="display" v-if="item.isread!==0">已同意</a>
            <a class="read" v-show="read" v-if="item.isread!==0">已阅读</a>
          </li>
        </ul>
      </div>

  </div>
</template>
<script>
    import {alertContent} from "../../../utils/enum";

    export default {
      data(){
        return{
          messageList: [],
          display:true,
          nothandle:true,
          userId: this.$app_store.getters.userId,
          read:true,
          isredspop:true,
          tabList: [{
            name: '待处理',
            value: 0,
            isSelected: true
          },
            {
            name: '已处理',
            value: 1,
            isSelected: false
          }
          ]
        }

      },
      mounted(){
        this.getMessageList();
      },
      methods:{

        addFriend(item, index, msgtype){
          let content = '';
          let self = this;
          if (msgtype === 1) {
            content = alertContent.CIRCLE_ADD_DISPATHCHER;
          } else if(msgtype === 2){
            content = alertContent.CIRCLE_ADD_SOURCE;
          }else{
            content = alertContent.RECEIVE_ORDER;
          }
          this.message.showAlert(this, content)
            .then(() => {

              self.$Ice_CircleService.agreeOrRefuse(item.msgid,item.sender, new IceCallback(
                function (result) {

                  if (result.code === 0) {
                    if(msgtype === 1) {
                      self.messageList.splice(index,1)
                      self.$vux.toast.text('调度圈好友添加成功', 'top');
                    }else if(msgtype === 2){
                      self.$vux.toast.text('货源圈好友添加成功', 'top');

                    }
                  } else {

                    self.$vux.toast.text('接受订单成功', 'top');
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
          this.$Ice_MessageService.queryMsgListByUno(this.$app_store.getters.userId,new IceCallback( function(result){
            if(result.code === 0) {
              // 成功
              self.messageList = result.obj;
              console.log(self.messageList)
                }else{

                }
          },function(error){
            //失败
          }))

        },
        fallback() {
          this.$router.go(-1)
        },
        seeDetails(){
          this.$router.push({
            path:'/center/myInformation/seeInformation'
          })
        },
        displayTab(item) {
          this.tabList.forEach((value, index, arr) => {
            value.isSelected = false
          });
          item.isSelected = true;
        },
      }
    }
</script>

<style scoped>

</style>
