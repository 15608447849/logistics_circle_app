<template>
  <div>
    <van-collapse v-model="activeNames" class="collapse">
      <span class="pickCountyBox">选择区县</span>
      <van-collapse-item :title="looking" name="1" style="position:relative;">
        <span class="pickCount">全城</span>
        <span class="pickCount backgroundNine">长沙县</span>
        <span class="pickCount">浏阳市</span>
        <span class="pickCount">望城区</span>
        <span class="pickCount">宁乡县</span>
        <span class="pickCount">雨花区</span>
        <span class="pickCount">岳麓区</span>
        <span class="pickCount">近效</span>
        <span class="pickCount">芙蓉区</span>
        <span class="pickCount">开福区</span>
        <span class="pickCount">天心区</span>
      </van-collapse-item>
    </van-collapse>
    <div class="latelyCity">
      <p>最近访问</p>
      <span class="pickCount"><img src="./../../assets/images/small/dingwei.png" alt="">长沙</span>
      <span class="pickCount">成都</span>
      <span class="pickCount">深圳</span>
    </div>
    <div class="cityAggregate">
      <p class="rollLetter">A</p>
      <ul class="cityNameAggregate">
        <li>安顺</li>
        <li>阿富汗</li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'fsCities',
    props: {
      cities: Object
    },
    data() {
      return {
        activeNames:['1'],
        cityNameSeach:'',//搜索框值
        looking:'你正在看：长沙',
      }
    }
  }
</script>
<style>
  .pickCountyBox{
    position:absolute;
    top:.15rem;
    left:5.7rem;
    width:1.2rem;
    height:.62rem;
    text-align: center;
    line-height:.62rem;
    font-size:.28rem;
    color:#666666;
    z-index:1;
  }
  .CountyBox{
    display:block;
    width:7.5rem;
    height:auto;
    padding:.21rem;
  }
  .backgroundNine{
    background:#efefef;
  }
  .pickCount{
    display:inline-block;
    width:1.9rem;
    height:.6rem;
    margin-right:.2rem;
    margin-bottom:.24rem;
    text-align: center;
    border:1px solid #efefef;
    border-radius: 3px;
    line-height:.6rem;
  }
  .pickCount img{
    display:inline-block;
    width:.3rem;
    height:.3rem;
    vertical-align: middle;
  }
  .latelyCity{
    display:block;
    width:7.5rem;
    height:auto;
    padding:0 .21rem 0 .21rem;
    background:#ffffff;
  }
  .latelyCity p{
    height:.6rem;
    line-height:.6rem;
    color:#999999;
  }
  .cityAggregate{
    display:block;
    position:relative;
    width:7.08rem;
    height:74vh;
    margin:.21rem  auto;
    overflow: auto;
  }
  .cityNameAggregate{
    position:absolute;
    top:.6rem;
    width:7.08rem;
    height:auto;
    overflow: auto;
  }
  .cityNameAggregate li{
    width:6.5rem;
    height:.9rem;
    line-height:.9rem;
    border-bottom:1px solid #e0e0e0;
  }
  .letter{
    position:fixed;
    top:26vh;
    left:6.79rem;
    width:.5rem;
    height:66vh;
  }
  .rollLetter{
    position:absolute;
    top:0rem;
    width:6.5rem;
    height:.6rem;
    text-indent: .21rem;
    background:#efefef;
    line-height:.6rem;
    font-size:.32rem;
    color:#999999;
    z-index:2;
  }
  .letter li{
    width:.6rem;
    height:.37rem;
    text-align: center;
  }
  .collapse{
    height:auto;
    margin-bottom:.05rem;
  }
</style>
