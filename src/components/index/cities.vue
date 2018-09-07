<template>
  <div class="citiesBox">
    <div v-for="(item, index) in cities" :key="index">
      <div class="cityAggregateBox">
        <div class="cityAggregate">
          <p class="rollLetter" v-if="item.type !== 'current'&&item.type !== 'recently'">{{item.name}}</p>
          <van-collapse v-model="activeNames" class="collapse" v-if="item.type === 'current'">
            <span class="pickCountyBox">选择区县</span>
            <van-collapse-item :title="looking" name="1" style="position:relative;">
              <span class="pickCount" v-for="item in item.items.children">{{item.name}}</span>
            </van-collapse-item>
          </van-collapse>
          <div class="latelyCity" v-if="item.type === 'recently'">
            <p>{{item.name}}</p>
            <span class="pickCount" v-for="item in item.items.children"><img src="./../../assets/images/small/dingwei.png" alt="">{{item.name}}</span>
          </div>
          <ul class="cityNameAggregate" v-if="item.type === undefined">
            <li v-for="item in item.items" @click="itemClick(item)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 侧边索引栏 -->
    <fs-side-nav-index :citiesIndexer = citiesIndexer></fs-side-nav-index>
  </div>
</template>
<script>
  import fsSideNavIndex from './side-nav-index'
  export default {
    name: 'fsCities',
    props: {
      cities: Object,// 城市数据
    },
    components: {
      fsSideNavIndex
    },
    computed: {

    },
    data() {
      return {
        activeNames: ['1'],// 控制折叠列表显示/隐藏
        looking: '当前选择城市：长沙',
        citiesIndexer: [] // 城市侧边索引数据
      }
    },
    methods: {
      init() {
        let temporary = [];
        for (let i=0;i<this.cities.length;i++) {
          temporary.push(this.cities[i].name);
        }
        // 获取侧边栏索引列表
        this.citiesIndexer = temporary;
        console.log(this.citiesIndexer)
      },
      itemClick(item) {
        console.log(item)
      }
    },
    watch: {
      cities() {
        this.$nextTick(this.init());
      }
    }

  }
</script>
<style>
  .pickCountyBox {
    position: absolute;
    top: .15rem;
    left: 5.2rem;
    width: 1.2rem;
    height: .62rem;
    text-align: center;
    line-height: .62rem;
    font-size: .28rem;
    color: #666666;
    z-index: 1;
  }

  .pickCount {
    display: inline-block;
    width: 1.9rem;
    height: .6rem;
    margin-right: .2rem;
    margin-bottom: .24rem;
    text-align: center;
    border: 1px solid #efefef;
    border-radius: 3px;
    line-height: .6rem;
  }

  .pickCount img {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    vertical-align: middle;
  }

  .latelyCity {
    display: block;
    width: 7.5rem;
    height: auto;
    padding: 0 .21rem 0 .21rem;
    background: #ffffff;
  }

  .latelyCity p {
    height: .6rem;
    line-height: .6rem;
    color: #999999;
  }

  .cityAggregate {
    display: block;
    position: relative;
    width: 7.08rem;
    height: auto;
    overflow: auto;
    background: #ffffff;
  }

  .cityNameAggregate {
    width: 7.08rem;
    height: auto;
  }

  .cityNameAggregate li {
    width: 6.5rem;
    height: .9rem;
    line-height: .9rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .rollLetter {
    width: 6.5rem;
    height: .6rem;
    text-indent: .21rem;
    background: #efefef;
    line-height: .6rem;
    font-size: .32rem;
    color: #999999;
    z-index: 1;
  }

  .letter li {
    width: .6rem;
    height: .37rem;
    text-align: center;
  }

  .collapse {
    height: auto;
    margin-bottom: .05rem;
  }

  .citiesBox {
    height: 100%;
    background: #ffffff;
  }
</style>
