<template>
  <div>
    <div class="myReleaseBox">
      <div class="issueHeaderNav">
        <i class=""></i>
        <span>我的发布</span>
        <i class="icon iconfont icon-sousuo white" @click="toreleaseSearchpage"></i>
      </div>
      <div class="releaseAccept">发布订单{{total}}条</div>
      <div class="releaseMenu">
        <span class="releaseState" :class="{'activecircle' : item.isSelected}"  v-for="(item , index) in tabList" :key="index"  @click.stop="tabItemClick(item)">{{item.name}}</span>
      </div>

      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <ul class="myReleaseList" v-for="(item, index) in releaseList" :key="index">
          <div class="releaseCompany">
            <div class="companyBox">
              <i class="icon iconfont icon-qiyexinxi"></i>
              <span>{{item.shipperName}}</span>
              <i class="icon iconfont icon-icon-test"></i>
            </div>
            <!--<span class="releasetext">发布</span>-->
            <span class="releasetext">取货</span>
          </div>
          <li class="address marginBottom15">
            <div class="addressList"><span>{{item.startc}}</span>-<span>{{item.arriarc}}</span></div>
          </li>
          <li class="collection marginBottom15">
            <span>无代收，无保价</span>
          </li>
          <li class="specifications marginBottom15">
            <span>{{item.ctdictc}}，{{item.wm}}{{item.wmdictc}}</span> <span>{{item.vtdictc}},{{item.vldictc}}</span>
          </li>
          <li class="specifications marginBottom15">
            <span>发布日期：</span> <span>{{item.pubdate}}</span><span> {{item.pubtime}}</span>
          </li>
          <li class="pickGoods marginBottom15">
            <div>
              <span>取货时间：</span> <span>{{item.revidate}}</span><span> {{item.revitime}}</span>
            </div>
            <!--<span class="underPay">线下付款</span>-->
            <!--线上付款-->
            <span class="underPay">线上付款</span>
          </li>
          <li class="goodsTotalPrice">
            <div></div>
            <!--<div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">2680</span></div>-->
          </li>
          <!--抢单-->
          <div class="cancelRefres">
            <!--我的发布 -->
            <div class="operationA" v-show="item.ostatus === '0'">
              <a class="colorsixsix">取消发布</a>
              <a class="colorsixsix">刷新</a>
            </div>
            <!--抢单-->
            <div class="operationA" v-show="item.ostatus === '1'">
              <a class="colorsixsix" @click="toseeDispatch">查看调度</a>
              <a class="colorsixsix">接受</a>
              <a class="colorsixsix">拒绝</a>
            </div>
            <!--线上状态的取货-->
            <div class="operationA" v-show="item.ostatus === '3'">
              <a class="colorsixsix" @click="toseeDispatch">查看调度</a>
              <a class="colorsixsix" @click="topickGoodsPic">取货照片</a>
              <a class="colorLightBlue" @click="topickGoodsCode">取货码</a>
            </div>
            <!--签收-->
            <div class="operationA" v-show="item.ostatus ===  '4'">
              <a class="colorsixsix" @click="toseeDispatch">查看调度</a>
              <a class="colorsixsix">行程回放</a>
              <a class="colorLightBlue">待评价</a>
            </div>
            <!--待评价-->
            <!--<div class="operationA">-->
            <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
            <!--<a class="colorsixsix">行程回放</a>-->
            <!--<a class="colorLightBlue">待评价</a>-->
            <!--</div>-->

            <!--<a class="releaseDetailsMoreIndex">更多-->
            <!--<div class="pickGoodsBtnIndex">-->
            <!--<a @click="topickGoodsPic">取货照片</a>-->
            <!--<a @click="toseeDispatch">查看调度</a>-->
            <!--</div>-->
            <!--</a>-->


            <!--全部-->
            <!--<div class="operationA">-->
            <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
            <!--<a class="colorsixsix">接受</a>-->
            <!--<a class="colorsixsix">拒绝</a>-->
            <!--</div>-->

            <!--<div class="operationA">-->
            <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
            <!--<a class="colorsixsix">行程回放</a>-->
            <!--<a class="colorLightBlue" @click="toevaluate">评价</a>-->
            <!--</div>-->
          </div>
        </ul>
      </van-list>
    </div>
  </div>

</template>

<script>
  import {Tab, TabItem} from 'vux'

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        QueryParam: new myOrder.QueryParam(),
        page: new cstruct.Page(),
        userId: this.$app_store.getters.userId || 3,
        releaseList: [], // 订单发布列表
        total: 0,// 发布订单总条数
        loading: false,
        finished: false,
        tabList: [{
          name: '发布',
          value: 0,
          isSelected: true
        }, {
          name: '抢单',
          value: 1,
          isSelected: false
        }, {
          name: '取货',
          value: 3,
          isSelected: false
        }, {
          name: '签收',
          value: 4,
          isSelected: false
        }, {
          name: '待评价',
          value: 6,
          isSelected: false
        }, {
          name: '全部',
          value: 10,
          isSelected: false
        }]
      }
    },
    mounted() {
      // 初始化列表查询条件
      this.initQueryConditions();
      // 获取我的发布列表
      this.queryMyPublishOrder();
    },
    methods: {
      tabItemClick(item) {
        this.tabList.forEach((value,index,arr)=>{
          value.isSelected = false
        });
        item.isSelected = true;
        this.oStatus = item.value;
        // 重置搜索条件, 刷新列表

      },
      initQueryConditions() {
        // 初始化分页条件
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;

        // 初始化搜索条件
        this.QueryParam.origin = '';
        this.QueryParam.destination = '';
        this.QueryParam.time = '2018-7-28';
        this.QueryParam.pageNo = this.page.pageIndex;
        this.QueryParam.pageSize = this.page.pageSize;
      },
      // 获取我的发布列表
      queryMyPublishOrder() {
        let self = this;
        this.$Ice_myOrderService.queryMyPublishOrder(this.userId, this.QueryParam, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.releaseList = result.orderList;
              self.total = result.total;
            } else {

            }
          },
          function (error) {
            debugger
          }
        ))
      },
      onLoad() {

      },

      toreleaseDetails() {
        this.$router.push({
          path: '/center/myRelease/releaseDetails'
        })
      },
      toreleaseSearchpage() {
        this.$router.push({
          path: '/center/myRelease/releaseSearch'
        })
      },
      toseeDispatch() {
        this.$router.push({
          path: '/center/myRelease/seeDispatch'
        })
      },
      topickGoodsPic() {
        this.$router.push({
          path: '/center/myRelease/pickGoodsPic'
        })
      },
      topickGoodsCode() {
        this.$router.push({
          path: '/center/myRelease/pickGoodsCode'
        })
      },
      toevaluate() {
        this.$router.push({
          path: '/center/myRelease/evaluate'
        })
      },
    }
  }
</script>

<style>

</style>
