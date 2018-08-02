<template>
  <div class="container">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <div class="nav-bar">
      <yd-tabbar active-color="#1E90FF">
        <yd-tabbar-item :title=item.title link="#" v-for="(item,index) in activeList" :key="index"
                        @click.native="navBarClick(index)" :active="tabBarIndex === index">
          <yd-icon :name=item.name slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </div>
    <yd-popup v-model="isShowSidebar" position="left" width="73%">
      <div style="background-color:#fff;">
        <div class="centerPic">
          <div class="portrait">
            <img :src="avatar" alt="">
            <span class="logisticsMing">{{compInfo.fname}}</span>
          </div>
          <ul class="startBox">
            <li v-for="(item, index) in cLevel" :key="index"><img :src= "item" alt=""></li>
          </ul>
          <!--<div class="money">-->
            <!--<img src="../assets/images/small/jewelry.png" alt="">-->
            <!--&lt;!&ndash;<span class="yang">￥</span><span class="priceNum">0.00</span>&ndash;&gt;-->
          <!--</div>-->
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
          <li @click="toMyCircle"><i class="icon iconfont icon-quanzi marginright3"></i><span
            class="personalText circle">我的圈子</span></li>
          <li @click="toblacklist"><i class="icon iconfont icon-kttx"></i><span class="personalText">黑名单</span></li>
          <li @click="tomyInformation"><i class="icon iconfont icon-xiaoxi"></i><span class="personalText">消息</span>
          </li>
        </ul>
        <div class="settingCircleBox" @click="toSetting">
          <i class="icon iconfont icon-shezhi1"></i>
          <div class="settingCircle">设置</div>
        </div>
      </div>
    </yd-popup>
  </div>
</template>

<script>
  import {
    DICT,
    AREA,
    CURRENT_CITY, IS_SHOW_SIDEBAR, TABBAR_INDEX
  } from '../store/mutation-types'

  export default {

    // computed 计算属性
    computed: {
      isShowSidebar: {
        get: function () {
          return this.$app_store.state.isShowSidebar
        },
        set: function () {
          this.$app_store.commit(IS_SHOW_SIDEBAR, false);
        }
      },
      tabBarIndex: {
        get: function () {
          return this.$app_store.state.tabBarIndex
        },
        set: function () {
          // this.$app_store.commit(TABBAR_INDEX, this.tabIndex);
        }
      }
    },
    data() {
      return {
        score: 0,
        basicInfo: {}, // 企业LOGO 基本信息模型
        // isYourCompInfo: true,
        avatarUrl: this.$app_store.state.avatarUrl,// 头像
        status: 0, // 0 自己编辑 1 货源圈 2 调度圈  5 黑名单 6 调度 7消息
        userId: this.$app_store.getters.userId,
        cLevel:[],//设置一个空数组，接收接口企业评分
        avatar: this.$app_store.state.avatarUrl,// 头像
        transitionName: '',
        compInfo: {
          fname: '当前用户未登录'
        },
        activeList: [{
          title: '首页',
          isActive: false,
          name: 'home'
        }, {
          title: '圈子',
          isActive: false,
          name: 'discover'
        }, {
          title: '信息大厅',
          isActive: true,
          name: 'feedback'
        }, {
          title: '我的订单',
          isActive: false,
          name: 'ucenter-outline'
        }]
      }
    },
    mounted() {
    },
    activated() {
      let compId;
      this.isYourCompInfo = this.$route.query.isYourCompInfo;
      if (this.isYourCompInfo) {
        compId = this.userId;
      } else {
        // 根据企业id获取企业信息
        compId = this.$route.query.id;
        this.status = this.$route.query.status;
      }
      this.queryCompByCid(compId);
      this.queryCompByBasicUid(compId);
    },
    methods: {
      // 获取企业头像
      queryCompByBasicUid(compId) {
        let self = this;
        this.$Ice_CompService.queryCompByBasicUid(compId,
          new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.basicInfo = result.obj;
                self.score = self.basicInfo.creadit;
                self.computeLevel();
              } else {
                self.$vux.toast.text('企业认证信息获取失败, 请稍后重试', 'top');
              }
            },
            function (error) {
              self.message.Toast(this, 'warn', '企业头像获取失败', false);
            }
          )
        );
      },
      // 获取企业信息
      queryCompByCid(compId) {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              self.compInfo = result.obj
            },
            function (error) {
              self.message.Toast(this, 'warn', '企业信息获取失败', false);
            }
          )
        );
      },
      computeLevel() {
        //根据接口传过来的企业评分值来显示星星的函数
        let result = []; // 返回的是一个数组,用来遍历输出星星
        let score = Math.floor(this.score) / 2; // 计算所有星星的数量
        // let hasDecimal = score % 1 !== 0; // 非整数星星判断
        let integer = Math.floor(score); // 整数星星判断
        for (let i = 0; i < integer; i++) { // 整数星星使用on
          result.push( require('../assets/images/small/star36_on@2x.png'));
        }
        // if (hasDecimal) { // 半星
        //   result.push("half");
        // }
        while (result.length < 5) {// 余下的用无星星补全,使用off
          result.push(require('../assets/images/small/star36_off@2x.png'));
        }
        this.cLevel = result;
      },




      toDriverAmd() {
        this.$router.push({
          path: '/center/driverMgr/index'
        })
      },
      toMyCircle() {
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
      jUserInfo() {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: true    //row.hid为变量
          }
        })
      },
      toSetting() {
        this.$router.push({
          path: '/center/setting/index'
        })
      },
      todimensionalCode() {
        this.$router.push({
          path: 'home/dimensionalCode'
        })
      },
      handleActive(position) {
        this.$app_store.commit(TABBAR_INDEX, position);
      },
      navBarClick(index) {
        let path = '/';
        switch (index) {
          case 0:
            path = '/';
            break;
          case 1:
            path = '/circle';
            break;
          case 2:
            path = '/information';
            break;
          case 3:
            path = '/order';
            break;
        }
        this.handleActive(index);
        this.$router.push(path)
      },
      initBaseData() {
        let self = this;
        self.$Ice_SystemService.getBaseUnit(
          new IceCallback(
            function (result) {
              self.$app_store.commit(DICT, result);
            },
            function (error) {
              setTimeout(() => {
                self.initBaseData();
              }, 15000);
            }
          )
        );
      },
      initAreaData() {
        let self = this;
        self.$Ice_SystemService.getAreaCode(
          new IceCallback(
            function (result) {
              self.$app_store.commit(AREA, result.children);
              // localStorage.setItem("area", JSON.stringify(result.children));
            },
            function (error) {
              setTimeout(() => {
                self.initAreaData();
              }, 15000);
            }
          )
        );
      }
    }
  }
</script>
<style>
  .container {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }

  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .nav-bar {
    /*background: white;*/
    width: 100%;
    /*height: 2.2rem;*/
    position: fixed;
    bottom: 0;
  }
</style>
