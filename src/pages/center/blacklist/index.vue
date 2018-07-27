<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>黑名单</span>
      <div></div>
    </div>
    <div class="blackList">
      <div class="blackListNum">2个黑名单</div>
      <ul class="circleList">
        <li class="needBorder" @click="toblackDetails">
          <img src="" alt="" class="circlePic">
          <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span></div>
          <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
          <a class="pullBlack" @click.stop="removeClick">移 出</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
        },
      methods:{
        fallback() {
          this.$router.go(-1)
        },
        toblackDetails(){
          this.$router.push({
            path:'/center/blacklist/blackDetails'
          })
        }
      }
    }
</script>

<style scoped>

</style>
