<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>录入行程</span>
        <!--<span v-if="orderState.tstatus === 4">签收照片</span>-->
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div class="entryTravelBox">
      <ul class="entryTravelList height29">
        <li class="needBorder">
          <span class="textRed">*</span>
          <span>日期</span>
          <input type="text" v-model="entryTripForm.driverid" @click="showDatePicker" placeholder="请选择日期" readonly="readonly" class="floatright">
        </li>
        <li class="needBorder">
          <span class="textRed">*</span>
          <span>时间</span>
          <input type="text" v-model="entryTripForm.time" @click="showTimePicker" placeholder="请选择时间" readonly="readonly" class="floatright">
        </li>
        <li class="needBorder">
          <span class="textRed">*</span>
          <span>状态</span>
          <input type="text" v-model="entryTripForm.status" @click="showPicker" placeholder="请选择状态" readonly="readonly" class="floatright">
        </li>
        <li class="needBorder">
          <span class="textRed">*</span>
          <span>地点</span>
          <input v-model="entryTripForm.addressName" @click="showCityPicker" type="text" placeholder="请选择地点" readonly="readonly" class="floatright">
        </li>
      </ul>
      <!--<div class="describeBox">-->
        <!--<span class="describe">描述</span>-->
        <!--&lt;!&ndash;<textarea placeholder="请输入描述信息" class="describeInfo"></textarea>&ndash;&gt;-->
        <!--<div class="describeInfo" contenteditable="true" >{{entryTripForm.describe}}<br /></div>-->
      <!--</div>-->
      <div class="textareaBox marginBottom10VH">
        <span class="evaluateTitle colorBlack">描述</span>
        <textarea maxlength="200" v-model="entryTripForm.describe" class="evaluateTextarea" placeholder="请输入描述信息~"></textarea>
      </div>
      <button class="describeSure" @click="entryTripOk">确定</button>
    </div>
  </div>
</template>

<script>
  import { provinceList, cityList, areaList } from '../../../static/resources/area'
  const addressData = provinceList
  addressData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })
  const col1Data = [{ text: '运输中', value: '运输中'}, { text: '已到达', value: '已到达' },
    { text: '送货中', value: '送货中' }, { text: '已签收', value: '已签收' }];
  export default {
    data(){
      return {
        time:'',
        state:'',
        address:'',
        userId: this.$app_store.getters.userId,
        entryTripForm:{
          driverid:'',
          status:'',
          address:[],
          addressName:'',
          describe:'',
          content:'',
          orderno:'',
          trancompid:'',
          time:'',
        }
      }
    },
    mounted() {
      this.entryTripForm.orderno = this.$route.query.orderno;
      this.asyncPicker = this.$createCascadePicker({
        title: '请选择地点',
        data: addressData,
        onSelect: this.selectCityHandle,
        onCancel: this.cancelCityHandle
      });
      this.picker = this.$createPicker({
        title: '选择运输状态',
        data: [col1Data],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.entryTripForm.status = selectedText[0]
        },
        onCancel: () => {

        }
      })
    },
    methods:{
      selectCityHandle(selectedVal, selectedIndex, selectedText) {
        this.entryTripForm.addressName = selectedText[0] +  selectedText[1] +  selectedText[2]
      },
      cancelCityHandle() {

      },
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: '选择日期',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectDateHandle,
            onCancel: this.cancelDateHandle
          })
        }
        this.datePicker.show()
      },
      selectDateHandle(date, selectedVal, selectedText) {
        this.entryTripForm.driverid = selectedText[0] + '-' + selectedText[1] + '-' + selectedText[2]
      },
      cancelDateHandle() {

      },
      showTimePicker() {
        if (!this.timePicker) {
          this.timePicker = this.$createDatePicker({
            title: '选择时间',
            min: [8, 0, 0],
            max: [20, 59, 59],
            value: new Date(),
            startColumn: 'hour',
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.timePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.entryTripForm.time = selectedText[0] + ':' + selectedText[1] + ':' + selectedText[2]
      },
      cancelHandle() {

      },
      showPicker () {
        this.picker.show()
      },
      showCityPicker () {
        this.asyncPicker.show();
      },
      fallback(){
        this.$router.go(-1);
      },
      entryTripOk() {

        if (this.entryTripForm.driverid === '') {
          this.$vux.toast.text('请选择日期', 'top');
          return false;
        } else if (this.entryTripForm.time === '') {
          this.$vux.toast.text('请选择时间', 'top');
          return false;
        } else if (this.entryTripForm.status === '') {
          this.$vux.toast.text('请选择状态', 'top');
          return false;
        } else if (this.entryTripForm.addressName === '') {
          this.$vux.toast.text('请选择地址', 'top');
          return false;
        }
        let tracinfoJson = new  myOrder.TracOfOrder();
        let content = {
          "date": this.entryTripForm.driverid,
          "time": this.entryTripForm.time,
          "des":'货物到达'+this.entryTripForm.addressName+','+this.entryTripForm.status,
          "status":this.entryTripForm.status
        }
        tracinfoJson.orderno = this.entryTripForm.orderno;
        tracinfoJson.trancompid = this.userId;
        tracinfoJson.content = JSON.stringify(content);
        tracinfoJson.cstatus = 32;
        let self = this;
        this.$Ice_myOrderService.entryTravel(tracinfoJson,new IceCallback(
          function(result){
            self.$vux.toast.text(result.msg, 'top');
            if (result.code === 0) {
              setTimeout(()=>{
                self.$router.go(-1)
              },1000);
            }
          }
        ))
      }
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'order') {
        to.meta.isUseCache = true;
      }
      if (to.name === 'acceptOrders') {
        to.meta.isUseCache = true;
      }
      next();
    }
  }
</script>

<style scoped>

</style>
