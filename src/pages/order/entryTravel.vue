<template>
   <div>
     <div class="issueHeaderLog">
       <div class="width20">
         <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
       </div>
       <div class="width60">
         <span>录入行程</span>
         <!--<span v-if="orderState.tstatus === 4">签收照片</span>-->
       </div>
       <div class="width20">
         <div class="alignCenter floatright"></div>
       </div>
     </div>
     <div class="entryTravelBox">
       <ul class="entryTravelList">
         <li class="needBorder">
           <span class="textRed">*</span>
           <span>时间</span>
           <input type="text" placeholder="请选择时间" readonly="readonly" class="floatright">
         </li>
         <li class="needBorder">
           <span class="textRed">*</span>
           <span>状态</span>
           <input type="text" placeholder="请选择状态" readonly="readonly" class="floatright">
         </li>
         <li class="needBorder">
           <span class="textRed">*</span>
           <span>地点</span>
           <input type="text" placeholder="请选择地点" readonly="readonly" class="floatright">
         </li>
       </ul>
       <div class="describeBox">
         <span class="describe">描述</span>
         <!--<textarea placeholder="请输入描述信息" class="describeInfo"></textarea>-->
         <div class="describeInfo" contenteditable="true" ><br /></div>
       </div>
        <button class="describeSure">确定</button>
     </div>
   </div>
</template>

<script>
    export default {
       data(){
         return {
           time:'',
           state:'',
           address:''
         }
       },
      methods:{
        fallback(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>

</style>
