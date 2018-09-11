<template>
  <div style="height: 100%;">
    <ul class="letter">
      <li class="colorBlueSan"
          v-for="item in citiesIndexer"
          :key="item"
          :ref="item"
          @click="handleItemClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >{{item}}
      </li>
    </ul>
  </div>
</template>
<script>

  import {ALPHABET_INDEX} from "../../store/mutation-types";

  export default {
    name: 'fsSideNav',
    props: {
      citiesIndexer: [Array,Object]
    },
    data() {
      return {
        touchStatus: false
      }
    },
    computed: {
      alphaBetIndex() {
        let alphaBetIndex = [];
        for(let key in this.citiesIndexer) {
          alphaBetIndex.push(key)
        }
        return alphaBetIndex
      }
    },
    methods: {
      updated() {
        this.startY = this.$refs[this.alphaBetIndex()[0]][0].offsetTop
      },
      handleItemClick(e) {
        this.$app_store.commit(ALPHABET_INDEX,e.target.innerText);
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if(this.touchStatus) {
          this.$app_store.commit(ALPHABET_INDEX,e.target.innerText);
          // if(this.timer) {
          //   clearTimeout(this.timer)
          // }
          // this.timer = setTimeout(() => {
          //   const startY = this.$refs[this.alphaBetIndex()[0]][0].offsetTop;
          //   const touchY = e.touches[0].clientY - 40;
          //   const index = Math.floor((touchY - startY)/20);
          //   if(index >= 0 && index < this.alphaBetIndex.length) {
          //     this.$app_store.commit(ALPHABET_INDEX,e.target.innerText);
          //   }
          // }, 16);
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>
<style>
  .colorBlueSan {
    color: #3189f5;
  }
  .letter li{
    width:.6rem;
    height:.37rem;
    text-align: center;
  }
  .letter{
    position:fixed;
    top:26vh;
    left:6.79rem;
    width:.5rem;
    height:66vh;
  }
</style>
