<template>
  <div class="container">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <!--页头-->
    <div class="guide" v-show="isGuide">
      <div class="cityDisplay"></div>
      <div class="guidePic">
        <!--<img src="../../assets/images/small/guide.png" alt="">-->
      </div>
      <div class="closeGuide" @click="closeGuide"></div>
    </div>
    <div class="pickCityInfo" v-show="isPickCityInfo">
      <div class="pickCityInfoBox">
        <p>请先选择您所在城市</p>
        <div class="infoCityPicBox" @click="skipCityPage">
          <input type="text" readonly="readonly" :value="cityName"/>
          <i class="icon iconfont icon-icon-test"></i>
        </div>
        <button class="cityPicBtn" @click="confirmCity">确定</button>
      </div>
    </div>
    <div class="nav-bar">
      <!--<yd-tabbar active-color="#1E90FF">-->
        <!--<yd-tabbar-item :title=item.title link="#" v-for="(item,index) in activeList" :key="index"-->
                        <!--@click.native="navBar不Click(index)" :active="tabBarIndex === index">-->
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
            <span class="logisticsMing">{{subStr(compName, 10)}}</span>
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
          <li @click="toMyRelease">
            <i class="icon iconfont icon-jieshoulianmai"></i>
            <span class="personalText" style="margin-left:-.07rem;">我的接受</span>
          </li>
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
    <van-popup v-model="popShow">
      <p class="placePickCity">请选择城市</p>
      <!--<div class="defaultCity">默认城市:北京市</div>-->
      <div class="placePicBtn">
        <van-cell-group>
           <van-cell title="默认城市:" is-link value="长沙市" />
        </van-cell-group>
        <div class="tishiyu">首页、圈子订单会根据订单目的地或出发地所在城市默认筛选</div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import {
    DICT,
    AREA,
    CITYS,
    CURRENT_CITY, IS_SHOW_SIDEBAR, TABBAR_INDEX, AVATAR_URL, CITY_CODE, CURRENT_CITY_CODE
  } from '../store/mutation-types'
  import { subString } from '../utils/stringUtil'
  import { Toast } from 'vant';

  export default {
    computed: {
      isShowSidebar: {
        get: function () {
          this.isUnreadMsg();
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
        popShow: false,
        isNewMsg:true,// 是否有新的消息
        cLevel: [],// 认证等级
        avatar: '',// 头像
        compName: '',// 企业名
        transitionName: '',
        compInfo: null,
        userId: '',
        active: 1,
        cityInfo: {},
        isGuide: false,
        isPickCityInfo: false,
        cityName: '长沙市',
      }
    },
    activated() {
      // 从本地获取所在城市
      this.initLocatingCity();
      this.userId = this.$app_store.getters.userId;
      this.compInfo = JSON.parse(this.$app_store.state.compInfo);
      if(this.compInfo !== undefined && this.compInfo !== null) {
        this.compName = this.compInfo.fname;
        this.avatar = this.compInfo.logoPath;
        this.$app_store.commit(AVATAR_URL,this.avatar);
        this.computeLevel();
      } else {
        this.avatar = require('../assets/images/small/avatar.png');
      }
    },
    mounted() {
      // 从本地获取所在城市
      this.initLocatingCity();
      // 是否有新的消息
      this.isUnreadMsg();
      // 初始化数据
      this.initData();

    },
    methods: {
      initData() {
        // 判断本地是否存在基础字典数据
        if(this.$app_store.state.dict === undefined) {
          // 初始化基础数据字典
          this.initBaseData();
        }
        if(this.$app_store.state.area === undefined) {
          // 初始化地区
          this.initAreaData();
        }
        if(this.$app_store.state.citys === undefined) {
          // 初始化城市列表
          this.initAreaH5Data();
        }
        // 判断字典是否具有更新
      },
      initLocatingCity() {
        // 获取当前城市 如无: 弹出所在城市选择框
        let info =  localStorage.getItem('cityInfo') || null;
        if(info !== null) {
          this.cityInfo = JSON.parse(info);
          this.$app_store.commit(CURRENT_CITY_CODE,this.cityInfo.cityCode);
          this.$app_store.commit(CURRENT_CITY, this.cityInfo.currentCity);
          this.$app_store.commit(CITY_CODE, this.cityInfo.cityCode);
          return
        }
        this.isGuide = false;
        // 弹出框让用户选择所在地
        this.isPickCityInfo = true
      },
      tabItemClick(index) {
        this.active = index
      },
      isUnreadMsg() {
        // 查询个人消息模块内是否有新的信息
        let self = this;
        this.$Ice_MessageService.isUnreadMsg(self.userId,new IceCallback(
          function(result){
            if(result._args[0] > 0) {
              self.isNewMsg = false;
            }else {
              self.isNewMsg = true;
            }
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
      confirmCity() {
        this.isPickCityInfo = false;
        let obj = {
          currentCity: '长沙市',
          cityCode: 104301
        };
        localStorage.setItem('cityInfo',JSON.stringify(obj));

      },
      initAreaData() {
        let self = this;
        self.$Ice_SystemService.getAreaCode(
          new IceCallback(
            function (result) {
              if(result.code === 0) {
                self.$app_store.commit(AREA, JSON.stringify(result.data.children));
              }
            },
            function (error) {
              setTimeout(() => {
                self.initAreaData();
              }, 15000);
            }
          )
        );
      },
      initAreaH5Data() {
        let self = this;
        self.$Ice_SystemService.getAreaH5Data(
          new IceCallback(
            function (result) {
              if(result.code === 0) {
                // 处理城市数据
                self.initCityList(0,result.obj).then((resolve) => {
                  console.log('数据开始过滤' + new Date());
                  // 城市列表数据过滤
                  let countyList = [];// 区县列表
                  for(let i=0;i<resolve.length;i++) {
                    for(let j=0;j<resolve[i].items.length;j++) {
                      if(resolve[i].items[j].value.length > 6) {
                        countyList.push(resolve[i].items[j]);
                        // 移除区县
                        resolve[i].items.splice(j,1);
                        j--;
                      }
                    }
                  }

                  for(let i=0 ;i<resolve.length;i++) {
                    for(let j=0;j<resolve[i].items.length;j++) {
                      resolve[i].items[j].children =[];
                      let value = resolve[i].items[j].value;
                      for(let k=0;k<countyList.length;k++) {
                        if(countyList[k].value.slice(0,6) === value) {
                          resolve[i].items[j].children.push(countyList[k]);
                        }
                      }
                    }
                  }
                  self.$app_store.commit(CITYS, JSON.stringify(resolve) );
                  self.$nextTick(function(){
                    console.log('数据渲染完毕拉~' + new Date());
                    Toast.clear();
                  });
                });
              }
            },
            function (error) {
              setTimeout(() => {
                self.initAreaH5Data();
              }, 15000);
            }
          )
        );
      },
      initCityList(ms,cityList) {
        Toast.loading({
          mask: true,
          message: '加载中...'
        });
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(JSON.parse(cityList));
          },ms);
        });
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
      subStr: function (str, len) {
        return subString(str, len)
      },
      toDriverAmd() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/center/driverMgr/index'
          })
        }
      },
      // 业务员管理
      toSalesManage() {
        if(this.isUserOutService()) {
          this.$router.push({
            name: 'salesManages'
          })
        }
      },
      toMyCircle() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/center/myCircle/index'
          })
        }
      },
      toMyRelease() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/order/acceptOrders'
          })
        }
      },
      tocommonlyRoute() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/center/commonlyRoute/index'
          })
        }
      },
      toblacklist() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/center/blacklist/index'
          })
        }
      },
      tomyInformation() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/center/myInformation/index'
          })
        }
      },
      jUserInfo() {
        if(this.isUserOutService()) {
          this.$router.push({
            path: '/userInfo',
            query: {
              isYourCompInfo: true,    //row.hid为变量
            }
          })
        }
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
      skipCityPage() {
        this.isGuide = true;
        this.isPickCityInfo = false;

        this.$router.push({
          path: '/city',
          query: {
            status: 0,
            // cityInfo:
          }
        })
      },
      // 判断当前用户是否停用
      isUserOutService() {
        let cStatus = Number(this.$app_store.state.cstatus);
        if(cStatus !== 0) {
          Toast.fail('账号已停用');
          return false
        }
        return true
      },
      closeGuide() {
        this.isGuide = false;
      }
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
