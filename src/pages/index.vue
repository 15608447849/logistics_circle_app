<template>
  <div class="container">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <div class="nav-bar">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :useTransition = true
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '/',
        transitionName: '',
        selectedLabelDefault: '信息大厅',
        tabs: [{
          label: '首页',
          icon: 'cubeic-home'
        }, {
          label: '圈子',
          icon: 'cubeic-like'
        }, {
          label: '信息大厅',
          icon: 'cubeic-vip'
        }, {
          label: '我的订单',
          icon: 'cubeic-person'
        }]
      }
    },
    mounted() { //页面初始完成
      this.initBaseData();
      this.initAreaData();
    },
    methods: {
      clickHandler(label) {
        // if you clicked home tab, then print 'Home'
        let pageUrl = '/';
        switch (label) {
          case '首页':
            pageUrl = '/';
            break
          case '圈子':
            pageUrl = '/circle';
            break
          case '信息大厅':
            pageUrl = '/information';
            break
          case '我的订单':
            pageUrl = '/order';
            break
        }
        this.$router.push(pageUrl)
      },
      changeHandler(label) {
        // if you clicked different tab, this methods can be emitted
      },
      initBaseData() {
        let self = this;
        self.$Ice_SystemService.getBaseUnit(
          new IceCallback(
            function (result) {
              console.log(1,result)
              localStorage.setItem('unit', result);
              // self.initAreaData();
            }
          )
        );
      },
      initAreaData() {
        let self = this;
        self.$Ice_SystemService.getAreaCode(
          new IceCallback(
            function (result) {
              localStorage.setItem('area', result)
              console.log(2,result)
            }
          )
        );
      }
    },
    watch: {
      selected: function (val, oldvar) {
        this.$router.push(val)
      }
      ,
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }

  }
</script>
<style>
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .nav-bar {
    background: white;
    width: 100%;
    height: 1.5rem;
    position: fixed;
    bottom: 0;
  }
</style>
