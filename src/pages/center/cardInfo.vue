<template>
  <div style="height:100%;">
    <div class="issueHeaderLog">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>证件信息</span>
      <div></div>
    </div>
    <!--<div styel="height:100%;">-->
      <div class="identity">
        <!--<div>-->
        <div class="updataCertificates" v-for="(item,index) in uploadList" :key="index">
          <p>{{item.title}}</p>
          <div class="controlPicImg" v-show="item.url !== ''" @click="imagePreview(index)">
            <i class="icon iconfont icon-guanbi" @click.stop="deletedImages(index)"></i>
            <img :src="item.url" class="upcerPic">
          </div>
          <cube-upload
            ref="upload"
            v-show="item.url === ''"
            style="position:relative;top:0rem;left:0rem;"
            :action="{target: uploadUrl,data: {'picNo': index,'compId': userId}}"
            @files-added="filesAdded"
            @file-success="filesSuccess"
            @file-error="filesError">
          </cube-upload>
          <!--<div class="updataCertificatesBox">-->
          <!--&lt;!&ndash;<i class="icon iconfont icon-gengduo"></i>&ndash;&gt;-->
          <!--<img src="../../assets/images/small/jiahao.png" class="upcerPic">-->
          <!--</div>-->
        </div>
      </div>
  </div>
</template>

<script>
  import {ImagePreview} from 'vant';
  import {uploadUrl} from "../../utils/config";
  import EXIF from '../../utils/exif-js'
  export default {
    data() {
      return {
        uploadUrl: uploadUrl,
        userId: this.$app_store.getters.userId,
        uploadIndex: 0,
        uploadList: [
          {
            title: '营业执照',
            smallTitle: '副本',
            url: ''
          },
          {
            title: '企业法人证件',
            smallTitle: '副本',
            url: ''
          },
          {
            title: '道路运输许可证',
            smallTitle: '副本',
            url: ''
          },
          {
            title: '投保证明',
            smallTitle: '原件',
            url: ''
          },
          {
            title: '国税登记证',
            smallTitle: '副本',
            url: ''
          },
          {
            title: '地税登记证',
            smallTitle: '副本',
            url: ''
          },
          {
            title: '机构代码证',
            smallTitle: '副本',
            url: ''
          }
        ]
      }
    },
    mounted() {

      this.getImages(this.userId);
    },
    methods: {
      // 点击查看大图
      imagePreview(index) {
        let Images = [];
        this.uploadList.forEach((item, index, arr) => {
          if (item.url !== '') Images.push(item.url);
        });
        ImagePreview(Images, index);
      },
      deletedImages(id) {
        let self = this;
        let path = "http://192.168.1.240:8090/delCompPic?compId=" + this.userId + "&picNo=" + id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            data = JSON.parse(data);
            if (data.code === 0) {
              self.uploadList[id].uploadBtnShow = true;
              self.uploadList[id].url = '';
              self.$vux.toast.text('图片删除成功!', 'top');
              self.$refs.upload[id].removeFile(self.$refs.upload[id].files)
            } else {
              self.$vux.toast.text('图片删除失败!', 'top');
            }
          }
        };
        xhr.open("GET", path, true);
        xhr.send();
      },
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
                // localStorage.setItem("$logoImage", data[item]);
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
        this.$vux.toast.text(files.response.msg, 'top');
        if (files.response.code === 0) {
          let imgUrl = files.response.data.relativeAddr.split(".")[0].split('/');
          setTimeout(()=>{
            this.$vux.toast.text('图片上传成功!', 'top');
            this.uploadList[imgUrl[imgUrl.length - 1]].url = files.response.data.nginx + files.response.data.relativeAddr + '?' + new Date().getSeconds();
          },500);
        }
      },
      filesAdded(files) {
        let self = this;
        // 图片压缩
        this.imgPreview(files);
        // 图片旋转
        // EXIF.getData(this.file, function() {
        //   self.Orientation = EXIF.getTag(this, 'Orientation');
        // });
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
      imgPreview (file) {   //base64 格式
        this.imgType=1;
        this.img_loading=true;
        let self = this;
        let imgContent={};
        imgContent.name=file.name;
        // 看支持不支持FileReader
        if (!file || !window.FileReader) return;

        if (/^image/.test(file.type)) {
          // 创建一个reader
          var reader = new FileReader();
          // 将图片将转成 base64 格式
          reader.readAsDataURL(file);
          // 读取成功后的回调
          reader.onloadend = function () {
            let IMG = new Image();
            IMG.src = this.result;
            IMG.onload = function(){
              let w = this.naturalWidth,
                h = this.naturalHeight,
                resizeW = 0,
                resizeH = 0;
              //压缩设置
              let maxSize = {
                width:1280,      //图片最大宽度
                height:1280,     //图片最大高度
                level:0.6       //图片保存质量
              };
              //计算缩放比例
              if(w > maxSize.width || h > maxSize.height){
                let multiple = Math.max(w / maxSize.width , h / maxSize.height);
                resizeW = w / multiple;
                resizeH = h / multiple;
              }else{
                resizeW = w;
                resizeH = h;
              }
              let canvas = document.createElement("canvas"),
                cxt = canvas.getContext('2d');
              //根据拍摄的角度进行图片旋转调整
              if (self.Orientation == 3) {
                canvas.width = resizeW;
                canvas.height = resizeH;
                cxt.rotate(Math.PI);
                cxt.drawImage(IMG, 0, 0, -resizeW, -resizeH)
              } else if (self.Orientation == 8) {
                canvas.width = resizeH;
                canvas.height = resizeW;
                cxt.rotate(Math.PI * 3 / 2);
                cxt.drawImage(IMG, 0, 0, -resizeW, resizeH)
              } else if (self.Orientation == 6) {
                canvas.width = resizeH;
                canvas.height = resizeW;
                cxt.rotate(Math.PI / 2);
                cxt.drawImage(IMG, 0, 0, resizeW, -resizeH)
              } else {
                canvas.width = resizeW;
                canvas.height = resizeH;
                cxt.drawImage(IMG, 0, 0, resizeW, resizeH)
              }
              //base64,最终输出的压缩文件
              self.base64 = canvas.toDataURL('image/jpeg',maxSize.level);
              self.num+=1;
              self.imgType=0;
              self.img_loading=false;
              self.imgData.push(self.base64 )
            }
          };
        }
      },
      fallback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
