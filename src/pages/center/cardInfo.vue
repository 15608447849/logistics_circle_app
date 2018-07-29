<template>
  <div>
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        action: 'http://192.168.1.240:8090/fileUploadCompPic',
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1685044995,1968324938&fm=27&gp=0.jpg',
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
      }
    }
  }
</script>

<style scoped>

</style>
