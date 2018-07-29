<template>
  <div>
    <!--页头-->
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/evaluate_03.png" alt="" @click="show4 = true" class="loginPicture">
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
    <div class="searchBox">
      <div class="selectRegion" @click="skipSearchPage">
        <div class="addressCity">
          <span>长沙</span>
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
    <yd-popup v-model="show4" position="left" width="73%">
      <div style="background-color:#fff;">
        <div class="centerPic">
          <div class="portrait">
            <img src="../../assets/images/small/aaaaaaa.png" alt="">
            <span class="logisticsMing">{{compInfo.fname}}</span>
          </div>
          <ul class="startBox">
            <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
            <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
            <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
            <li><img src="../../assets/images/small/star36_on@2x.png" alt=""></li>
            <li><img src="../../assets/images/small/star36_off@2x.png" alt=""></li>
          </ul>
          <div class="money">
            <img src="../../assets/images/small/jewelry.png" alt="">
            <span class="yang">￥</span><span class="priceNum">0.00</span>
          </div>
        </div>
        <ul class="personalList">
          <li @click="jUserInfo"><i class="icon iconfont icon-jibenxinxi1"></i><span class="personalText">基本信息</span>
          </li>
          <li @click="toDriverAmd"><i class="icon iconfont icon-sijiguanli"></i><span class="personalText">司机管理</span>
          </li>
          <li @click="tocommonlyRoute"><i class="icon iconfont icon-xianlu"></i><span class="personalText">常用线路</span>
          </li>
          <li @click="toMyRelease"><i class="icon iconfont icon-fabu1"></i><span class="personalText">我的发布</span></li>
          <li><i class="icon iconfont icon-jieshoulianmai"></i><span class="personalText">我的接受</span></li>
          <li @click="toMycircle"><i class="icon iconfont icon-quanzi marginright3"></i><span
            class="personalText circle">我的圈子</span></li>
          <li @click="toblacklist"><i class="icon iconfont icon-kttx"></i><span class="personalText">黑名单</span></li>
          <li @click="tomyInformation"><i class="icon iconfont icon-xiaoxi"></i><span class="personalText">消息</span>
          </li>
        </ul>
        <div class="settingCircleBox" @click="tosetting">
          <i class="icon iconfont icon-shezhi1"></i>
          <div class="settingCircle">设置</div>
        </div>
      </div>
    </yd-popup>
  </div>

</template>
<script>
  import {
    SEARCH_STATE
  } from '../../store/mutation-types'
  import {searchState} from "../../utils/config";
  import Conversion from '@/utils/conversion';

  export default {
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: '', // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        show4: false,
        isMember: true,
        direction: '',
        tipStyle: '',
        compInfo: {
          fname: '当前用户未登录'
        },
        // 信息大厅数据

      }
    },
    mounted() {
      if (this.$app_store.getters.compInfo !== null) {
        this.compInfo = this.$app_store.getters.compInfo;
      }
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        let self = this;
        this.$Ice_OrderService.queryOrderByApp('0', self.pageSize, self.address, self.key, 1, this.endTimeStr,
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
          path: '/information/issue'
        })
      },
      toLogin() {
        this.$router.push({path: '/login'})
      },
      toRegister() {
        this.$router.push({path: '/register'})
      },
      toPageGeo() {
        this.$router.push({path: '/geo'})
      },
      toPagePickerTest() {
        this.$router.push({path: '/picker'})
      },
      toTest() {
        this.$router.push({path: '/test'})
      },
      toPageInfoTest() {
        this.$router.push({path: '/infoTest'})
      },
      jUserInfo() {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: true    //row.hid为变量
          }
        })
      },
      toDriverAmd() {
        this.$router.push({
          path: '/center/driverMgr/index'
        })
      },
      toMycircle() {
        this.$router.push({
          path: '/center/myCircle/index'
        })
      },
      toMyRelease() {
        this.$router.push({
          path: '/center/myRelease/index'
        })
      },
      tocommonlyRoute() {
        this.$router.push({
          path: '/center/commonlyRoute/index'
        })
      },
      toblacklist() {
        this.$router.push({
          path: '/center/blacklist/index'
        })
      },
      tomyInformation() {
        this.$router.push({
          path: '/center/myInformation/index'
        })
      },
      tosetting() {
        this.$router.push({
          path: '/center/setting/index'
        })
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
