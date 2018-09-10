<template>
  <div style="height: 100%;" ref="wrapper">
    <div class="issueHeaderNav">
      <div class="width20"><i class="icon iconfont icon-btngoback back floatleft"></i></div>
      <div class="width60"><span>城市选择</span></div>
      <div class="width20"><div class="alignCenter floatright"></div></div>
    </div>
    <div class="searchBox margintop6">
      <div class="selectRegion">
        <div class="searchBtnCity floatleft">
          <i class="icon iconfont icon-sousuo magnifierziti cityNameI"></i>
          <input type="text"  class="cityInput" placeholder="城市名/首字母" readonly="readonly">
        </div>
      </div>
    </div>
    <div class="citiesBox">
      <div v-for="(item, index) in disCities" :key="index" :ref="item.name">
        <div class="cityAggregateBox">
          <div class="cityAggregate">
            <p class="rollLetter" v-if="item.type !== 'current'&&item.type !== 'recently'">{{item.name}}</p>
            <van-collapse v-model="activeNames" class="collapse" v-if="item.type === 'current'">
              <span class="pickCountyBox">选择区县</span>
              <van-collapse-item name="1" style="position:relative;">
                <span class="pickCount" :class="itemA.checked === true ? 'backgroundNine': ''" @click="onChange(item,index,0)" v-for="(itemA,index) in item.children">{{itemA.name}}</span>
              </van-collapse-item>
            </van-collapse>
            <div class="latelyCity" v-if="item.type === 'recently'">
              <p>{{item.name}}</p>
              <span class="pickCount" v-for="item in item.items.children"><img src="./../../assets/images/small/dingwei.png" alt="">{{item.name}}</span>
            </div>
            <ul class="cityNameAggregate" v-if="item.type === undefined">
              <li v-for="item in item.items" @click="onChange(item)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 侧边索引栏 -->
      <fs-side-nav-index :citiesIndexer=citiesIndexer></fs-side-nav-index>
    </div>
  </div>

</template>
<script>
  import fsSideNavIndex from './side-nav-index'
  import Bscroll from 'better-scroll'
  export default {
    name: 'fsCities',
    props: {
      disCities: Array,
      citiesIndexer: Array
    },
    components: {
      fsSideNavIndex
    },
    computed: {
      alphaBetIndex: {
        get: function () {
          return this.$app_store.state.alphabetIndex
        },
        set: function () {

        }
      }
    },
    data() {
      return {
        activeNames: ['1'],// 控制折叠列表显示/隐藏
        showToast: false
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        click: true
      })
    },
    methods: {
      onChange(item,index,type) {
        if(type === undefined) {
          item.children.unshift({
            checked: true,
            name: item.name,
            value: item.value
          });
          item.type = 'current'
          item.name = '区县'
        }else {
          for(let i=0;i<item.children.length;i++) {
            if (index === i) {
              item.children[i].checked = true
            } else {
              item.children[i].checked = false
            }
          }
        }
        this.$emit('onChange',item)
      }
    },
    watch: {
      alphaBetIndex() {
        debugger
        if(this.alphaBetIndex) {
          const elment = this.$refs[this.alphaBetIndex][0];
          this.scroll.scrollToElement(elment);
        }
      }
    }
  }
</script>
<style>
  .pickCountyBox {
    position: absolute;
    top: .15rem;
    left: 5.7rem;
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
    margin: .21rem auto;
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
    position: absolute;
    top: 0rem;
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
