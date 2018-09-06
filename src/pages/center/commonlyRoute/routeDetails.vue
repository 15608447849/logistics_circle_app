<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>线路详情</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>

      <div class="addRouterBox">
        <ul class="addRouteList">
          <li class="needBorder" @click="skipCityPage(3)">
            <span class="routeTitle">目的地</span>
            <input v-model="routerInfo.endpn" type="text" readonly="readonly" value="">
          </li>
          <li class="needBorder" @click="skipCityPage(2)">
            <span class="routeTitle">出发地</span>
            <input v-model="routerInfo.startpn" type="text" readonly="readonly" value="">
          </li>
          <li class=" needBorder" @click.stop="showCascadePicker(2)">
            <span class="routeTitle">途经点</span>
            <!--<span class="grayBack">长沙</span><span class="grayBack">鄂尔多斯</span>-->
            <span v-for="(item, index) in wayPs" :key="index"><badge @click.native="removeBadge(64,index)"
                                                                     :text=item.placename
                                                                     @click.native.stop="removeBadge"/></span>
          </li>
          <li class="needBorder" @click="showCascadePicker(3)">
            <span class="routeTitle">中转点</span>
            <span v-for="(item, index) in TransitP" :key="index"><badge
              :text=item.placename  @click.native.stop="removeBadge(128,index)"/></span>
          </li>
        </ul>
        <button class="nextStep" @click="saveRoutes">保 存</button>
      </div>

  </div>
</template>

