<template>
  <div style="background:#ffffff;">
    <div class="issueHeaderLog">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>发表评论</span>
      <div class="alignCenter"></div>
    </div>
      <!--<div class="evaluateName">-->
        <!--<div class="evalogisticsNameBox">-->
          <!--<img src="../../assets/images/small/evaluate_03.png" alt="">-->
          <!--<span class="evaLogisticsName">黄旺物流</span>-->
        <!--</div>-->
      <!--</div>-->
      <ul class="evaluateList">
        <li class="expressionList">
          <span class="evaluateTitle margin-right63">评价</span>
          <div v-for="(item, index) in evaluateList" :key="index" @click='appraiseBtn(item,index)' class="evaluateExpression">
            <img v-show="item.isSelected" src="../../assets/images/small/evaluate_07.png" alt="" class="marginright13">
            <img v-show="!item.isSelected" src="../../assets/images/small/evaluate_09.png" alt="" class="marginright13">
            <span class="evaluateTitle">{{item.name}}</span>
          </div>

          <!--<img src="../../assets/images/small/evaluate_09.png" alt="" class="marginright13">-->
          <!--<span class="evaluateTitle margin-right56">中评</span>-->
          <!--<img src="../../assets/images/small/evaluate_10.png" alt="" class="marginright13">-->
          <!--<span class="evaluateTitle">差评</span>-->
        </li>
      </ul>
      <div class="evaluateDiv">
        <span class="pingfeng evaluateTitle">评分</span>
        <ul class="evaluateStart">
          <li>
            <span class="evaluateTitle margin-right31">服务态度</span>
            <van-rate style="display:inline-block;width:3rem;"  v-model="star1"/>
          </li>
          <li>
            <span class="evaluateTitle margin-right31">运输质量</span>
            <van-rate style="display:inline-block;width:3rem;"   v-model="star2" />
          </li>
          <li>
            <span class="evaluateTitle margin-right31">时&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp效</span>
            <van-rate style="display:inline-block;width:3rem;"  v-model="star3" />
          </li>
        </ul>
      </div>
      <div class="textareaBox">
        <span class="evaluateTitle margin-top22">描述</span>
        <textarea v-model="remarks" class="evaluateTextarea" placeholder="说说你对本次服务的感受吧~"></textarea>
      </div>
      <!--isEditor 控制当前是编辑 还是预览-->

      <div v-show="isEditor" class="pingjiaPic">
        <span class="addCommentPic">添加图片</span>
        <cube-upload
          ref="upload"
          style="position:relative;top:0rem;left:1.7rem;"
          :action="uploadEvalUrl"
          @files-added="filesAdded"
          @file-success="filesSuccess"
          @file-error="filesError">
        </cube-upload>
      </div>
      <div>

      </div>
      <div class="SubmissionBox">
        <button @click="saveEvaluate" v-show="isEditor">提交评价</button>
      </div>
  </div>
</template>

<script>
  import {uploadEvalUrl} from "../../utils/config";
    export default {
      data(){
        return {
          isEditor: true,
          uploadEvalUrl: uploadEvalUrl, // 图片上传地址
          remarks: '', // 描述
          orderInfo: {},
          userId: this.$app_store.getters.userId,
          evaluateList: [{
            name : '好评',
            value: 3,
            isSelected: true
          },{
            name : '中评',
            value: 2,
            isSelected: false
          },{
            name : '差评',
            value: 1,
            isSelected: false
          }],
          OrderEvaluate: new myOrder.OrderEvaluate(),
          star1: 5, //服务态度
          star2: 5, //运输质量
          star3: 5, //运输时效
          current: 3, // 好评 中评 差评
          type: 0 // 0 列表  1 详情
        }
      },
      mounted() {
        this.orderInfo = this.$route.params
      },
      methods:{
        // 保存评价信息
        saveEvaluate(){
          let self = this;
          this.OrderEvaluate.pubcompid = this.orderInfo.pubcompid; //发布企业
          this.OrderEvaluate.revicompid = this.orderInfo.revicompid; //运输企业
          this.OrderEvaluate.orderid = this.orderInfo.orderno; //订单id
          this.OrderEvaluate.evaluator = this.userId; //用户id
          this.OrderEvaluate.grade = this.current; //评价等级
          this.OrderEvaluate.service = this.star1; //服务态度
          this.OrderEvaluate.quality = this.star2; //运输质量
          this.OrderEvaluate.timely = this.star3; //运输时效
          this.OrderEvaluate.remarks = this.remarks; //描述
          let imgList = this.initImgList();
          if(imgList.length > 0){
            this.OrderEvaluate.picurlarr = '[' + imgList + ']'; //图片集合
          }
          this.$Ice_myOrderService.insertOrderEvaluate(this.OrderEvaluate,new IceCallback(
            function(res){
              self.$vux.toast.text(res.msg, 'top');
              if(res.code === 0) {
                setTimeout(()=> {
                  self.$router.go(-1);
                });
              }
            }
          ))
        },
        //图片数组
        initImgList(){
          let fileList = this.$refs.upload.files;
          let res = [];
          for(let i=0;i<fileList.length;i++){
            let img = '"' + fileList[i].response.data[0].nginx + fileList[i].response.data[0].relativeAddr + '"';
            res.push(img)
          }
          return res;
        },
        appraiseBtn(item, position) {
          this.evaluateList.forEach((item, index ,arr) =>{
            if(position === index) {
              this.current = item.value;
              item.isSelected = true
            } else {
              item.isSelected = false
            }
          });
          console.log(this.current);
        },
        filesAdded(files) {
          let self = this;
          // 图片压缩
          // this.imgPreview(files);
          // 图片旋转
          // EXIF.getData(this.file, function() {
          //   self.Orientation = EXIF.getTag(this, 'Orientation');
          // });
          let hasIgnore = false;
          const maxSize = 5 * 1024 * 1024; // 2M
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
        filesSuccess(files) {

          if (files.response.code === 0) {
            this.$vux.toast.text(files.response.msg, 'top');
          }
        },
        filesError(files) {
          this.$vux.toast.text('图片上传失败!', 'top');
        },
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
