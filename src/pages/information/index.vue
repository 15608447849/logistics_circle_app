<template>
  <div>
    <yd-navbar title="信息大厅"></yd-navbar>
    <div class="content" style="margin-top: 1rem">

      <!--<div class="order_header">-->
        <!--<span class="order_num">共1888条</span>-->
        <!--<a class="issue_order" @click="toissue">发布订单</a>-->
      <!--</div>-->
      <yd-pullrefresh :callback="requestInfoList" ref="pullrefreshDemo">
        <div class="list_content">
          <ul class="order_box">
            <li class="order_list" v-for="(item, index) in infoList" :key="index">
              <div class="order_price"><span class="site">{{item.lineInfo}}</span><span class="price">{{item.fee}}元</span></div>
              <div class="order_time"><span class="volume">{{item.goodsInfo}}</span><span class="car_type">{{item.vehicleRequire}}</span><span class="time">{{item.time}}</span></div>
            </li>
          </ul>
        </div>
      </yd-pullrefresh>

    </div>

  </div>
</template>
<script>
  export default{
    data() {
      return {
        infoList: [],
        requestList: [],
        pullSize: '100',// 获取条数
        searchContent: '', // 搜索内容
        maxSize: 22,// 当前列表最大存放条数
        i:0,
      }
    },
    mounted() {
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        let self = this;
        let userToken = this.$app_store.state.userToken|| '';
        this.$Ice_OrderService.queryAllByKey(userToken,this.searchContent,this.pullSize,
          new IceCallback(
            function (result) {
              self.filterList(result, self.infoList);
              setTimeout(()=> {
                self.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
              },1000);
            },
            function (error) {
              setTimeout(()=> {
                self.message.toast(self,'信息大厅数据获取失败:error'+error,'error');
                self.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
              },1000);
            }
          ))
      },
      // 数据比对
      filterList(newVal, oldVal) {
        if(this.verifyUtil.isNullArray(oldVal)) {
          this.infoList = newVal;
        } else {
          let result = [];
          for(let i = 0; i < newVal.length; i++){
            let obj = newVal[i];
            let num = obj.id;
            let flag = false;
            for(let j = 0; j < oldVal.length; j++){
              let aj = oldVal[j];
              let n = aj.id;
              if(n === num){
                flag = true;
                break;
              }
            }
            if(!flag){
              result.push(obj);
            }
          }
          // requestList 防止页面多次刷新
          self.requestList = this.copyArr(oldVal);
          self.requestList.push(result);
          if(self.requestList.length > maxSize){
            // 删除多余数据
            self.requestList.splice(1,maxSize-self.requestList.length);
            self.infoList = this.copyArr(self.requestList);
            // 清空requestList
            self.requestList.splice(0,self.requestList.length);
          } else {
            self.infoList = this.copyArr(self.requestList);
          }
        }
      },
      copyArr(arr) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
          res.push(arr[i])
        }
        return res
      }
    }
  }
</script>
<style>
  .content .order_header{
    display:block;
    padding-left:10px;
    padding-right:10px;
    margin-top:50px;
    margin-bottom:80px;
  }
  .content .order_header .order_num{
    float:left;
  }
  .content .order_header .issue_order{
    float:right;
    width:75px;
    height:20px;
    text-align: center;
    border:1px solid gray;
    border-radius: 2px;
  }
  .list_content{
    margin:0px 10px 0px 10px;
    margin:0px 10px 0px 10px;

  }
  ul .order_box{
    margin-top:15px;
  }
  ul .order_list{
    display:block;
    width:100%;
    margin-top:10px;
    height:40px;
    border-bottom:1px solid gray;
    border-top:1px solid gray;
  }
  .order_price{
    width:100%;
    height:20px;
    font-weight: bold;
    margin-right:10px;
  }
  .order_price .site{
    float:left;
  }
  .order_price .price{
    float:right;
    color:red;
  }
  .order_time{
    font-size:14px;
  }
  .order_time .volume{
    float:left;
    margin-right:13px;
  }
  .order_time .time{
    float:right;
  }
</style>
