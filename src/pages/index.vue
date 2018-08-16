<template>
  <div class="container">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <div class="nav-bar">
      <!--<yd-tabbar active-color="#1E90FF">-->
        <!--<yd-tabbar-item :title=item.title link="#" v-for="(item,index) in activeList" :key="index"-->
                        <!--@click.native="navBarClick(index)" :active="tabBarIndex === index">-->
          <!--<yd-icon :name=item.name slot="icon" size="0.54rem"></yd-icon>-->
        <!--</yd-tabbar-item>-->
      <!--</yd-tabbar>-->
      <van-tabbar v-model="tabBarIndex" style="height:7vh;">
        <van-tabbar-item icon="wap-home" @click="tabItemClick(0)">首页</van-tabbar-item>
        <van-tabbar-item icon="chat" @click="tabItemClick(1)">信息大厅</van-tabbar-item>
        <van-tabbar-item icon="exchange-record" @click="tabItemClick(2)">圈子</van-tabbar-item>
        <van-tabbar-item icon="records" @click="tabItemClick(3)">订单</van-tabbar-item>
      </van-tabbar>
    </div>
    <yd-popup v-model="isShowSidebar" position="left" width="73%">
      <div style="background-color:#fff;">
        <div class="centerPic">
          <div class="portrait">
            <img :src="isAvatar" alt="" v-if="isAvatar !== ''">
            <img src="../assets/images/small/moren.png" alt="" class="loginPictureDefaultUser widthHeight140 floatleft" v-if="isAvatar === ''">
            <span class="logisticsMing">{{compName}}</span>
          </div>
          <ul class="startBox">
            <li v-for="(item, index) in cLevel" :key="index"><img :src= "item" alt=""></li>
          </ul>
          <!--<div class="money">-->
          <!--<img src="../assets/images/small/jewelry.png" alt="">-->
          <!--<span class="yang">￥</span><span class="priceNum">0.00</span>-->
          <!--</div>-->
        </div>
        <ul class="personalList">
          <li @click="jUserInfo"><i class="icon iconfont icon-jibenxinxi1"></i><span class="personalText">基本信息</span>
          </li>
          <li @click="toDriverAmd"><i class="icon iconfont icon-sijiguanli"></i><span class="personalText">司机管理</span>
          </li>
          <li @click="toSalesManage"><i class="icon iconfont icon-yewuyuan"></i><span class="personalText">业务员管理</span>
          </li>
          <li @click="tocommonlyRoute"><i class="icon iconfont icon-xianlu"></i><span class="personalText">常用线路</span>
          </li>
          <!--<li @click="toMyRelease"><i class="icon iconfont icon-fabu1"></i><span class="personalText">我的发布</span></li>-->
          <li @click="toMyRelease"><i class="icon iconfont icon-jieshoulianmai"></i><span class="personalText">我的接受</span></li>
          <li @click="toMyCircle">
            <i class="icon iconfont icon-quanzi marginright3" style="margin-right:.3rem;"></i><span
            class="personalText circle">我的圈子</span></li>
          <li @click="toblacklist"><i class="icon iconfont icon-kttx" style="margin-right:.25rem;"></i><span class="personalText">黑名单</span></li>
          <li @click="tomyInformation">
            <i class="icon iconfont icon-xiaoxi" style="margin-right:.18rem;"></i>
            <span class="personalText">消息</span>
            <i class="redSpot"  v-show="!isNewMsg"></i>
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
    CURRENT_CITY, IS_SHOW_SIDEBAR, TABBAR_INDEX, AVATAR_URL
  } from '../store/mutation-types'

  export default {
    computed: {
      isShowSidebar: {
        get: function () {
          return this.$app_store.state.isShowSidebar
        },
        set: function () {
          this.$app_store.commit(IS_SHOW_SIDEBAR, false);
        }
      },
      isAvatar: {
        get: function () {
          return this.$app_store.state.avatar
        },
        set: function () {
          // this.$app_store.commit(IS_SHOW_SIDEBAR, false);
        }
      },
      tabBarIndex: {
        get: function () {
          this.active = this.$app_store.state.tabBarIndex;
          return this.$app_store.state.tabBarIndex
        },
        set: function () {
          this.$app_store.commit(TABBAR_INDEX, this.active);
        }
      }
    },
    data() {
      return {
        isNewMsg:true,// 是否有新的消息
        cLevel: [],// 认证等级
        avatar: '',// 头像
        compName: '',// 企业名
        compId: '',
        transitionName: '',
        compInfo: null,
        userId: this.$app_store.getters.userId,
        active: 1
      }
    },
    activated() {
      this.compId = this.$app_store.getters.compId;
      this.compInfo = JSON.parse(this.$app_store.state.compInfo);

      if(this.compInfo !== undefined && this.compInfo !== null) {
        this.compName = this.compInfo.fname;
        this.avatar = this.compInfo.logoPath;
        this.$app_store.commit(AVATAR_URL,this.avatar);
        this.computeLevel();
        console.log(this.compName);
      } else {
        this.avatar = require('../assets/images/small/avatar.png');
      }
    },
    mounted() {
      // 获取当前定位城市
      this.$app_store.commit(CURRENT_CITY, '长沙');
      this.isUnreadMsg();// 是否有新的消息
      this.initBaseData();
      this.initAreaData();
    },
    methods: {
      tabItemClick(index) {
        console.log(index)
        this.active = index
      },
      isUnreadMsg() {
        // 查询个人消息模块内是否有新的信息
        let self = this;
        this.$Ice_MessageService.isUnreadMsg(self.userId,new IceCallback(
          function(result){
            self.isNewMsg = result.__state;
            self.isNewMsg = false;
        },function(error){
          //失败

        }))

      },
      initBaseData() {
        let self = this;
        self.$Ice_SystemService.getBaseUnit(
          new IceCallback(
            function (result) {
              if(result.code === 0) {
                self.$app_store.commit(DICT, JSON.stringify(result.data));
              } else {
                self.$vux.toast.text('货物类型获取失败', 'top');
              }


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
              self.$app_store.commit(AREA, JSON.stringify(result.children));
              // localStorage.setItem("area", JSON.stringify(result.children));
            },
            function (error) {
              setTimeout(() => {
                self.initAreaData();
              }, 15000);
            }
          )
        );
      },
      computeLevel() {
        let result = []; // 返回的是一个数组,用来遍历输出星星
        let score = Math.floor(this.compInfo.creadit) / 2; // 计算所有星星的数量
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
      // 业务员管理
      toSalesManage() {
        this.$router.push({
          name: 'salesManages'
        })
      },
      toMyCircle() {
        this.$router.push({
          path: '/center/myCircle/index'
        })
      },
      toMyRelease() {
        this.$router.push({
          path: '/order/acceptOrders'
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
            isYourCompInfo: true,    //row.hid为变量
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
      // navBarClick(index) {
      //   let path = '/';
      //   switch (index) {
      //     case 0:
      //       path = '/';
      //       break;
      //     case 1:
      //       path = '/information';
      //       break;
      //     case 2:
      //       path = '/circle';
      //       break;
      //     case 3:
      //       path = '/order';
      //       break;
      //   }
      //   this.handleActive(index);
      //   this.$router.push(path)
      // },
    },
    watch: {
      active(newActive, oldActive) {
        let path = '/';
        switch (newActive) {
          case 0:
            path = '/';
            break;
          case 1:
            path = '/information';
            break;
          case 2:
            path = '/circle';
            break;
          case 3:
            path = '/order';
            break;
        }
        this.handleActive(newActive);
        this.$router.push(path)
      }
    }
  }
</script>
<style>
  .container {
    position:relative;
    top:0rem;
    left:0rem;
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
