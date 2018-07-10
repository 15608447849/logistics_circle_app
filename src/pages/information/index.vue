<template>
  <div>
    <yd-navbar title="信息大厅"></yd-navbar>
    <div class="content" style="margin-top: 1rem">
      <div class="order_header">
        <span class="order_num">共1888条</span>
        <!--<a class="issue_order" @click="toissue">发布订单</a>-->
      </div>
      <yd-pullrefresh :callback="requestInfoList" ref="pullrefreshDemo">
        <div class="list_content">
          <ul class="order_box">
            <li class="order_list" v-for="(item, index) in infoList" :key="index">
              <div class="order_price"><span class="site">{{item.lineInfo}}</span><span
                class="price">{{item.fee}}元</span></div>
              <div class="order_time"><span class="volume">{{item.goodsInfo}}</span><span class="car_type">{{item.vehicleRequire}}</span><span
                class="time">{{item.time}}</span></div>
            </li>
          </ul>
        </div>
      </yd-pullrefresh>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        infoList: [],
        requestList: [],
        pullSize: '100',// 获取条数
        searchContent: '', // 搜索内容
      }
    },
    mounted() {
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        let self = this;
        let userToken = this.$app_store.state.userToken || '';
        this.$Ice_OrderService.queryAllByKey(userToken, this.searchContent, this.pullSize,
          new IceCallback(
            function (result) {
              console.log(result)
              setTimeout(() => {
                self.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
              }, 1000);
              self.infoList = result;
            },
            function (error) {
              console.log(error)
              setTimeout(() => {
                self.message.toast(self, '信息大厅数据获取失败:error' + error, 'error');
                self.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
              }, 1000);
            }
          ))
      },
      toPageDetail() {

      }
    }
  }
</script>
<style>
  .content .order_header {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 50px;
    margin-bottom: 80px;
  }

  .content .order_header .order_num {
    float: left;
  }

  .content .order_header .issue_order {
    float: right;
    width: 75px;
    height: 20px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 2px;
  }

  .list_content {
    margin: 0px 10px 0px 10px;
    margin: 0px 10px 0px 10px;

  }

  ul .order_box {
    margin-top: 15px;
  }

  ul .order_list {
    display: block;
    width: 100%;
    margin-top: 10px;
    height: 40px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
  }

  .order_price {
    width: 100%;
    height: 20px;
    font-weight: bold;
    margin-right: 10px;
  }

  .order_price .site {
    float: left;
  }

  .order_price .price {
    float: right;
    color: red;
  }

  .order_time {
    font-size: 14px;
  }

  .order_time .volume {
    float: left;
    margin-right: 13px;
  }

  .order_time .time {
    float: right;
  }
</style>
