<template>
   <div>
     <div class="issueHeaderNav">
       <i class="icon iconfont icon-btngoback back"></i>
       <span>司机管理</span>
       <span @click="toaddDriver">添加</span>
     </div>
     <div class="driverBox">
       <div class="searchDriverBox">
          <div class="searchDriver">
            <div class="driverSearchBtn">
              <i class="icon iconfont icon-sousuo"></i>
              <span class="sousuo">搜索</span>
            </div>
          </div>
       </div>
       <ul class="driverList">
         <li class="needBorder">
           <div class="driverInfo">
             <div class="driverPic">
               <i class="icon iconfont icon-siji"></i>
             </div>
             <span class="driverName">张小明</span>
             <span class="driverPhone">18373256369</span>
           </div>
           <a class="driverStateNo">停用</a>
         </li>
         <li class="needBorder">
           <div class="driverInfo">
             <div class="driverPic">
               <i class="icon iconfont icon-siji"></i>
             </div>
             <span class="driverName">张小明</span>
             <span class="driverPhone">18373256369</span>
           </div>
           <a class="driverStateNo">停用</a>
         </li>
         <li class="needBorder">
           <div class="driverInfo">
             <div class="driverPic">
               <i class="icon iconfont icon-siji"></i>
             </div>
             <span class="driverName">张小明</span>
             <span class="driverPhone">18373256369</span>
           </div>
           <a class="driverStateNo">停用</a>
         </li>
         <li class="needBorder">
           <div class="driverInfo">
             <div class="driverPic">
               <i class="icon iconfont icon-siji"></i>
             </div>
             <span class="driverName">张小明</span>
             <span class="driverPhone">18373256369</span>
           </div>
           <a class="driverStateNo">停用</a>
         </li>
         <li class="needBorder">
           <div class="driverInfo">
             <div class="driverPic">
               <i class="icon iconfont icon-siji"></i>
             </div>
             <span class="driverName">张小明</span>
             <span class="driverPhone">18373256369</span>
           </div>
           <a class="driverStateYes">启用</a>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
    export default {
      data(){

      },
      methods:{
        toaddDriver(){
          this.$router.push({
              path: '/center/driverAdm/addDriver'
          }
          )
        }
      }
    }
</script>

<style scoped>

</style>