<script>
  import {Badge} from 'vux'

  export default {
    components: {
      Badge
    },
    data() {
      return {
        routeCityStatus: 0,// 2 出发地 3 目的地
        routerInfo: new enterprise.RouteInfo(),
        areaList: [],
        userId: '',
        origin: '',// 目的地地区码
        destination: '',// 出发地地区码
        state: '',// 线路状态
        isEditor: false,
        wayPs: [],// 途径点 64
        TransitP: [],// 中转点 128
        cascadeData: '',
        aliasPicker: null,
        cascadePicker: null,
        pickerType: 0,
        passingPoint: [], // 途径点数据
        allTransferPoint: [], // 中转点数据
        pickerDataList: [],
      }
    },
    activated() {
      debugger
      if(this.$route.meta.isUseCache){
        this.$route.meta.isUseCache = false;
        if(this.routeCityStatus === 2) {
          this.routerInfo.startpn = this.$app_store.state.startCity;
          this.routerInfo.startpc = this.$app_store.state.startCityCode;
          // 清空途径点
          this.wayPs = [];
          // 获取途径点选择列表
          this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
        }else if(this.routeCityStatus === 3) {
          this.routerInfo.endpn =  this.$app_store.state.bournCity;
          this.routerInfo.endpc = this.$app_store.state.bournCityCode;
          // 清空途径点
          this.wayPs = [];
          // 清空中转点
          this.TransitP = [];
          // 获取途径点选择列表
          this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
          // 获取中转点选择列表
          this.getTransferPoint(this.routerInfo.endpc);
        }
      }else {
        this.userId = this.$app_store.state.userId;
        this.routerInfo = this.$route.params;
        // 清空途径点
        this.wayPs = [];
        // 清空中转点
        this.TransitP = [];
        if (this.routerInfo.oid) {
          this.isEditor = true;
          // 获取途径点选择列表
          this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
          // 获取中转点选择列表
          this.getTransferPoint(this.routerInfo.endpc);
          // 获取中转、途径点数据
          let routevias = this.routerInfo.routevias;
          // 获取途径点、中转数据
          if (routevias !== null && routevias.length > 0) {
            routevias.forEach((item, index, arr) => {
              var obj = new enterprise.Routeviap();
              obj.cstatus = item.cstatus;
              obj.place = item.place;
              obj.placename = item.placename;
              if (item.cstatus === 128) {
                this.TransitP.push(obj);
              } else {
                this.wayPs.push(obj);
              }
            });
          }
        }
        // 初始化地区选择数据
        this.cascadeData = JSON.parse(this.$app_store.getters.area);
        // 初始化地区选择器
        this.cascadePicker = this.$createCascadePicker({
          title: '地区选择',
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
        this.aliasPicker = this.$createPicker({
          title: '中转地选择',
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
    },
    methods: {
      showCascadePicker(type) {
        debugger
        this.pickerType = type;
        switch (type) {
          case 0:
            this.cascadePicker.setData(this.cascadeData);
            this.cascadePicker.show();
            break;
          case 1:
            this.cascadePicker.setData(this.cascadeData);
            this.cascadePicker.show();
            break;
          case 2:
            this.cascadePicker.setData(this.passingPoint);
            this.cascadePicker.show();
            break;
          case 3:
            this.aliasPicker.setData([this.allTransferPoint]);
            // 初始化中转点选择器
            this.aliasPicker.show();
            break;
        }
      },
      removeBadge(type, index) {
        if (index === undefined) return;
        if (type === 128) {
          this.TransitP.splice(index, 1);
        } else {
          this.wayPs.splice(index, 1);
        }
      },
      fallback() {
        this.$router.push({
          name: 'routerIndex'
        })
      },
      // 获取途经点
      getPassingPoint(start, end) {
        let self = this;
        self.$Ice_EnterpriseService.getPassingPoint(start, end, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.passingPoint = JSON.parse(JSON.stringify(result.obj.children).replace(/label/g, "text"));
            } else {
              self.$vux.toast.text('途经点数据获取失败, 请稍后重试', 'top')
            }
          },
          function (error) {

          }
        ))
      },
      // 获取中转点
      getTransferPoint(place) {
        let self = this;
        self.$Ice_SystemService.getTransferPoint(place, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.allTransferPoint = JSON.parse(JSON.stringify(result.obj).replace(/areac/g, "value").replace(/arean/g, "text"));
            } else {
              self.$vux.toast.text('中转点数据获取失败, 请稍后重试', 'top');
            }
          },
          function (error) {
            self.$vux.toast.text('中转点数据获取失败, 请稍后重试', 'top');
          }
        ))
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        debugger
        let obj = new enterprise.Routeviap();
        switch (this.pickerType) {
          case 0:
            this.routerInfo.endpn = selectedText[1];
            this.routerInfo.endpc = selectedVal[1];
            // 清空途径点
            this.wayPs = [];
            // 清空中转点
            this.TransitP = [];
            // 获取途径点选择列表
            this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
            // 获取中转点选择列表
            this.getTransferPoint(this.routerInfo.endpc);
            break;
          case 1:
            this.routerInfo.startpn = selectedText[1];
            this.routerInfo.startpc = selectedVal[1];
            // 清空途径点
            this.wayPs = [];
            // 获取途径点选择列表
            this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
            break;
          case 2:
            obj.cstatus = 64;
            obj.place = selectedVal[1];
            obj.placename = selectedText[1];
            this.wayPs.push(obj);
            break;
          case 3:
            obj.cstatus = 128;
            obj.place = selectedVal[0],
            obj.placename = selectedText[0],
            this.TransitP.push(obj);
            break;
        }
      },
      skipCityPage(status) {
        this.routeCityStatus = status;
        this.$router.push({
          path: '/city',
          query: {
            status: status
          }
        })
      },
      cancelHandle() {

      },
      saveRoutes() {
        let self = this;
        let info = new enterprise.RouteInfo();
        info.startpc = self.routerInfo.startpc; //起始地
        info.startpn = self.routerInfo.startpn; //起始地名称
        info.endpc = self.routerInfo.endpc; //目的地
        info.endpn = self.routerInfo.endpn; //目的地名称
        info.routevias = this.wayPs.concat(this.TransitP);
        // 编辑
        if (this.isEditor) {
          info.compid = self.routerInfo.compid;
          info.cstatus = self.routerInfo.cstatus;
          info.oid = self.routerInfo.oid;
          info.routeid = self.routerInfo.routeid;
        }
        if(info.startpc === ''){
          self.$vux.toast.text('请选择出发地 !', 'top');
          return;
        }
        if(info.endpc === ''){
          self.$vux.toast.text('请选择目的地 !', 'top');
          return;
        }
        this.$Ice_EnterpriseService.saveRoute(info, Number(self.userId), new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.$vux.toast.text('路线保存成功', 'top');
              self.fallback();

            }else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
          }
        ))
      },
    },
    watch: {
      wayPs: {
        handler(newValue, oldValue) {
          var hash = {};
          newValue = newValue.reduce(function (item, next) {
            hash[next.place] ? '' : hash[next.place] = true && item.push(next);
            return item
          }, []);
        },
        deep: true
      }
    }

  }
</script>

<style scoped>

</style>
