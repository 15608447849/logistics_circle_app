<template>
  <div>
    <!--页头-->
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/evaluate_03.png" alt="" @click="avatarClick" class="loginPicture">
      <!--<i class="icon iconfont icon-jibenxinxi1" @click="show4 = true"></i>-->
      <span>首页</span>
      <span class="icon iconfont icon-gengduo1 dropdowngengduo">
        <ul class="dropdown" v-show="!isMember">
            <li @click="todimensionalCode">
              <i class="icon iconfont icon-erweima"></i>
              <span>我的二维码</span>
            </li>
            <li @click="toScan">
              <i class="icon iconfont icon-saoyisao"></i>
              <span>扫一扫</span>
            </li>
            <li>
              <i class="icon iconfont icon-iconset0206"></i>
              <span>邀请有礼</span>
            </li>
        </ul>
      </span>
    </div>
    <div class="downfixed havedownfixed">
      <div class="searchBox">
        <div class="selectRegion" @click="skipSearchPage">
          <div class="addressCity" @click.stop="skipCityPage">
            <span>{{address}}</span>
            <i class="icon iconfont icon-xiala"></i>
          </div>
          <div class="searchBtn">
            <i class="icon iconfont icon-sousuo"></i>
            <span class="sousuo">搜索</span>
          </div>
        </div>
      </div>
      <div class="orderOperation">
        <div class="banner">
          <img src="../../assets/images/small/banner@2x.png" alt="">
        </div>
        <div class="fastSendRob">
          <div class="sendOrder">
            <img src="../../assets/images/small/快速发单@2x.png" alt="">
            <span @click="toPageIssue">快速发单</span>
          </div>
          <div class="already">
            <img src="../../assets/images/small/已抢订单@2x.png" alt="">
            <span>我的发布</span>
          </div>
        </div>
      </div>
      <!--<ul class="order_boxIndex">-->
      <!--<li class="order_list">-->
      <!--<div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span-->
      <!--class="time">1小时前</span></div>-->
      <!--<div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span-->
      <!--class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>-->
      <!--</li>-->
      <!--</ul>-->
      <ul class="order_boxIndex">
        <li class="order_list" @click="toPageIssueDetail(item)" v-for="(item,index) in infoList" :key="index">
          <div class="order_time"><span class="site">{{item.startAddr}}</span><span class="site">—</span><span
            class="site">{{item.destAddr}}</span><span class="time">{{dateConversion(item.time)}}</span></div>
          <div class="order_price"><span class="carWeight">{{item.goodsType}}</span><span
            class="carWeight"></span><span
            class="carWeight">{{item.vt}}</span><span class="carWeight">{{item.wm}}</span><span class="total_price">￥{{item.cost}}元</span>
          </div>
        </li>
      </ul>
      <div class="seeMore">查看更多</div>
    </div>
  </div>

</template>
<script>
  import {
    IS_SHOW_SIDEBAR,
    SEARCH_STATE, TABBAR_INDEX
  } from '../../store/mutation-types'
  import {searchState} from "../../utils/config";
  import Conversion from '@/utils/conversion';

  export default {
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: this.$app_store.getters.currentCity, // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        isMember: true,
        direction: '',
        tipStyle: '',
        oid: this.$app_store.getters.userId || 3
        // 信息大厅数据
      }
    },
    mounted() {
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        let self = this;
        this.$Ice_OrderService.queryOrderByApp(self.oid, self.pageSize, self.address, self.key, 1, this.endTimeStr,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.message.Toast(self, 'error', result.msg, false);
                return
              }
              self.infoList = result.obj;
            }, function (err) {

            }
          ))
      },
      skipSearchPage() {
        this.$app_store.commit(SEARCH_STATE, searchState.INFORMATION);
        this.$router.push({
          path: '/search'
        })
      },
      skipCityPage() {
        this.$router.push({
          path: '/city',
          query: {
            status: 0
          }
        })
      },
      toPageIssueDetail(item) {
        this.$router.push({
          path: '/information/issueDetails',
          query: {
            id: item.id,
            puberid: item.puberid,
            pubercompid: item.pubercompid
          }
        })
      },
      toPageIssue() {
        this.$router.push({
          path: '/information/issue',
          query: {
            status: 0
          }
        })
      },
      avatarClick() {
        this.$app_store.commit(IS_SHOW_SIDEBAR, true);
      },
      todimensionalCode() {
        this.$router.push({
          path: 'home/dimensionalCode'
        })
      },
      toScan() {
        this.$router.push({
          path: 'home/scan'
        })
      },
      dateConversion(time) {
        return Conversion.formatMsgTime(time)
      }
    }
  }
</script>
<style>
</style>
