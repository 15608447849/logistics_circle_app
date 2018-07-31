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
        </div>

      </div>
      <ul class="circleList">
        <li class="needBorder" @click="seeDetails" v-for="(item, index) in messageList" :key="index">
          <img src="../../../assets/images/small/evaluate_03.png" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">{{item.sendName}}</span></div>
          <div class="lineName"><span class="lineInfo"> {{item.content}}</span></div>

          <a class="pullBlack" v-show="nothandle" >同意</a>
          <a class="handleafter" v-show="display">已同意</a>
          <a class="read" v-show="read">已阅读</a>
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
          read:true,
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
        getMessageList() {
          let self = this;
          this.$Ice_MessageService.queryMsgListByUno(this.$app_store.getters.userId,new IceCallback( function(result){
            if(result.code === 0) {
              // 成功
              self.messageList = result.obj;
              self.messageList.forEach((item,index,arr)=>{
                let content =''
                if(item.msgtype === 2) {
                  content = '请求加入你的xx圈'
                }
                item[content]  = content
              })
              console.log(self.messageList)
            } else {
              // 失败
            }
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
