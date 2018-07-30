<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>线路详情</span>
      <div></div>
    </div>
    <div class="downfixed havedownfixed">
    <div class="addRouterBox">
      <ul class="addRouteList">
        <li class="needBorder" @click="showCascadePicker(0)">
          <span class="routeTitle">目的地</span>
          <input v-model="routerInfo.endpn" type="text" readonly="readonly" value="">
        </li>
        <li class="needBorder" @click="showCascadePicker(1)">
          <span class="routeTitle">出发地</span>
          <input v-model="routerInfo.startpn" type="text" readonly="readonly" value="">
        </li>
        <li class=" needBorder" @click="showCascadePicker(2)">
          <span class="routeTitle">途经点</span>
          <span v-for="(item, index) in wayPs" :key="index"><badge @click.native="removeBadge(64,index)"
                                                                   :text=item.placename
                                                                   @click.native.stop="removeBadge"/></span>
        </li>
        <li class="needBorder" @click="showCascadePicker(3)">
          <span class="routeTitle">中转点</span>
          <span v-for="(item, index) in TransitP" :key="index"><badge
            :text=item.placename @click.native="removeBadge(64,index)" @click.native.stop="removeBadge"/></span>
        </li>
      </ul>
      <button class="nextStep" @click="saveRoutes">保 存</button>
    </div>
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
        routerInfo: new enterprise.RouteInfo(),
        areaList: [],
        userId: this.$app_store.getters.userId || 4,
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
        compid: 2, // 公司id
        passingPoint: [], // 途径点数据
        allTransferPoint: [], // 中转点数据
        pickerDataList: []
      }
    },
    mounted() {
      this.routerInfo = this.$route.params;
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
            if (item.cstatus === 128) {
              this.TransitP.push(item);
            } else {
              this.wayPs.push(item);
            }
          });
        }
      }

      // 初始化地区选择数据
      this.cascadeData = this.$app_store.getters.area;
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
    },
    methods: {
      // 设置目的地
      showCascadePicker(type) {
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
        this.$router.go(-1)
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
        switch (this.pickerType) {
          case 0:
            this.routerInfo.endpn = selectedText[2];
            this.routerInfo.endpc = selectedVal[2];
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
            this.routerInfo.startpn = selectedText[2];
            this.routerInfo.startpc = selectedVal[2];
            // 清空途径点
            this.wayPs = [];
            // 获取途径点选择列表
            this.getPassingPoint(this.routerInfo.startpc, this.routerInfo.endpc);
            break;
          case 2:
            this.wayPs.push({
              cstatus: 64,
              place: selectedVal[2],
              placename: selectedText[2],
            });
            break;
          case 3:
            this.TransitP.push({
              cstatus: 128,
              place: selectedVal[0],
              placename: selectedText[0],
            });
            break;
        }
      },
      cancelHandle() {

      },
      saveRoutes() {
        let self = this;
        let list = this.wayPs.concat(this.TransitP);
        let routeInfo = new enterprise.RouteInfo();
        routeInfo.startpc = self.routerInfo.origin; //起始地
        routeInfo.startpn = self.routerInfo.startpn; //起始地名称
        routeInfo.endpc = self.routerInfo.destination; //目的地
        routeInfo.endpn = self.routerInfo.endpn; //目的地名称
        list.forEach((item, index, arr) => {
          let viap = new enterprise.Routeviap();
          viap.cstatus = item.cstatus;
          viap.place = item.place;
          viap.placename = item.placename;
          self.routerInfo.routevias.push(viap);
        });
        routeInfo = self.routerInfo.routevias;
        this.$Ice_EnterpriseService.saveRoute(self.routerInfo, self.userId, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.routeList = result.obj;
            }
          },
          function (error) {
            debugger
          }
        ))
      },
    },
    watch: {
      wayPs: {
        handler(newValue, oldValue) {
          var hash = {};
          newValue = newValue.reduce(function(item, next) {
            hash[next.place] ? '' : hash[next.place] = true && item.push(next);
            return item
          }, [])
          console.log(this.wayPs)
          console.log(newValue)
        },
        deep: true
      }
    }

  }
</script>

<style scoped>

</style>
