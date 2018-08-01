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
          <div class="controlPicImg" v-show="item.url !== ''">
            <i class="icon iconfont icon-guanbi" @click="deletedImages(index)"></i>
            <img :src="item.url" class="upcerPic">
          </div>
          <cube-upload
            ref="upload"
            v-show="item.url === ''"
            style="position:relative;top:0rem;left:0rem;background:red;"
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
  </div>
</template>

<script>
  import {uploadUrl} from "../../utils/config";

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
      deletedImages(id) {
        let self = this;
        let path = "http://192.168.1.240:8090/delCompPic?compId="+this.userId+"&picNo="+id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
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
        xhr.open("GET", path , true);
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
        this.$vux.toast.text(files.response.msg, 'top');
        if(files.response.code === 0) {
          this.$vux.toast.text('图片上传成功!', 'top');
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
