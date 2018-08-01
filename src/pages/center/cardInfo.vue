<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>证件信息</span>
      <div></div>
    </div>
    <div class="downfixed" >
      <div class="identity">
        <!--<div>-->
        <div class="updataCertificates" v-for="(item,index) in uploadList" :key="index">
          <p>{{item.title}}</p>
          <div class="controlPicImg">
            <i class="icon iconfont icon-guanbi"></i>
            <img :src="item.url" class="upcerPic">
          </div>
          <div class="controlPic">
            <cube-upload
              :action="{target: uploadUrl,data: {'picNo': index,'compId': userId}}"
              :simultaneous-uploads="1"
              @files-added="filesAdded"
              @file-success="filesSuccess"
              @file-error="filesError" class="controInput"></cube-upload>
          </div>

          <!--<div class="updataCertificatesBox">-->
          <!--&lt;!&ndash;<i class="icon iconfont icon-gengduo"></i>&ndash;&gt;-->
          <!--<img src="../../assets/images/small/jiahao.png" class="upcerPic">-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {uploadUrl} from "../../utils/config";

  export default {
    data() {
      return {
        uploadUrl: uploadUrl,
        userId: this.$app_store.getters.userId || 4,
        uploadIndex: 0,
        uploadList: [
          {
            title: '营业执照',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '企业法人证件',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '道路运输许可证',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '投保证明',
            smallTitle: '原件',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '国税登记证',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '地税登记证',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          },
          {
            title: '机构代码证',
            smallTitle: '副本',
            uploadBtnShow: true,
            url: 'http://192.168.1.240/wlq/compic/comp4/0.jpg'
          }
        ]
      }
    },
    mounted() {
      this.getImages(this.userId);
    },
    methods: {
      // 获取图片
      getImages(compid) {
        let path = "http://192.168.1.240:8090/getCompPic?compId=" + compid;
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data).data;
            for (var item in data) {
              if (item != 7) {
                self.uploadList[item].url = data[item];
              }
              if (item == 7) {
                localStorage.setItem("$logoImage", data[item]);
              }
            }
          }
        };
        xhr.open("GET", path, true);
        xhr.send();
      },
      filesError(files) {
        this.$vux.toast.text('图片上传失败!', 'top');
      },
      filesSuccess(files) {
        debugger
        this.$vux.toast.text(files.response.msg, 'top');
        if(files.response.code === 0) {
          let imgUrl = files.response.data.relativeAddr.split(".")[0].split('/');
          this.uploadList[imgUrl[imgUrl.length-1]].url = files.response.data.nginx + files.response.data.relativeAddr
        }
      },
      filesAdded(files) {
        // 图片压缩(未完成)
        // 图片旋转(未完成)
        let hasIgnore = false;
        const maxSize = 2 * 1024 * 1024; // 2M
        for (let k in files) {
          const file = files[k];
          if (file.size > maxSize) {
            file.ignore = true;
            hasIgnore = true;
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: '你上传的图片 > 2M '
        }).show()

      },
      fallback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
