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
       <div class="SourceGoods marginLeft21">货源圈</div>
       <div class="dispatch marginRight21 marginRight21 activecircle">调度圈</div>
       <div class="SourceGoods marginLeft21" :class="classA ? 'activecircle' : 'class-b' ">货源圈</div>
       <div class="dispatch  marginRight21">调度圈</div>
     </div>
     <ul class="circleList">
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
   </div>
   <div class="friendNum">共4位朋友</div>
 </div>
</template>

<script>
    export default {
       data(){
         return {
           selectOneTab: false
         }
       },
      methods:{
        toaddFriend(){
          this.$router.push({
            path: '/center/myCircle/addFriend'
          })
        },
        tofriendDetails(){
          this.$router.push({
            path: '/center/myCircle/friendDetails'
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
