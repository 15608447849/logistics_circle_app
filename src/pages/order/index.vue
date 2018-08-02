<template>
  <div>
    <div class="myReleaseBox">
      <div class="issueHeaderNav">
        <img :src="avatar" alt="" @click="avatarClick" class="loginPicture">
        <span>我的发布</span>
        <i class="icon iconfont icon-sousuo white" @click="toreleaseSearchpage"></i>
      </div>
      <div class="downfixed havedownfixed">
        <!--<div class="releaseAccept">发布订单{{total}}条</div>-->
        <div class="releaseMenu">
          <span class="releaseState" :class="{'activecircle ziTiColorBlue' : item.isSelected}" v-for="(item , index) in tabList"
                :key="index" @click.stop="tabItemClick(item)">{{item.name}}</span>
        </div>

        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <ul class="myReleaseList" v-for="(item, index) in releaseList" :key="index" @click="toReleaseDetails">
            <div class="releaseCompany">
              <div class="companyBox">
                <i class="icon iconfont icon-qiyexinxi"></i>
                <span>{{item.shipperName}}</span>
                <i class="icon iconfont icon-icon-test"></i>
              </div>
              <!--<span class="releasetext">发布</span>-->
              <span class="releasetext">{{statusToChinese(item.tstatus)}}</span>
            </div>
            <li class="address marginBottom15">
              <div class="addressList"><span>{{item.startaddr}}</span>-<span>{{item.arriaddr}}</span></div>
            </li>
            <li class="collection marginBottom15">
              <span>无代收，无保价</span>
            </li>
            <li class="specifications marginBottom15">
              <span>{{item.ctdictn}}，{{item.wm}}{{item.wmdictc}}</span>
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
              <!--重新发布 -->
              <div class="operationA" v-show="item.tstatus === 20">
                <a class="colorsixsix" @click.stop="cancelOrder(item,index)">重新发布</a>
              </div>
              <!--我的发布 -->
              <div class="operationA" v-show="item.tstatus === 0">
                <a class="colorsixsix" @click.stop="cancelOrder(item, index)">取消发布</a>
                <a class="colorsixsix" @click.stop="refreshOrder(item, index)">刷新</a>
              </div>
              <!--抢单-->
              <div class="operationA" v-show="item.tstatus === 1">
                <a class="colorsixsix" @click.stop="toComPInfo(item)">查看调度</a>
                <a class="colorsixsix" @click.stop="receiveOrder(item,index)">接受</a>
                <a class="colorsixsix" @click.stop="refuseOrder(item,index)">拒绝</a>
              </div>
              <!--线上状态的取货-->
              <div class="operationA" v-show="item.tstatus === 3">
                <a class="colorsixsix"  @click.stop="toComPInfo(item)">查看调度</a>
                <a class="colorsixsix" @click="topickGoodsPic(item)">取货照片</a>
                <a class="colorLightBlue" @click="topickGoodsCode">取货码</a>
              </div>
              <!--签收-->
              <div class="operationA" v-show="item.tstatus ===  4">
                <a class="colorsixsix"  @click.stop="toComPInfo(item)">查看调度</a>
                <a class="colorsixsix">行程回放</a>
                <a class="colorLightBlue">待评价</a>
              </div>
              <!--待评价-->
              <div class="operationA" v-show="item.tstatus ===  6">
                <a class="colorsixsix"  @click.stop="toComPInfo(item)">查看调度</a>
                <a class="colorsixsix">行程回放</a>
                <a class="colorLightBlue">待评价</a>
              </div>

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
        <div v-show="isShowNoData">
          <img src="../../assets/images/small/nodate.png"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {Tab, TabItem} from 'vux'
  import {alertContent} from "../../utils/enum";
  import {TABBAR_INDEX} from "../../store/mutation-types";
  import {IS_SHOW_SIDEBAR} from "../../store/mutation-types";

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        isShowNoData: false, // 无数据显示
        avatar: this.$app_store.state.avatarUrl,
        QueryParam: new redundancy.QueryParam(),
        page: new redundancy.Page(),
        userId: this.$app_store.getters.userId,
        releaseList: [], // 订单发布列表
        total: 0,// 发布订单总条数
        loading: false,
        finished: false,
        // 0：已发布，1：已抢单,2：已中转, 3:已取货, 4:已签收, 5：纠纷中, 6:待评价 ,7:抢单成功  8：已完成  20:取消发布
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
      this.$app_store.commit(TABBAR_INDEX, 3);
      // 初始化列表查询条件
      this.initQueryConditions();
    },
    methods: {
      statusToChinese(status) {
        let cont = '';
        switch (status) {
          case 0:
            cont = '发布';
            break;
          case 1:
            cont = '抢单';
            break;
          case 3:
            cont = '取货';
            break;
          case 4:
            cont = '签收';
            break;
          case 6:
            cont = '待评价';
            break;
          case 20:
            cont = '已关闭';
            break;
          default:
            break
        }
        return cont
      },
      tabItemClick(item) {
        this.tabList.forEach((value, index, arr) => {
          value.isSelected = false
        });
        item.isSelected = true;
        this.tstatus = item.value;
        // 重置搜索条件, 刷新列表

      },
      avatarClick() {
        this.$app_store.commit(IS_SHOW_SIDEBAR, true);
      },
      initQueryConditions() {
        // 初始化分页条件
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;

        // 初始化搜索条件
        this.QueryParam.revicompid = '';
        this.QueryParam.origin = '';
        this.QueryParam.destination = '';
        this.QueryParam.time = '';
      },
      // 跳转企业详情
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.revierid,
            status: 6
          }
        })
      },
      // 订单取消发布
      cancelOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.cancelOrder(item.orderno, self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  // 重新发布
                  self.releaseList[index].tstatus = '20';
                  self.$vux.toast.text('订单取消发布成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 刷新订单
      refreshOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.REFRESH_ORDER)
          .then(() => {
            self.$Ice_myOrderService.flushOrder(self.userId, item.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单刷新成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 接受订单
      receiveOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.RECEIVE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.receiveOrder(self.userId, item.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单接受成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 拒绝订单
      refuseOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.REFUSE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.refuseOrder(self.userId, item.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单拒绝成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 获取我的发布列表
      queryMyPublishOrder() {
        let self = this;
        this.$Ice_redundancyService.queryMyPubOrder(this.userId, this.QueryParam,this.page, new IceCallback(
          function (result) {
            self.loading = false;
            if (result.code === 0) {
              debugger
              self.QueryParam.pageNo += 1; // 页码增加
              if(result.obj !== '[]') {
                self.releaseList = self.releaseList.concat(JSON.parse(result.obj));
              } else{
                self.finished = true;
              }
              self.total = result.totalItems;
              if (self.releaseList.length >= self.total) {
                self.finished = true;
              }
            } else {
              self.finished = true;
            }
            if (self.releaseList !== null && self.releaseList.length > 0) {
              self.isShowNoData = false;
            } else {
              self.isShowNoData = true;
            }
          },
          function (error) {
            self.loading = false;
            self.finished = true;
          }
        ))
      },
      onLoad() {
        // 获取我的发布列表
        this.queryMyPublishOrder();
      },
      toReleaseDetails() {
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
      topickGoodsPic(item) {
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
