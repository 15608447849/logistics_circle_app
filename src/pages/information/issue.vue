<template>
  <div>
    <div class="issueHeaderNav">
      <div class="issueHeaderNavPic"><img src="../../assets/images/small/logo_26.png" alt=""></div>
      <div><span>发布订单</span></div>
      <div @click="toissue"><span>发布</span></div>
    </div>

      <ul class="releaseOption">
        <li>
           <span>运单号</span>
          <input type="text" class="input_33">
        </li>
        <li>
          <span class="spanBox">
          <span class="textRed">*</span>
          <span>目的地</span>
          </span>
          <input type="text" class="input_33">
        </li>
        <li>
          <span class="spanBox">
          <span class="textRed">* </span>
          <span>出发地</span>
          </span>
          <input type="text" class="input_80 indent30" placeholder="请输入地址，支持在地图上定位">
        </li>
      </ul>


    <ul class="releaseOption">
      <li>
          <span class="spanBox">
          <span class="textRed">* </span>
          <span>货物大小</span>
          </span>
        <input type="text" class="input_45 indent53" placeholder="重量/体积">
        <input type="text" class="input_30 indent53" placeholder="单位">
      </li>
      <li>
          <span class="spanBox">
          <span class="textRed">*</span>
          <span>货物数量</span>
          </span>
        <input type="text" class="input_45 indent53" placeholder="重量/体积">
        <input type="text" class="input_30 indent53" placeholder="单位">
      </li>
      <li>
          <span class="spanBox">
          <span class="textRed">* </span>
          <span>货物信息</span>
          </span>
        <input type="text" class="input_45 indent53" placeholder="货物类别">
        <input type="text" class="input_30 indent53" placeholder="是否包装">
      </li>
    </ul>

    <ul class="releaseOption">
      <li>
          <span class="spanBox">
          <span class="textRed">* </span>
          <span>车辆大小</span>
          </span>
        <input type="text" class="input_45 indent53" placeholder="数量"><span>台</span>
        <input type="text" class="input_30 indent53" placeholder="长度"><span>米</span>
      </li>
      <li>
          <span class="spanBox">
          <span class="textRed">*</span>
          <span>车辆要求</span>
          </span>
        <input type="text" class="input_80 indent64" placeholder="请选择车辆型号">

      </li>
      <li>
          <span class="spanBox">
          <span class="textRed">* </span>
          <span>运输要求</span>
          </span>
        <input type="text" class="input_80 indent64" placeholder="请选择运输要求">

      </li>
    </ul>

  </div>
</template>
<script>
    export default {
    }
</script>

<style>
</style>
