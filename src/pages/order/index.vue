<template>
  <div>
    <div class="myReleaseBox">
      <div class="issueHeaderNav">
        <div class="width20">
          <img :src="isAvatar" alt="" @click="avatarClick" class="loginPicture floatleft" v-if="isAvatar !== ''">
          <img src="../../assets/images/small/moren.png" alt="" @click="avatarClick"
               class="loginPictureDefault floatleft" v-if="isAvatar === ''">
        </div>
        <div class="width60">
          <span>我的发布</span>
        </div>
        <div class="width20" @click="showPicker">
          <i class="orderTime">{{QueryParam.year}}年</i>
          <i class="icon iconfont icon-xiala sanjiao"></i>
        </div>
        <!--<i class="icon iconfont icon-sousuo white" @click="toreleaseSearchpage"></i>-->
      </div>
      <!--<div class="releaseAccept">发布订单{{total}}条</div>-->
      <div class="releaseMenu">
          <span class="releaseState" :class="{'activecircle ziTiColorBlue' : item.isSelected}"
                v-for="(item , index) in tabList"
                :key="index" @click.stop="tabItemClick(item)">{{item.name}}</span>
      </div>
      <div class="orderList">
        <!--<div v-show="isShowNoData" class="noDataBox">-->
        <!--<img src="../../assets/images/small/nodate.png"/>-->
        <!--</div>-->
        <van-list
          style="margin-top:7vh;"
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <ul class="myReleaseList" v-for="(item, index) in releaseList" :key="index" @click="toReleaseDetails(item)">
            <div class="releaseCompany">
              <div class="companyBox">
                <i class="icon iconfont icon-qiyexinxi"></i>
                <span>{{strSub(fName,14) }}</span>
                <i class="icon iconfont icon-icon-test"></i>
              </div>
              <!--<span class="releasetext">发布</span>-->
              <span class="releasetext">{{statusToChinese(item.tstatus)}}</span>
            </div>
            <li class="address marginBottom15">
              <div class="addressList">
                <span>{{addressSubStr(item.startn)}}</span>-<span>{{addressSubStr(item.arriarn)}}</span></div>
            </li>
            <li class="collection marginBottom15">
              <span>{{showCodamt(item.codamt,item.insureamt)}}</span>
            </li>
            <li class="specifications marginBottom15">
              <span>{{item.ctdictn}}，{{item.wm}}{{item.wmdictn}}</span>
            </li>

            <li class="pickGoods marginBottom15">
              <div>
                <span v-show="item.pusdate !== ''">取货时间：</span>
                <span>{{item.pusdate}}</span><span> {{item.pustime}}</span>
              </div>
              <!--<span class="underPay">线下付款</span>-->
              <!--线上付款-->
              <span class="underPay">{{item.ptdictn}}</span>
            </li>
            <li class="goodsTotalPrice">
              <div></div>
              <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span
                class="yangNum">{{item.carriage}}</span></div>
            </li>
            <div class="cancelRefres">
              <div class="operationA">
                <!--刷新-->
                <a v-show="item.tstatus === 0" class="colorsixsix" @click.stop="refreshOrder(item, index)">刷新</a>
                <!--取消-->
                <a v-show="item.tstatus === 0" class="colorsixsix" @click.stop="cancelOrder(item, index)">取消</a>
                <!--接受-->
                <a v-show="item.tstatus === 1" class="colorsixsix" @click.stop="receiveOrder(item,index)">接受</a>
                <!--拒绝-->
                <a v-show="item.tstatus === 1" class="colorsixsix" @click.stop="refuseOrder(item,index)">拒绝</a>
                <!--取货照片-->
                <a v-show="item.tstatus === 3 || item.tstatus === 4 || item.tstatus === 8"
                   class="colorsixsix" @click.stop="toPickGoodsPic(item,0)">取货照片</a>
                <!-- 支付 -->
                <!--<a v-show="item.tstatus === 7 && item.ptdictc === 21" class="colorLightBlue"-->
                   <!--@click.stop="OrderPay()">支付</a>-->
                <!--取货码-->
                <a v-show="item.tstatus === 7" class="colorLightBlue"
                   @click.stop="toPickGoodsCode(item.orderno)">取货码</a>
                <a v-show="item.tstatus === 7 || item.tstatus === 6 " class="colorsixsix"
                   @click.stop="toComPInfo(item)">查看调度</a>
                <!--查看行程-->
                <a
                  v-show="item.tstatus === 2 ||item.tstatus === 3 || item.tstatus === 4 || item.tstatus === 6 || item.tstatus === 8"
                  class="colorsixsix" @click.stop="toSchedulePlayBack(item)">行程回放</a>
                <!--签收照片-->
                <a v-show="item.tstatus === 4 || item.tstatus === 8" class="colorsixsix"
                   @click.stop="toPickGoodsPic(item,1)">签收照片</a>
                <!--确认签收-->
                <a v-show="item.tstatus === 4" class="colorLightBlue"
                   @click.stop="conReceipt(item.orderno,index)">确认签收</a>
                <!--评价-->
                <!--<a v-show="item.tstatus === 6" class="colorLightBlue" @click.stop="toEvaluatePage(item)">待评价</a>-->
                <a v-show="item.tstatus === 6" class="colorLightBlue" @click.stop="toEvaluatePage(item)">待评价</a>
                <!--重新发布-->
                <a v-show="item.tstatus === 20" @click.stop="repubOrder(item.orderno,index)"
                   class="colorLightBlue">重新发布</a>
              </div>
            </div>
          </ul>
        </van-list>
      </div>
    </div>
  </div>

