<template>
  <div class="content">
    <mt-header fixed title="信息大厅">
    </mt-header>
    <div class="order_header">
      <span class="order_num">共1888条</span>
      <a class="issue_order" @click="toissue">发布订单</a>
    </div>
    <div class="list_content">
        <ul class="order_box">
          <li class="order_list">
            <div class="order_price"><span class="site">长沙到广州</span><span class="price">2000元</span></div>
            <div class="order_time"><span class="volume">家具,9方</span><span class="car_type">厢式货车，9.6</span><span class="time">1小时前发布</span></div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      toissue() {
        this.$router.push({path: '/information/issue'})
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
