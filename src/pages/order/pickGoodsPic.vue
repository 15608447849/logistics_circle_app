<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>取货照片</span>
      <div class="alignCenter"></div>
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
  import {ImagePreview} from 'vant';
  export default {
    data() {
      return {
        imgList: [
          'http://192.168.1.240/wlq/compic/comp13/0.jpg',
          'http://192.168.1.240/wlq/compic/comp13/0.jpg',
          'http://192.168.1.240/wlq/compic/comp13/0.jpg'
        ]
      }
    },
    mounted() {

    },
    methods: {
      // 点击查看大图
      imagePreview(index) {
        ImagePreview(this.imgList, index);
      },
      fallback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
