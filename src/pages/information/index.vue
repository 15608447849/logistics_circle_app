<template>
  <div class="content-scroll-wrapper">
    <div class="content-scroll-list-wrap" ref="scrollWrapper">
      <cube-scroll
        ref="contentScroll"
        :data="infoList"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">
        <div class="list_content">
          <ul class="order_box">
            <li class="order_list" v-for="(item, index) in infoList" :key="index">
              <div class="order_price"><span class="site">{{item.lineInfo}}</span><span
                class="price">{{item.fee}}元</span></div>
              <div class="order_time"><span class="volume">{{item.goodsInfo}}</span><span class="car_type">{{item.vehicleRequire}}</span><span
                class="time">{{item.time}}</span></div>
            </li>
          </ul>
        </div>
        <template slot="pulldown" slot-scope="props">
          <div v-if="props.pullDownRefresh"
               class="cube-pulldown-wrapper"
               :style="props.pullDownStyle">
            <div v-if="props.beforePullDown"
                 class="before-trigger"
                 :style="{paddingTop: props.bubbleY + 'px'}">
              <span :class="{rotate: props.bubbleY > 0}">↓</span>
            </div>
            <div class="after-trigger" v-else>
              <div v-show="props.isPullingDown" class="loading">
                <cube-loading></cube-loading>
              </div>
              <transition name="success">
                <div v-show="!props.isPullingDown" class="text-wrapper"><span
                  class="refresh-text">今日头条推荐引擎有x条更新</span>
                </div>
              </transition>
            </div>
          </div>
        </template>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        infoList: [],
        options: {
          pullDownRefresh: {
            threshold: 60,
            // stop: 44,
            stopTime: 1000,
            txt: '更新成功'
          },
          pullUpLoad: true
        },
        secondStop: 26
      }
    },
    methods: {
      requestInfoList() {
        let self = this;
        let userToken = this.$app_store.state.userToken || '';
        this.$Ice_OrderService.queryAllByKey(userToken, this.searchContent, this.pullSize,
          new IceCallback(
            function (result) {
              console.log(result)
              self.infoList = result;
            },
            function (error) {
              console.log(error)
              setTimeout(() => {
                self.message.Toast(self,'warn', '信息大厅数据获取失败:error' + error, false);
                self.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
              }, 1000);
            }
          ))
      },
      onPullingDown() {
        setTimeout(() => {
          this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
        }, 1000)
      },
      onPullingUp() {
        setTimeout(() => {

        }, 1000)
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .content-scroll-wrapper
    flex: 1
    position: relative
    .content-scroll-list-wrap
      height: 100%
      transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
      position: absolute
      top: 0
      bottom: 0
      overflow: hidden

  .cube-pulldown-wrapper
    text-align: center

  .before-trigger
    height: auto
    font-size: 30px
    align-self: flex-end
    span
      display: inline-block
      line-height: 1
      transition: all 0.3s
      color: #666
      padding: 15px 0
      &.rotate
        transform: rotate(180deg)
    .after-trigger
      flex: 1
      margin: 0
      .text-wrapper
        margin: 0 auto
        margin-top: 14px
        padding: 5px 0
        color: #498ec2
        background-color: #d6eaf8
      .cube-loading-spinners
        margin: auto

  .success-enter-active, .success-leave-active
    transition: width .5s

  .success-enter, .success-leave-to
    width: 70%

  .success-enter-to, .success-leave
    width: 100%

  .content .order_header {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 50px;
    margin-bottom: 80px;
  }

  .content .order_header .order_num {
    float: left;
  }

  .content .order_header .issue_order {
    float: right;
    width: 75px;
    height: 20px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 2px;
  }

  .list_content {
    margin: 0px 10px 0px 10px;
    margin: 0px 10px 0px 10px;

  }

  ul .order_box {
    margin-top: 15px;
  }

  ul .order_list {
    display: block;
    width: 100%;
    margin-top: 10px;
    height: 40px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
  }

  .order_price {
    width: 100%;
    height: 20px;
    font-weight: bold;
    margin-right: 10px;
  }

  .order_price .site {
    float: left;
  }

  .order_price .price {
    float: right;
    color: red;
  }

  .order_time {
    font-size: 14px;
  }

  .order_time .volume {
    float: left;
    margin-right: 13px;
  }

  .order_time .time {
    float: right;
  }
</style>
