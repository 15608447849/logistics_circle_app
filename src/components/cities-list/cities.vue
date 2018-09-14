<template>
  <div>
    <div class="searchCityBox positionFixed" ref="title">
      <i class="icon iconfont icon-guanbi1 closeCity"></i>
      <div class="selectRegion">
        <div class="searchBtnCity floatleft">
          <i class="icon iconfont icon-sousuo magnifierziti cityNameI"></i>
          <input type="text" class="cityInput" placeholder="城市名/首字母" readonly="readonly">
        </div>
      </div>
    </div>

    <div class="citiesBox" ref="wrapper">
      <!--<div class="cityAggregateBox">-->
        <div >
          <div class="cityAggregate" v-for="(item, index) in disCities" :key="index" :ref="item.name">
            <p class="rollLetter" v-if="item.type !== 'current'&&item.type !== 'recently'">{{item.name}}</p>

            <van-collapse v-model="activeNames" class="collapse" v-if="item.type === 'current'">
                <span class="seeCity">当前：{{item.children[0].name}}</span>
                <span class="pickCountyBox">选择区县</span>
                <van-collapse-item name="1" style="position:relative;">
                <span class="pickCount" :class="itemA.checked === true ? 'backgroundNine': ''"
                      @click="onChange(item,index,0)" v-for="(itemA,index) in item.children">{{itemA.name}}</span>
                </van-collapse-item>
            </van-collapse>

            <div class="latelyCity" v-if="item.type === 'recently'">
              <p>{{item.name}}</p>
              <span class="pickCount" v-for="item in item.items.children"><img
                src="./../../assets/images/small/dingwei.png" alt="">{{item.name}}</span>
            </div>
            <ul class="cityNameAggregate" v-if="item.type === undefined">
              <li v-for="item in item.items" @click="onChange(item)">{{item.name}}</li>
            </ul>
          </div>
        </div>

      <!--</div>-->
      <!--&lt;!&ndash; 侧边索引栏 &ndash;&gt;-->
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
      disCities: [Object, Array],
      citiesIndexer: [Object, Array]
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
        showToast: false,
        scroll: null
      }
    },
    mounted() {
      let _this = this;
      setTimeout(()=>{
        _this.$nextTick(()=>{
          if(_this.scroll === null) {
            _this.scroll = new Bscroll(_this.$refs.wrapper, {
              click: true,
              preventDefault: false
            });
            console.log( _this.scroll)
          } else {
            _this.scroll.finishPullUp();
            _this.scroll.refresh();
          }
        });
      },500);
    },
    methods: {
      onChange(item, index, type) {
        if (type === undefined) {
          item.children.unshift({
            checked: true,
            name: item.name,
            value: item.value
          });
          item.type = 'current'
          item.name = '区县'
        } else {
          for (let i = 0; i < item.children.length; i++) {
            if (index === i) {
              item.children[i].checked = true
            } else {
              item.children[i].checked = false
            }
          }
        }
        this.$emit('onChange', item)
      },
      // 通过字母表索引获取偏移高度
      offset(el) {
        let left = 0;
        let top = 0;
        let collapse = 0;
        while (el) {
          left -= el.offsetLeft;
          top -= el.offsetTop;
          el = el.offsetParent;
          collapse = el === null? collapse :el.clientWidth
        }
        console.log('当前屏幕高度:' + document.documentElement.clientHeight);
        console.log('当前计算出来的高度:'+collapse);
        console.log('当前top高度:' + top);
        return {
          left: left,
          top: top + collapse
        };
      }
    },
    watch: {
      alphaBetIndex() {
        if (this.alphaBetIndex) {
          const elment = this.$refs[this.alphaBetIndex][0];
          this.$nextTick(function () {
            console.log(this.scroll)
            this.scroll.scrollTo(0,this.offset(elment).top)
          })
        }
      }
    }
  }
</script>
<style>
  .searchCityBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.5rem;
    height: 6vh;
    background-color: #efefef;
    z-index: 9999;
  }

  .searchCityBox .selectRegion {
    position: relative;
    top: 0rem;
    left: 0rem;
    width: 5rem;
    height: .64rem;
    background-color: #e3e3e3;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
  }

  .searchCityBox i {
    font-family: PingFang-SC-Regular;
    /*color: #999999;*/
  }

  .closeCity {
    position: relative;
    top: 0;
    left: -.9rem;
    color: #3189f5;
  }

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

  .seeCity {
    position: absolute;
    top: .15rem;
    left: .21rem;
    height: .62rem;
    text-align: center;
    line-height: .62rem;
    font-size: .28rem;
    color: #666666;
    z-index: 1;
  }

  .positionFixed {
    position: fixed;
    top: 0vh;
    z-index: 2;
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
    /*position: relative;*/
    width: 7.5rem;
    height: auto;
    margin: 0 auto;
    /*overflow: auto;*/
    background: #ffffff;
  }

  .cityNameAggregate {
    width: 7.08rem;
    height: auto;
    padding-left: .21rem;
  }

  .cityNameAggregate li {
    width: 6.5rem;
    height: .9rem;
    line-height: .9rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .rollLetter {
    display: inline-block;
    width: 6.7rem;
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
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*height: 750px;*/
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
  }
  [class*=van-hairline]::after{
    border:none;
  }

</style>