</template>

<script>
  import {Tab, TabItem} from 'vux'
  import {alertContent} from "../../utils/enum";
  import {TABBAR_INDEX} from "../../store/mutation-types";
  import {IS_SHOW_SIDEBAR} from "../../store/mutation-types";
  import {subString} from "../../utils/stringUtil"
  import { Toast } from 'vant';
  export default {
    components: {
      Tab,
      TabItem
    },
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
        year: '',
        index: '0',
        col1Data: [],
        fName: '',
        isShowNoData: false, // 无数据显示
        QueryParam: new redundancy.QueryParam(),
        page: new redundancy.Page(),
        userId: '',
        releaseList: [], // 订单发布列表
        total: 0,// 发布订单总条数
        loading: false,
        finished: false,
        // 0 发布 1/2 抢单 3 取货 4 5 签收  6 待评价 8 评价 20 取消
        tabList: [{
          name: '发布',
          value: '0',
          isSelected: true
        }, {
          name: '抢单',
          value: '1',
          isSelected: false
        }, {
          name: '取货',
          value: '3',
          isSelected: false
        }, {
          name: '签收',
          value: '4',
          isSelected: false
        }, {
          name: '待评价',
          value: '6',
          isSelected: false
        }, {
          name: '全部',
          value: '',
          isSelected: false
        }]
      }
    },
    mounted() {
      this.initData();
    },
    activated() {
      if(this.$route.meta.isUseCache){
        this.$route.meta.isUseCache = false;
        // 啥也不动
      }else {
        this.initData();
      }
    },
    methods: {
      initData() {
        this.userId = this.$app_store.getters.userId;
        this.releaseList = [];
        // 初始化列表查询条件
        this.fName = JSON.parse(this.$app_store.state.compInfo).fname;
        this.$app_store.commit(TABBAR_INDEX, 3);
        this.year = new Date().getFullYear();
        this.col1Data = [];
        for(let i = 0;i<10;i++) {
          let year = this.year - i;
          let obj = {
            value: year,
            text: year
          };
          this.col1Data.push(obj);
        }
        // 初始化列表查询条件
        this.initQueryConditions('0');
        this.picker = this.$createPicker({
          title: '选择年份',
          data: [this.col1Data],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.year = selectedVal[0];
            // 重置搜索条件
            this.initQueryConditions(this.index);
            // 清空数据
            this.releaseList = [];
            // 隐藏无数据显示
            this.isShowNoData = false;
            // 刷新列表
            this.queryMyPublishOrder();
            // this.onLoad();
          },
          onCancel: () => {

          }
        });
      },
      showPicker () {
        this.picker.show()
      },
      statusToChinese(status) {
        let cont = '';
        switch (status) {
          case 0: // 取消发布 -> 20 关闭
            cont = '发布';
            break;
          case 1: // 接受 -> 抢单成功 拒绝-> 发布
            cont = '抢单';
            break;
          case 2:
            cont = '中转';
            break;
          case 3:
            cont = '取货'; // 待取货 已取货
            break;
          case 4: // 确认 -> 待评价
            cont = '签收';
            break;
          case 5:
            cont = '签收';
            break;
          case 6: // 评价 -> 已评价 // 待评价 已评价
            cont = '评价';
            break;
          case 7:
            cont = '已抢单';
            break;
          case 8:
            cont = '完成';
            break;
          case 20: // 重新发布
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
        // 重置搜索条件
        this.initQueryConditions(item.value);
        // 清空数据
        this.releaseList = [];
        // 隐藏无数据显示
        this.isShowNoData = false;
        // 刷新列表
        // this.queryMyPublishOrder();
        this.onLoad();
      },
      avatarClick() {
        this.$app_store.commit(IS_SHOW_SIDEBAR, true);
      },
      initQueryConditions(status) {
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
        this.QueryParam.tstatus = status;
        this.QueryParam.year = this.year;
      },
      // 确认签收
      conReceipt(orderId, index) {
        let self = this;
        this.message.showAlert(this, alertContent.RECEIVING)
          .then(() => {
            self.$Ice_myOrderService.conReceipt(orderId, self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.releaseList[index].tstatus = 6;
                  self.$vux.toast.text(result.msg, 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试 !', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      strSub(str, len) {
        return subString(str, len)
      },
      // 重新发布订单
      repubOrder(orderid, index) {
        this.$router.push({
          name: 'repuborder',
          query: {
            orderId: orderid
          }
        });
        // let self = this;
        // this.message.showAlert(this, alertContent.CANCEL_ORDER)
        //   .then(() => {
        //     self.$Ice_myOrderService.repubOrder(orderid, self.userId, new IceCallback(
        //       function (result) {
        //         if (result.code === 0) {
        //           self.releaseList[index].tstatus = 0;
        //           self.$vux.toast.text('订单重新发布成功 !', 'top');
        //         } else {
        //           self.$vux.toast.text(result.msg, 'top');
        //         }
        //       },
        //       function (error) {
        //         self.$vux.toast.text('服务器连接失败, 请稍后重试 !', 'top');
        //       }
        //     ))
        //   })
        //   .catch(() => {
        //
        //   })
      },
      // 订单取消发布
      cancelOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.cancelOrder(item.orderno, self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.releaseList[index].tstatus = 20;
                  self.$vux.toast.text('订单取消发布成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 支付
      OrderPay() {
        this.$vux.toast.text('支付功能正在努力建设中', 'top');
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
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
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
                  self.releaseList[index].tstatus = 7;
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
                  self.releaseList[index].tstatus = 0;
                  self.$vux.toast.text('订单拒绝成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 获取我的发布列表
      queryMyPublishOrder() {
        let self = this;
        console.log(this.page);
        this.$Ice_redundancyService.queryMyPubOrder(this.userId, this.QueryParam, this.page, new IceCallback(
          function (result) {
            self.loading = false;
            if (result.code === 0) {
              self.page.pageIndex += 1;
              if (result.obj !== '[]') {
                self.finished = false;
                self.releaseList = self.releaseList.concat(JSON.parse(result.obj));
              } else {
                self.finished = true;
              }
              self.total = result.totalItems;
              if (self.releaseList.length >= self.total) {
                self.finished = true;
              }
            } else {
              self.finished = true;
              self.$vux.toast.text(result.msg, 'top');
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
        this.queryMyPublishOrder();
      },
      toReleaseDetails(item) {
        item.type = 0;
        this.$router.push({
          name: 'orderDetail',
          query: {
            params: JSON.stringify(item)
          },
        })
      },
      showCodamt(codamt, insureamt) {
        let str = '';
        if (codamt > 0) {
          str = '代收金额: ' + codamt
        } else {
          str = '无代收'
        }
        if (insureamt > 0) {
          str += ',保价金额: ' + insureamt
        } else {
          str += ',无保价'
        }
        return str
      },
      // 取货照片
      toPickGoodsPic(item,type) {
        if(type === 0) {
          if (item.puimg === '0') {
            this.$vux.toast.text('暂无取货照片', 'top');
            return
          }
        }else {
          if (item.retuimg === '0') {
            this.$vux.toast.text('暂无签收照片', 'top');
            return
          }
        }
        item.qhType = type;
        this.$router.push({
          name: 'pickGoodsPic',
          params: item
        })
      },
      // 取货码
      toPickGoodsCode(orderNo) {
        this.$router.push({
          name: 'pickGoodsCode',
          query: {
            id: orderNo
          }
        })
      },
      // 行程回放
      toSchedulePlayBack(item) {
        this.$router.push({
          name: 'schedulePlayBack',
          params: item
        })
      },
      // 跳转企业详情
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.revicompid,
            status: 6
          }
        })
      },
      // 待评价
      toEvaluatePage(item) {
        item.type = 0;
        this.$router.push({
          name: 'evaluateOrder',
          params: item,
        })
      },
      // 查看取货照片
      getPickupPhotosUrl(orderId, compId, imgArr) {
        console.log(orderId, compId);
        console.log(this.getImgUrl(orderId, compId));
        let imgUrl = this.getImgUrl(orderId, compId);
        let imgName = eval("(" + imgArr + ")");
        let imgUrlList = [];
        console.log(imgName);
        for (let i = 0; i < imgName.length; i++) {
          console.log(imgName[i]);
          imgUrlList.push('http://192.168.1.110:8029/' + imgUrl + '/' + imgName[i])
        }
        console.log(imgUrlList);
        this.imgUrl = imgUrlList;
      },
      // 获取图片地址
      getImgUrl(orderId, compId) {
        let dirs = [];
        if (compId) {
          let dir1 = compId % 100;
          console.log(dir1);
          dir1 = dir1 < 10 ? ("0" + dir1) : dir1;
          dir1 = "EP" + dir1;
          dirs.push(dir1);
          let dir2 = compId;
          dirs.push(dir2);
          if (orderId && orderId.length > 6) {
            let dir3 = orderId.substr(0, 4);
            dirs.push(dir3);
            let dir4 = orderId.substr(4, 2);
            dirs.push(dir4);
            let dir5 = orderId.substr(6, 2);
            dirs.push(dir5);
            let dir6 = orderId;
            dirs.push(dir6);
          }
        }
        return dirs.join("/");
      },
      // 字符串截取
      addressSubStr(str) {
        return str.split(',')[1]
      }
    },
    watch: {
      releaseList: {
        handler: function (newVal) {
          if (newVal.length === 0) {
            this.isShowNoData = true
          } else {
            this.isShowNoData = false
          }
        },
        deep: true
      }
    }
  }
</script>

<style>

</style>
