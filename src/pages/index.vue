<template>
  <div class="container">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <div class="nav-bar">
      <yd-tabbar active-color="#1E90FF">
        <yd-tabbar-item :title= item.title link="#" v-for="(item,index) in activeList" :key="index" @click.native="navBarClick(index)" :active=item.isActive>
          <yd-icon :name= item.name slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </div>
  </div>
</template>

<script>
  import {
    DICT,
    AREA
  } from '../store/mutation-types'
  export default {
    data() {
      return {
        transitionName: '',
        activeList: [{
          title: '首页',
          isActive: false,
          name: 'home'
        },{
          title: '圈子',
          isActive: false,
          name: 'discover'
        },{
          title: '信息大厅',
          isActive: true,
          name: 'feedback'
        },{
          title: '我的订单',
          isActive: false,
          name: 'ucenter-outline'
        }]
      }
    },
    mounted() {
      this.initBaseData();
      this.initAreaData();
    },
    methods: {
      handleActive(position) {
        this.activeList.forEach((val,index,array) =>{
          if(position === index) {
            val.isActive = true
          } else {
            val.isActive = false
          }
        });
      },
      navBarClick(index) {
        let path = '/';
        switch (index) {
          case 0:
            path = '/';
            break;
          case 1:
            path = '/circle';
            break;
          case 2:
            path = '/information';
            break;
          case 3:
            path = '/order';
            break;
        }
        this.handleActive(index);
        this.$router.push(path)
      },
      initBaseData() {
        let self = this;
        self.$Ice_SystemService.getBaseUnit(
          new IceCallback(
            function (result) {
              self.$app_store.commit(DICT, result);
            },
            function (error) {
              self.initBaseData();
            }
          )
        );
      },
      initAreaData() {
        let self = this;
        self.$Ice_SystemService.getAreaCode(
          new IceCallback(
            function (result) {
              self.$app_store.commit(AREA, JSON.stringify(JSON.parse(result).children));
            },
            function (error) {
              self.initAreaData();
            }
          )
        );
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
    /*background: white;*/
    width: 100%;
    /*height: 2.2rem;*/
    position: fixed;
    bottom: 0;
  }
</style>
