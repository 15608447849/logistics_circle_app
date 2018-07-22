<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>证件信息</span>
      <div></div>
    </div>
    <div class="identity">
      <div>
        <p>营业执照</p>
        <!--<img src="" alt="" class="cerPic">-->
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
      </div>
      <div>
        <p>法人身份证</p>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
      </div>
      <div>
        <p>运输许可证</p>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
      </div>
      <div>
        <p>投保证明</p>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
      </div>
      <div class="updataCertificates">
        <p>地税登记证</p>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
        <!--<div class="updataCertificatesBox">-->
          <!--&lt;!&ndash;<i class="icon iconfont icon-gengduo"></i>&ndash;&gt;-->
          <!--<img src="../../assets/images/small/jiahao.png" class="upcerPic">-->
        <!--</div>-->
      </div>
      <div class="updataCertificates">
        <p>国税登记证</p>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          @files-added="filesAdded"
          @file-submitted="fileSubmitted"
          @file-success="fileSuccess"/>
        <!--<div class="updataCertificatesBox">-->
          <!--&lt;!&ndash;<i class="icon iconfont icon-gengduo"></i>&ndash;&gt;-->
          <!--<img src="../../assets/images/small/jiahao.png" class="upcerPic">-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        action: {
          target: 'http://192.168.1.240:8090/fileUpload',
          prop: 'base64Value',
          headers: {
            'Access-Control-Allow-Origin':'*',
            "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
            "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
          }
        },
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1685044995,1968324938&fm=27&gp=0.jpg',
      }
    },
    methods: {
      filesAdded(files) {
        let hasIgnore = false;
        const maxSize = 5 * 1024 * 1024; // 5M
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
      fileSubmitted(file) {
        debugger
        file.base64Value = file.file.base64
      },
      fileSuccess(file) {
        console.log('图片上传成功')
      }
    }
  }
</script>

<style scoped>

</style>
