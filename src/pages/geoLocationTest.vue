<template>
  <div>
    <yd-navbar title="测试工具"></yd-navbar>
    <yd-button size="large" type="primary" @click.native="getLocation">primary</yd-button>
    <yd-button size="large" type="primary">primary</yd-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        city: ''
      }
    },
    methods: {
      // Android 定位完成
      getLocation() {
        GaoDe.getCurrentPosition(function (success) {
          this.message.Toast(this,'correct',success.status,false);
          console.log(JSON.stringify(success));
            // "status":"定位成功",
            //   "type":5,
            //   "latitude":28.194622,
            //   "longitude":112.994971,
            //   "accuracy":30,
            //   "bearing":0,
            //   "satellites":0,
            //   "country":"中国",
            //   "province":"湖南省",
            //   "city":"长沙市",
            //   "citycode":"0731",
            //   "district":"芙蓉区",
            //   "adcode":"430102",
            //   "address":"湖南省长沙市芙蓉区新生村巷327#号靠近平安银行(长沙分行)",
            //   "poi":"平安银行(长沙分行)",
            //   "time":1531209753839,
            //   "backtime":1531209756861
        }, function (error) {
          this.message.Toast(this,'correct',error.status + error.errinfo,false);
            // 缺少定位权限
          console.log(JSON.stringify(error))
          // {
          //   "status":"定位失败",
          //   "errcode":12,
          //   "errinfo":"缺少定位权限 请到http://lbs.amap.com/api/android-location-sdk/guide/utilities/errorcode/查看错误码说明,错误详细信息:定位权限被禁用,请授予应用定位权限#1201",
          //   "detail":"定位权限被禁用,请授予应用定位权限#1201",
          //   "backtime":1531210405986
          // }
        })
      }
    }
  };
</script>

<style>
</style>
