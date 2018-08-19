<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>查看照片</span>
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
  import {ImagePreview} from 'vant';
  import { pickupUrl } from '../../../static/libs/server/config'
  export default {
    data() {
      return {
        orderState:{},// 列表页面传过来的值
        pickupUrl: pickupUrl,
        imgList: [],
        detailInfo: {}
      }
    },
    mounted() {
      this.detailInfo = this.$route.params;
      if(this.detailInfo.qhType === 0) {
        this.viewPhoto(this.detailInfo.orderno,this.detailInfo.revicompid,this.detailInfo.puimg);
      }else {
        this.viewPhoto(this.detailInfo.orderno,this.detailInfo.revicompid,this.detailInfo.retuimg);
      }
    },
    methods: {
      // 点击查看大图
      imagePreview(index) {
        ImagePreview(this.imgList, index);
      },
      fallback() {
        this.$router.go(-1)
      },
      //查看取货照片
      // viewPhoto(orderid,compid,imgArr){
      //   debugger
      //   console.log(orderid,compid)
      //   console.log(this.getImgUrl(orderid,compid))
      //   // let imgUrl = this.getImgUrl(orderid,compid);
      //   let imgName = eval ("(" + imgArr + ")");
      //   let imgUrlList = [];
      //   console.log(imgName);
      //   for(let i=0;i<imgName.length;i++){
      //     console.log(imgName[i]);
      //     imgUrlList.push(this.pickupUrl + imgUrl + '/' + imgName[i])
      //   }
      //   this.viewModal = true;
      //   this.imgList = imgUrlList;
      // },
      viewPhoto(orderid,compid,imgArr){
//     		console.log(this.getImgUrl(orderid,compid))
//     		var imgUrl = this.getImgUrl(orderid,compid);
        let imgName = eval ("(" + imgArr + ")");
        let imgUrlList = [];
        console.log(imgName);
        for(let i=0;i<imgName.length;i++){
          console.log(imgName[i]);
          imgUrlList.push(this.pickupUrl + imgName[i])
        }
        this.imgList = imgUrlList;
      },
      //获取图片地址
      getImgUrl(orderid,compid){
        let dirs = [];
        if(compid){
          let dir1 = compid % 100;
          console.log(dir1)
          dir1 = dir1 < 10 ? ("0" + dir1) : dir1;
          dir1 = "EP" + dir1;
          dirs.push(dir1);
          let dir2 = compid;
          dirs.push(dir2);
          if(orderid && orderid.length > 6){
            let dir3 = orderid.substr(0,4);
            dirs.push(dir3);
            let dir4 = orderid.substr(4,2);
            dirs.push(dir4);
            let dir5 = orderid.substr(6,2);
            dirs.push(dir5);
            let dir6 = orderid;
            dirs.push(dir6);
          }
        }
        return dirs.join("/");
      },
    }
  }
</script>

<style scoped>

</style>
