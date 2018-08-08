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
      console.log(this.$route.params)
    },
    methods: {
      //查看取货照片
      viewPhoto(orderId,compId,imgArr){
        console.log(orderId,compId)
        console.log(this.getImgUrl(orderId,compId))
        let imgUrl = this.getImgUrl(orderId,compId);
        let imgName = eval ("(" + imgArr + ")");
        let imgUrlList = [];
        console.log(imgName);
        for(let i=0;i<imgName.length;i++){
          console.log(imgName[i]);
          imgUrlList.push('http://192.168.1.110:8029/' + imgUrl + '/' + imgName[i])
        }
        this.viewModal = true;
        console.log(imgUrlList);
        this.imgUrl = imgUrlList;

      },
      //获取图片地址
      getImgUrl(orderId,compId){
        let dirs = [];
        if(compId){
          let dir1 = compId % 100;
          console.log(dir1);

          dir1 = dir1 < 10 ? ("0" + dir1) : dir1;

          dir1 = "EP" + dir1;

          dirs.push(dir1);
          let dir2 = compId;
          dirs.push(dir2);
          if(orderId && orderId.length > 6){
            let dir3 = orderId.substr(0,4);
            dirs.push(dir3);
            let dir4 = orderId.substr(4,2);
            dirs.push(dir4);
            let dir5 = orderId.substr(6,2);
            dirs.push(dir5);
            let dir6 = orderId;
            dirs.push(dir6);
          }
        }
        return dirs.join("/");
      },
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
