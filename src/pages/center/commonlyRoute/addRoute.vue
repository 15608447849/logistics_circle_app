<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>添加线路</span>
      <div></div>
    </div>
    <div class="addRouterBox">
      <ul class="addRouteList">
        <li class="needBorder">
          <span class="routeTitle ">目的地</span>
          <input type="text" readonly="readonly" placeholder="请选择地名" @click="showCascadePicker" class="pickValue" value="">
          <!--<input type="hidden" readonly="readonly" class="pickValueId">-->
        </li>
        <li class="needBorder">
          <span class="routeTitle">出发地</span>
          <input type="text" readonly="readonly">
        </li>
        <li class=" needBorder">
          <span class="routeTitle">途经点</span>
          <input type="text" readonly="readonly">
        </li>
        <li class="needBorder">
          <span class="routeTitle">中转点</span>
          <input type="text" readonly="readonly">
        </li>
      </ul>
      <button class="nextStep">保 存</button>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          area: [],
          cascadeData: '',
          cascadePicker: null,
          routeInfo: new enterprise.RouteInfo(),
          selectWayP: [],
        }
      },
      mounted() {
        this.initData();
      },
      methods:{
        initData() {
          // 初始化数据
          this.cascadeData = JSON.parse(localStorage.getItem('area'));
          // 初始化地区选择器
          this.cascadePicker = this.$createCascadePicker({
            title: '地区选择',
            data: this.cascadeData,
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        },
        fallback() {
          this.$router.go(-1)
        },
        showCascadePicker(){
          this.cascadePicker.show();
          console.log(this.cascadePicker)
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
          this.selectWayP.push({
            selectedVal: selectedVal,
            selectedText: selectedText
          });
         console.log(this.selectWayP)
          // this.$createDialog({
          //   type: 'warn',
          //   content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          //   icon: 'cubeic-alert'
          // }).show()
        },
        cancelHandle() {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }
    }
</script>

<style scoped>

</style>
