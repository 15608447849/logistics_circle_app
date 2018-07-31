<template>
  <div>
    <div class="issueHeaderLog">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>消息</span>
      <div></div>
    </div>
    <div class="informationBox">
      <div class="handle needBorder">

        <div class="notHandle" :class="{'activecircle' : item.isSelected}"  v-for="(item , index) in tabList" :key="index"  @click.stop="displayTab(item)">{{item.name}}
          <i class="redSpot" v-show="isredspot"></i>
        </div>

      </div>
      <ul class="circleList">
        <li class="needBorder" @click.stop="seeDetails" v-for="(item, index) in messageList" :key="index">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">{{item.sendName}}</span></div>
          <div class="lineName"><span class="lineInfo"> {{msgTypeToText(item.msgtype)}}</span></div>

          <a class="pullBlack" v-show="nothandle" @click.stop="addfriend(item,index,item.msgtype)">同意</a>
          <a class="handleafter" v-show="display" v-if="item.isread!==0">已同意</a>
          <a class="read" v-show="read" v-if="item.isread!==0">已阅读</a>
        </li>
        <!--<li class="needBorder">-->
          <!--<img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">-->
          <!--<div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>-->
          <!--<div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>-->
          <!--<a class="pullBlack" v-show="nothandle">同意</a>-->
          <!--<a class="handleafter" v-show="display">已同意</a>-->
          <!--<a class="read" v-show="read">已阅读</a>-->
        <!--</li>-->
        <!--<li class="needBorder">-->
          <!--<img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">-->
          <!--<div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>-->
          <!--<div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>-->
          <!--<a class="pullBlack" v-show="nothandle">同意</a>-->
          <!--<a class="handleafter" v-show="display">已同意</a>-->
          <!--<a class="read" v-show="read">已阅读</a>-->
        <!--</li>-->
        <!--<li class="needBorder">-->
          <!--<img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">-->
          <!--<div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>-->
          <!--<div class="lineName"><span class="lineInfo">请求您加入他的调度圈</span></div>-->
          <!--<a class="pullBlack" v-show="nothandle">同意</a>-->
          <!--<a class="handleafter" v-show="display">已同意</a>-->
          <!--<a class="read" v-show="read">已阅读</a>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          messageList: [],
          display:true,
          nothandle:true,
          userId: this.$app_store.getters.userId || 3,
          read:true,
          isredspop:true,
          isredspot:true,
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
        addfriend(item, index, msgtype){
          let title = '提示';
          let content = '';
          let self = this;
          if (msgtype === 1) {
            content = '您同意添加好友至调度圈吗';
          } else if(msgtype === 2){
            content = '您同意添加好友至货源圈吗';
          }else{
            content = '您确认接受这个订单吗？';
          }
          this.message.showAlert(this, title, content)
            .then(() => {
              self.$Ice_CircleService.sendAddMyCircleMsg(this.userId,item.compId,ctype, new IceCallback(
                function (result) {
                  if (result.code === 0) {
                    if(msgtype === 1) {
                      self.$vux.toast.text('调度圈好友添加成功', 'top');
                      self.sCircleList.splice(index,1)
                    }else if(msgtype === 2){
                      self.$vux.toast.text('调度圈好友添加成功', 'top');
                      self.SchedulingCircle.splice(index,1)
                    }
                  } else {
                    self.$vux.toast.text('接受订单失败', 'top');
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
              // 这块代码的可读性就不好了
              // 下面的代码抛弃
              // self.messageList.forEach((item,index,arr)=>{
              //   let content =''
                // if(item.msgtype === 1) {
                //   content = '请求加入你的调度圈'
                // }else if(item.msgtype === 2){
                //   content = '请求加入你的货源圈'
                }else{

                //
                }
                // item[content]  = content
              // })
              // console.log(self.messageList)
            // } else {
            //   // 失败
            // }
            // 成功
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
