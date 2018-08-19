<template>
  <div style="height:100%;">
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>证件信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>

    </div>
    <!--<div styel="height:100%;">-->
    <div class="identity" v-show="isEditor">
      <!--<div>-->
      <div class="updataCertificates" v-for="(item,index) in uploadList" :key="index">
        <p>{{item.title}}</p>
        <div class="controlPicImg" v-show="item.url !== ''" @click="imagePreview(index)">
          <i class="icon iconfont icon-guanbi" @click.stop="deletedImages(index)"></i>
          <i></i><img :src="item.url" class="upcerPic">
        </div>
        <cube-upload
          ref="upload"
          v-show="item.url === ''"
          style="position:relative;top:0rem;left:0rem;"
          :action="{target: uploadUrl,data: {'picNo': index,'compId': compInfo.compid}}"
          @files-added= 'filesAdded'
          @file-success="filesSuccess"
          :simultaneous-uploads="1"
          @file-error="filesError">
        </cube-upload>
        <!--<div class="updataCertificatesBox">-->
        <!--&lt;!&ndash;<i class="icon iconfont icon-gengduo"></i>&ndash;&gt;-->
        <!--<img src="../../assets/images/small/jiahao.png" class="upcerPic">-->
        <!--</div>-->
      </div>
    </div>


    <!--加了class名为displayNone为显示不可见-->
    <div class="identity" v-show="!isEditor">
      <div class="updataCertificates" v-for="(item,index) in uploadList" :key="index">
        <p>{{item.title}}</p>
        <div class="controlPicImg" v-show="item.url !== ''" @click="imagePreview(index)">
          <i></i><img :src="item.url" class="upcerPic">
        </div>
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
  import { uploadUrl,cardUrl ,delCardUrl} from '../../../static/libs/server/config'
  import Exif from 'exif-js'

  export default {
    data() {
      return {
        compInfo: {},
        isEditor: false,
        uploadUrl: uploadUrl, // 证件上传地址
        cardUrl: cardUrl,// 获取地址
        delCardUrl: delCardUrl, // 删除地址
        uploadIndex: 0,
        userId: this.$app_store.getters.userId,
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
      this.compInfo = this.$route.params;
      if(this.verifyUtil.stringIsBoolean(this.$route.query.isEditor)) {
        this.isEditor = true;
      }else {
        this.isEditor = false;
      }
      this.getImages(this.compInfo.compid);
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
        let path = delCardUrl + this.compInfo.compid + "&picNo=" + id;
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
              self.loadImage(id,'1');
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
        let path = this.cardUrl += compid;
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
      filesAdded(files) {
        let hasIgnore = false;
        const maxSize = 10 * 1024 * 1024; // 10M
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
          txt: '你上传的图片 > 5M '
        }).show()
      },
      filesError(files) {
        this.$vux.toast.text('图片上传失败!', 'top');
      },
      filesSuccess(files) {
        this.$vux.toast.text(files.response.msg, 'top');
        if (files.response.code === 0) {
          let imgUrl = files.response.data.relativeAddr.split(".")[0].split('/');
          setTimeout(() => {
            this.$vux.toast.text('图片上传成功!', 'top');
            this.uploadList[imgUrl[imgUrl.length - 1]].url = files.response.data.nginx + files.response.data.relativeAddr + '?' + new Date().getSeconds();
          }, 500);
          this.loadImage(imgUrl[imgUrl.length - 1], files.response.data.nginx + "" + files.response.data.relativeAddr);
        }
      },
      loadImage(imgId, url) {
        let imgPath = ['', '', '', '', '', '', '', ''];
        imgPath[imgId] = url;
        let self = this;
        this.$Ice_InfoService.feedbackCredentRelpath(this.compInfo.compid, imgPath,
          new IceCallback(
            function (result) {
              self.updateComp();
            },
            function (error) {
            }
          )
        );
      },
      updateComp() {		//保存信息
        let self = this;
        let compJson = new comp.CompInfo();
        compJson.compid = this.compInfo.compid;
        compJson.uoid = this.userId;
        compJson.fname = this.compInfo.fname;
        compJson.sname = this.compInfo.sname;
        compJson.ctype = this.compInfo.ctype;
        compJson.csale = this.compInfo.csale;
        compJson.contact = num2jlong(Number(this.compInfo.contact));
        compJson.postcode = this.compInfo.postcode;
        compJson.pho = num2jlong(Number(this.compInfo.pho));
        compJson.pht = num2jlong(Number(this.compInfo.pht));
        compJson.area = this.compInfo.area;
        compJson.address = this.compInfo.address;
        compJson.invtitle = this.compInfo.invtitle;
        compJson.invtype = this.compInfo.invtype;
        compJson.taxno = this.compInfo.taxno;
        compJson.phone = this.compInfo.phone;
        compJson.landline = this.compInfo.landline;
        compJson.openbank = this.compInfo.openbank;
        compJson.openaccount = this.compInfo.openaccount.toString();
        compJson.billarea = this.compInfo.billarea;
        compJson.billaddr = this.compInfo.billaddr;
        this.$Ice_InfoService.updateComp(compJson, new IceCallback(
          function (result) {

          },
          function (error) {
            this.$vux.toast.text(error, 'top');
          }
        ))
      },
      imgPreview(file) {
        let self = this;
        let Orientation;
        //去获取拍照时的信息，解决拍出来的照片旋转问题
        Exif.getData(file, function () {
          Orientation = Exif.getTag(this, 'Orientation');
        });
        // 看支持不支持FileReader
        if (!file || !window.FileReader) return;

        if (/^image/.test(file.type)) {
          // 创建一个reader
          let reader = new FileReader();
          // 将图片2将转成 base64 格式
          reader.readAsDataURL(file);
          // 读取成功后的回调
          reader.onloadend = function () {
            let result = this.result;
            let img = new Image();
            img.src = result;
            //判断图片是否大于100K,是就直接上传，反之压缩图片
            if (this.result.length <= (100 * 1024)) {

              return this.result;
            } else {
              img.onload = function () {
                let data = self.compress(img, Orientation);
                debugger
                return data;
              }
            }
          }
        }
      },
      compress(img, Orientation) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        let ratio;
        if ((ratio = width * height / 4000000) > 1) {
          console.log("大于400万像素");
          ratio = Math.sqrt(ratio);
          width /= ratio;
          height /= ratio;
        } else {
          ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        let count;
        if ((count = width * height / 1000000) > 1) {
          console.log("超过100W像素");
          count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
          //            计算每块瓦片的宽和高
          let nw = ~~(width / count);
          let nh = ~~(height / count);
          tCanvas.width = nw;
          tCanvas.height = nh;
          for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
              tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height);
        }
        //修复ios上传图片的时候 被旋转的问题
        if (Orientation != "" && Orientation != 1) {
          switch (Orientation) {
            case 6://需要顺时针（向左）90度旋转
              this.rotateImg(img, 'left', canvas);
              break;
            case 8://需要逆时针（向右）90度旋转
              this.rotateImg(img, 'right', canvas);
              break;
            case 3://需要180度旋转
              this.rotateImg(img, 'right', canvas);//转两次
              this.rotateImg(img, 'right', canvas);
              break;
          }
        }
        //进行最小压缩
        let ndata = canvas.toDataURL('image/jpeg', 0.1);
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
      },
      rotateImg(img, direction, canvas) {
        //最小与最大旋转方向，图片旋转4次后回到原方向
        const min_step = 0;
        const max_step = 3;
        if (img == null) return;
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错
        let height = img.height;
        let width = img.width;
        let step = 2;
        if (step == null) {
          step = min_step;
        }
        if (direction == 'right') {
          step++;
          //旋转到原位置，即超过最大值
          step > max_step && (step = min_step);
        } else {
          step--;
          step < min_step && (step = max_step);
        }
        //旋转角度以弧度值为参数
        let degree = step * 90 * Math.PI / 180;
        let ctx = canvas.getContext('2d');
        switch (step) {
          case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
          case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
          case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
          case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
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
