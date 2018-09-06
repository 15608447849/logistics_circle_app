<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <!--<img src="../../assets/images/small/快速发单@2x.png" alt="" @click="avatarClick" class="loginPicture floatleft" v-if="avatar !== ''">-->
        <!--<img src="../../assets/images/small/已抢订单@2x.png" alt="" @click="avatarClick" class="loginPictureDefault floatleft" v-if="avatar === ''">-->
        <img :src="isAvatar" alt="" @click="avatarClick" class="loginPicture floatleft" v-if="isAvatar !== ''">
        <img src="../../assets/images/small/moren.png" alt="" @click="avatarClick" class="loginPictureDefault floatleft" v-if="isAvatar === ''">
      </div>
      <div class="width60">
        <span>首页</span>
      </div>
      <!--<i class="icon iconfont icon-jibenxinxi1" @click="show4 = true"></i>-->
      <div class="width20">
        <i class="icon iconfont icon-gengduo1 dropdowngengduo colorWhite floatright displayNone"></i>
      </div>

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
    </div>
    <div class="homeContent">
      <div class="searchBox">
        <div class="selectRegion" @click="skipSearchPage">
          <div class="addressCity" @click.stop="skipCityPage">
            <span class="cityName">{{address}}</span>
          </div>
          <i class="icon iconfont icon-xiala cityNameI"></i>
          <div class="searchBtn">
            <i class="icon iconfont icon-sousuo magnifierziti cityNameF"></i>
            <input type="text" :value="key" class="cityInput" placeholder="请输入关键词搜索订单">
          </div>
          <i class="icon iconfont icon-guanbi floatright lineHeight64 marginright13" @click.stop ="cleanKey()"></i>
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
            <span @click="skipOrder">我的发布</span>
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
        <li class="pickGoods">
          <img src="../../assets/images/small/goods.png" alt="">
          <span>精选好单</span>
        </li>
        <li class="order_list" @click="toPageIssueDetail(item)" v-for="(item,index) in infoList" :key="index">
          <div class="order_time">
            <span class="site">{{changeStrRed(item.startAddr)}}</span>
            <span class="site">—</span>
            <span class="site">{{changeStrRed(item.destAddr)}}</span>
            <span class="time">{{dateConversion(item.time)}}</span></div>
          <div class="order_price"><span class="carWeight">{{changeStrRed(item.goodsType)}}</span><span
            class="carWeight"></span><span
            class="carWeight">{{changeStrRed(item.vt)}}</span><span class="carWeight">{{changeStrRed(item.wm)}}</span><span class="total_price">￥{{changeStrRed(item.cost)}}元</span>
          </div>
        </li>
        <div v-show="isShowNoData" class="noDataBoxIndex">
          <img src="../../assets/images/small/nodate.png"/>
        </div>
      </ul>
    </div>
    <div class="seeMore" v-show="!isShowMore" @click="skipInformation">查看更多</div>
  </div>
</template>
<script>
  import {
    IS_SHOW_SIDEBAR, SEARCH_CONTENT,
    SEARCH_STATE, TABBAR_INDEX
  } from '../../store/mutation-types'
  import {searchState} from "../../utils/config";
  import Conversion from '@/utils/conversion';

  export default {
    computed: {
      isAvatar: {
        get: function () {
          return this.$app_store.state.avatar
        },
        set: function () {
          // this.$app_store.commit(IS_SHOW_SIDEBAR, false);
        }
      }
    },
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: '', // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        isMember: true,
        direction: '',
        tipStyle: '',
        oid: '0',
        isShowMore: false, // 显示更多
        isShowNoData: false// 无数据
      }
    },
    activated() {
      // 搜索框搜索内容
      if (this.$app_store.getters.searchState === searchState.INFORMATION) {
        this.key = this.$app_store.getters.searchContent;
      }

      if(this.address !== this.$app_store.state.currentCity) {
        this.address =  this.$app_store.state.currentCity;
      }
      this.requestInfoList();
    },
    mounted() {
      setTimeout(() => {
        this.$app_store.commit(TABBAR_INDEX,0);
        this.oid = this.$app_store.getters.userId || '0';
        // 搜索框搜索内容
        if (this.$app_store.getters.searchState === searchState.INFORMATION) {
          this.key = this.$app_store.getters.searchContent;
        }
        if(this.address !== this.$app_store.state.currentCity) {
          this.address =  this.$app_store.state.currentCity;
        }
        if (this.address === '') {
          this.address = '长沙市'
        }
        this.requestInfoList();
      },50);
    },
    methods: {
      requestInfoList() {
        let self = this;
        this.$Ice_OrderService.queryOrderByApp(self.oid, self.pageSize, self.address, self.key, 1, this.endTimeStr,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.$vux.toast.text(result.msg, 'top');
                return
              }
              self.infoList = result.obj;
            }, function (err) {

            }
          ))
      },
      // 搜索条件标红
      changeStrRed(str) {
        // 是否包含h2
        if(str.match(RegExp(/<h2>/))) {
          // 获取字符串中内容
          let strA = str;
          str = str.match(/<h2>(\S*)<\/h2>/)[1];
          // 清除str中标签
          strA= strA.replace("<h2>","").replace("</h2>","");
          let regA = new RegExp("(" + str + ")", "g");
          return strA.replace(regA, "$1");
        }
        return str
      },
      skipOrder() {
        this.$router.push({
          path: '/order',
          query: {
            status: 0
          }
        })
      },
      skipInformation() {
        this.$router.push({
          path: '/information',
          query: {
            status: 0
          }
        })
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
          path: '/information/releaseDetails',
          query: {
            id: item.id,
            puberid: item.puberid,
            pubercompid: item.pubercompid,
            ostatus: item.ostatus
          }
        })
      },
      toPageIssue() {
        this.$router.push({
          path: '/information/releaseOrders',
          query: {
            status: 0
          }
        })
      },
      avatarClick() {
        // 验证登录
        if (this.$app_store.state.userId) {
          this.$app_store.commit(IS_SHOW_SIDEBAR, true);
        }else {
          this.$router.push({
            path: '/login'
          })
        }
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
      },
      cleanKey() {
        // 清空关键词
        this.key = '';
        // 清空STORE 中保存的搜索内容
        this.$app_store.commit(SEARCH_CONTENT, '');
        this.requestInfoList();
      }
    },
    watch: {
      infoList: {
        handler: function (newVal) {
          if(newVal === undefined) {
            return
          }
          if(newVal.length === 0) {
            this.isShowNoData = true
          } else  {
            this.isShowNoData = false
          }
          if(newVal.length >= 9) {
            this.isShowMore = true
          }
        },
        deep: true
      }
    }
  }
</script>
<style>
</style>
