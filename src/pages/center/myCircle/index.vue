<template>
 <div>
   <div class="issueHeaderNav">
     <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
     <span>我的圈子</span>
     <span @click="toaddFriend">添加</span>
   </div>
   <div class="driverBox" @click="tosearchFriend">
     <div class="searchDriverBox">
       <div class="searchDriver">
         <div class="driverSearchBtn">
           <i class="icon iconfont icon-sousuo"></i>
           <span class="sousuo">搜索</span>
         </div>
       </div>
     </div>
   </div>
   <div class="circleListBox">
     <div class="circleType">
       <div class="SourceGoods marginLeft21" @click="tabClick" :class="{'activecircle': selectOneTab}">货源圈</div>
       <div class="dispatch  marginRight21" @click="tabClick"  :class="{'activecircle': !selectOneTab}">调度圈</div>
     </div>
     <ul class="circleList" v-show="selectOneTab">
       <li class="needBorder" @click="tofriendDetails">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack" @click="removeClick" @click.stop="removeClick">移 出</a>
       </li>
       <li class="needBorder">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack">移 出</a>
       </li>
       <li class="needBorder">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack">移 出</a>
       </li>
       <li class="needBorder">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack">移 出</a>
       </li>
     </ul>
     <ul class="circleList" v-show="!selectOneTab">
       <li class="needBorder" @click="tofriendDetails">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack">移 出</a>
       </li>
       <li class="needBorder">
         <img src="" alt="" class="circlePic">
         <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
         <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
         <a class="pullBlack">移 出</a>
       </li>
     </ul>
   </div>
   <div class="friendNum" v-show="selectOneTab">共4位朋友</div>
   <div class="friendNum" v-show="!selectOneTab">共2位朋友</div>
 </div>
</template>

<script>
    export default {
       data(){
         return {
           selectOneTab: true, // true 货运圈 false 调度圈
           FCircleList: [], // 货运圈列表
           SCircleList: []// 调度圈列表
         }
       },
      methods:{
        tabClick() {
          this.selectOneTab = !this.selectOneTab;
        },
        removeClick() {
          this.message.showAlert(this,'圈子移除','您确认要将其移除好友圈子吗？')
            .then(() => {
              console.log('确定')
            })
            .catch(() => {
              console.log('取消')
            })
        },
        toaddFriend(){
          this.$router.push({
            path: '/center/myCircle/addFriend'
          })
        },
        tofriendDetails() {
          this.$router.push({
            path: '/userInfo',
            query: {
              isYourCompInfo: false,
              id: '4'
            }
          })
        },
        tosearchFriend(){
          this.$router.push({
            path: '/center/myCircle/searchFriend'
          })
        },
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
