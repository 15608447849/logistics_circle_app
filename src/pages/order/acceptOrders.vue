<template>
  <div>
    <div class="myReleaseBox">
      <div class="issueHeaderNav">
        <div class="width20">
          <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
        </div>
        <div class="width60">
          <span>我的接收</span>
        </div>
        <div class="width20" @click="showPicker">
          <i class="orderTime">{{QueryParam.year}}年</i>
          <i class="icon iconfont icon-xiala sanjiao"></i>
        </div>


      </div>
      <div class="downfixed havedownfixed">
        <!--<div class="releaseAccept">发布订单{{total}}条</div>-->
        <div class="releaseMenu">
          <span class="releaseState" :class="{'activecircle ziTiColorBlue' : item.isSelected}" v-for="(item , index) in tabList"
                :key="index" @click.stop="tabItemClick(item)">{{item.name}}</span>
        </div>
        <div class="myReceive">
          <div v-show="isShowNoData" class="noDataBox">
            <img src="../../assets/images/small/nodate.png"/>
          </div>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <ul class="myReleaseList" v-for="(item, index) in releaseList" :key="index" @click="toReleaseDetails(item)">
              <div class="releaseCompany">
                <div class="companyBox">
                  <i class="icon iconfont icon-qiyexinxi"></i>
                  <span>{{item.pubcompname}}</span>
                  <i class="icon iconfont icon-icon-test"></i>
                </div>
                <!--<span class="releasetext">发布</span>-->
                <span class="releasetext">{{statusToChinese(item.tstatus)}}</span>
              </div>
              <li class="address marginBottom15">
                <div class="addressList"><span>{{addressSubStr(item.startn)}}</span>-<span>{{addressSubStr(item.arriarn)}}</span></div>
              </li>
              <li class="collection marginBottom15">
                <span>{{showCodamt(item.codamt,item.insureamt)}}</span>
              </li>
              <li class="specifications marginBottom15">
                <span>{{item.ctdictn}}，{{item.wm}}{{item.wmdictn}}</span>
              </li>

              <li class="pickGoods marginBottom15">
                <div>
                  <span v-show="item.pusdate !== ''">取货时间：</span> <span>{{item.pusdate}}</span><span> {{item.pustime}}</span>
                </div>
                <!--<span class="underPay">线下付款</span>-->
                <!--线上付款-->
                <span class="underPay">{{item.ptdictn}}</span>
              </li>
              <li class="goodsTotalPrice">
                <div></div>
                <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">{{item.carriage}}</span></div>
              </li>
              <div class="cancelRefres">
                <div class="operationA">

                  <!--&lt;!&ndash;刷新&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 0" class="colorsixsix" @click.stop="refreshOrder(item, index)">刷新</a>-->
                  <!--&lt;!&ndash;取消&ndash;&gt;-->
                  <!-- 抢单 -->
                  <a v-show="item.tstatus === 1" class="colorsixsix" @click.stop="cancelOrder(item, index)">取消抢单</a>
                  <!-- 录入行程 -->
                  <a v-show="item.tstatus === 3" class="colorsixsix" @click.stop="entryTrip(item.orderno)">录入行程</a>
                  <a v-show="item.tstatus === 3" class="colorsixsix" @click.stop="printOrder(item, index)">查看中转单</a>

                  <!-- 签收 -->
                  <!--<a v-show="item.tstatus === 4" class="colorsixsix" @click.stop="toPickGoodsPic(item)">取货照片</a>-->
                  <!--<a v-show="item.tstatus === 4" class="colorsixsix" @click.stop="toPickGoodsPic(item)">签收照片</a>-->

                  <a v-show="item.tstatus === 2 || item.tstatus === 4 || item.tstatus === 6 || item.tstatus === 8" class="colorsixsix"  @click.stop="toSchedulePlayBack(item)">行程回放</a>
                  <!-- 待评价 -->
                  <!--<a v-show="item.tstatus === 6" class="colorLightBlue" @click.stop ="topickGoodsCode(item.orderno)">待评价</a>-->
                  <a v-show="item.tstatus === 7" class="colorsixsix"  @click.stop="toAgainRelease(item)">转发布</a>
                  <!--&lt;!&ndash;接受&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 1" class="colorsixsix" @click.stop="receiveOrder(item,index)">接受</a>-->
                  <!--&lt;!&ndash;拒绝&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 1" class="colorsixsix" @click.stop="refuseOrder(item,index)">拒绝</a>-->
                  <!--&lt;!&ndash;取货码&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 7" class="colorLightBlue" @click.stop ="topickGoodsCode(item.orderno)">取货码</a>-->
                  <a v-show="item.tstatus === 7" class="colorsixsix"  @click.stop="toComPInfo(item)">查看调度</a>
                  <!--&lt;!&ndash;查看行程&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 3 || item.tstatus === 4 || item.tstatus === 6 || item.tstatus === 8" class="colorsixsix"  @click.stop="">查看行程</a>-->
                  <!--&lt;!&ndash;确认签收&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 4" class="colorsixsix" @click.stop="conReceipt(item.orderno)">确认签收</a>-->
                  <!--&lt;!&ndash;评价&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 6" class="colorLightBlue">待评价</a>-->
                  <!--&lt;!&ndash;重新发布&ndash;&gt;-->
                  <!--<a v-show="item.tstatus === 20" @click.stop="repubOrder(item.orderno,index)"  class="colorLightBlue">重新发布</a>-->
                </div>
              </div>
            </ul>
          </van-list>
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
        index: '0',
        year: '',
        isShowNoData: false, // 无数据显示
        avatar: this.$app_store.state.avatarUrl,
        QueryParam: new redundancy.QueryParam(),
        page: new redundancy.Page(),
        userId: this.$app_store.getters.userId,
        releaseList: [], // 订单发布列表
        total: 0,// 发布订单总条数
        loading: false,
        finished: false,
        // 0 发布 1/2 抢单 3 取货 4 5 签收  6 待评价 8 评价 20 取消
        tabList: [{
          value: '1',
          name: '抢单',
          isSelected: true
        }, {
          name: '取货',
          value: '3',
          isSelected: false
        }, {
          name: '签收',
          value: '4',
          isSelected: false
        }, {
          name: '全部',
          value: '',
          isSelected: false
        }]
      }
    },
    created() {

    },
    mounted() {
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
      this.initQueryConditions('1');
      this.picker = this.$createPicker({
        title: '选择年份',
        data: [this.col1Data],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.year = selectedVal[0];
          // 重置搜索条件
          this.initQueryConditions(this.index);
          console.log(this.page)
          // 清空数据
          this.releaseList = [];
          // 刷新列表
          // this.queryMyPublishOrder();
          // this.onLoad();
          this.queryMyRecvOrder();
        },
        onCancel: () => {

        }
      })

    },
    methods: {
      showPicker () {
        this.picker.show()
      },
      statusToChinese(status) {
        let cont = '';
        switch (status) {
          case 1:
            cont = '已抢单';
            break;
          case 2:
            cont = '已中转';
            break;
          case 3:
            cont = '已取货';
            break;
          case 4:
            cont = '已签收';
            break;
          case 6:
            cont = '评价';
            break;
          case 7:
            cont = '抢单成功';
            break;
          case 8:
            cont = '已完成';
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
        // 刷新列表
        // this.queryMyRecvOrder();
        this.onLoad();
      },
      avatarClick() {
        this.$app_store.commit(IS_SHOW_SIDEBAR, true);
      },
      // 录入行程
      entryTrip(orderno) {
        this.$router.push({
          name: 'entryTravel',
          query: {
            orderno: orderno
          }
        })
      },
      // 打印中转单
      printOrder(item) {
        let self = this;
        this.$Ice_myOrderService.getTrancCode(this.userId,item.orderno,item.tstatus,new IceCallback(
          function(result){
            if (result.code === 0) {
              let data = JSON.parse(result.obj[0]);
              let	dataImg = data.data.nginx + data.data.relativeAddr;
              self.$router.push({
                name: 'preview',
                query: {
                  url: dataImg
                }
              })
            } else {
              self.$vux.toast.text('转运单获取失败', 'top');
            }
          }
        ))
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
      // 跳转企业详情
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.pubcompid,
            status: 6
          }
        })
      },
      toReleaseDetails(item) {
        item.type = 1;
        this.$router.push({
          name: 'orderDetail',
          query: {
            params : JSON.stringify(item)
          },
        })
      },
      toAgainRelease(item){
        this.$router.push({
          name: 'againRelease',
          query: {
            orderId: item.orderno
          }
          // path: '/center/myRelease/againRelease',
        })
      },
      // 取消抢单
      cancelOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.cancelRobbing(item.orderno,self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.releaseList.splice(index,1);
                  self.$vux.toast.text('订单取消成功 !', 'top');
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
      // 获取我的接收列表
      queryMyRecvOrder() {
        let self = this;
        this.$Ice_redundancyService.queryMyRecvOrder(this.userId, this.QueryParam,this.page, new IceCallback(
          function (result) {
            self.loading = false;
            if (result.code === 0) {
              self.page.pageIndex += 1;
              if(result.obj !== '[]') {
                self.releaseList = self.releaseList.concat(JSON.parse(result.obj));
                self.finished = false;
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
        this.queryMyRecvOrder();
      },
      showCodamt(codamt,insureamt) {
        let str = '';
        if(codamt > 0) {
          str = '代收金额: '+ codamt
        }else {
          str = '无代收'
        }
        if(insureamt > 0) {
          str += ',保价金额: ' + insureamt
        } else {
          str += ',无保价'
        }
        return str
      },
      // 行程回放
      toSchedulePlayBack(item) {
        this.$router.push({
          name: 'schedulePlayBack',
          params: item
        })
      },
      // 取货照片
      toPickGoodsPic(item) {
        if(item.puimg === '0') {
          this.$vux.toast.text('暂无取货照片', 'top');
          return
        }
        this.$router.push({
          name: 'pickGoodsPic',
          params: item
        })
      },
      fallback() {
        this.$router.go(-1)
      },
      // 字符串截取
      addressSubStr(str) {
        return  str.split(',')[1]
      }
    }
  }
</script>

<style>

</style>
