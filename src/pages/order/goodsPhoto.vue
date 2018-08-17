<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>取货照片</span>
        <!--<span v-if="orderState.tstatus === 4">签收照片</span>-->
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div class="downfixed havedownfixed">
      <div class="pickGoodsPicBox">
        <div class="pickGoodsPicList" v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="" @click="imagePreview(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goodsPhoto.vue"
    }
</script>

<style scoped>

</style>
