<template>
  <div id="app" style="height: 100%;background:#f5f5f5;" >
    <!--<div class="yd-dialog-white-mask" v-show="isLoading">-->
      <!--<div class="yd-loading">-->
        <!--<div class="yd-loading-icon"></div>-->
        <!--<div class="yd-loading-txt" v-html="title"></div>-->
      <!--</div>-->
    <!--</div>-->
    <loading v-model="isLoading"></loading>
    <transition :name="transitionName">
      <keep-alive>
        <!--<router-view v-show="!isLoading"/>-->
        <router-view v-if="$route.meta.keepAlive" v-show="!isLoading">
          <!-- 这里是会被缓存的视图组件 -->
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" v-show="!isLoading">
        <!-- 这里是不被缓存的视图组件 -->
      </router-view>
    </transition>

  </div>
</template>

<script>
  import { Loading } from 'vux'
export default {
  computed: {
    isLoading() {
      return this.$app_store.state.isLoading
    }
  },
  components: {
    Loading
  },
  data() {
    return {
      title: '正在努力加载中~',
      transitionName: ''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
