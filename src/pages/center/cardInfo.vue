<template>
  <div>
    <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>证件信息</span>
      <div></div>
    </div>
    <div class="identity">
      <!--<div>-->
      <div class="updataCertificates" v-for="(item,index) in uploadList" :key="index">
        <p>{{item.title}}</p>
        <Button  class="margin_top_5" @click.native="uploadBtn(index)">
          <i class="icon iconfont icon-gengduo1 updataCertificatesPic"></i>
          <form action="http://192.168.1.240:8090/fileUploadCompPic" method="post"
                enctype ="multipart/form-data" class="formImage" :id="'form_'+index" target="nm_iframe">
            <input type="file" name="file" mult iple="multiple"  accept=".png,.jpg,.jpeg" @change="handleUpload" class="marginleftCenter opacty0"/>
            <input type="text" name="picNo" v-model="uploadIndex" class="opacty0"/>
            <input type="text" name="compId" v-model="compid" class="opacty0"/>
          </form>
        </Button>
        <div class="upload" v-if="item.url != ''">
          <div class="upload-list" >
            <template>
              <img :src="item.url">
              <div class="upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="bigImage(item)"></Icon>
                <Icon type="ios-trash-outline" @click.native="deletedImages(key)"></Icon>
                <Icon type="ios-compose-outline"></Icon>
              </div>
            </template>
          </div>
        </div>
        <div class="text_center margin_top_10">
          <p>{{item.title}}</p>
          <p>（{{item.smallTitle}}）</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        action: 'http://192.168.1.240:8090/fileUploadCompPic',
        uploadIndex:0,
        compid:'',
        uploadList: [
          {
            title:'营业执照',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'企业法人证件',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'道路运输许可证',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'投保证明',
            smallTitle:'原件',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'国税登记证',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'地税登记证',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          },
          {
            title:'机构代码证',
            smallTitle:'副本',
            uploadBtnShow:true,
            url:''
          }
        ],
        imgObj: {}
      }
    },
    mounted() {
      this.getImages(4);
    },
    methods: {
      // 获取图片
      getImages(compid) {
        debugger
        let path = "http://192.168.1.240:8090/getCompPic?compId="+compid;
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data).data;
            for (var item in data) {
              if (item != 7){
                self.uploadList[item].url = data[item];
              }
              if (item == 7) {
                localStorage.setItem("$logoImage",data[item]);
              }
            }
          }
        };
        xhr.open("GET", path , true);
        xhr.send();
      },
      uploadBtn(key) {
        this.uploadIndex = key;
      },
      handleUpload(event) {
        let reader = new FileReader();
        reader.readAsDataURL(event.currentTarget.files[0]);
        let self = this;
        reader.onloadend = function (e) {
          self.uploadList[self.uploadIndex].url = e.target.result;
          let sub = document.getElementById('form_'+self.uploadIndex);
          sub.submit();
          self.uploadList[self.uploadIndex].uploadBtnShow = false;
        }
      },
      fallback() {
        this.$router.go(-1)
      },
      bigImage(img) {
        this.imgModal = true;
        this.imgTitle = img.title;
        this.imgUrl = img.url;
      },
      deletedImages(id) {
        let self = this;
        let path = "http://192.168.1.240:8090/delCompPic?compId="+this.compid+"&picNo="+id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data);
            if (data.code == 0) {
              self.uploadList[id].uploadBtnShow = true;
              self.uploadList[id].url = '';
              self.$Notice.success({
                title:'删除图片成功 '
              });
            } else {
              self.$Notice.error({
                title:'删除图片失败 '
              });
            }
          }
        };
        xhr.open("GET", path , true);
        xhr.send();
      },
    }
  }
</script>

<style scoped>

</style>
