<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>添加好友</span>
      <div></div>
    </div>
    <div class="addFriendBox">
      <div class="searchFriendBox">
        <div class="searchFriend">
          <div class="friendSearchBtn">
            <i class="icon iconfont icon-sousuo"></i>
            <input type="text" class="friendSousuo" placeholder="输入名称、电话模糊查询">
          </div>
        </div>
      </div>
      <span class="friendCanle">取消</span>
    </div>
    <p class="maybe">可能认识的伙伴</p>
    <ul class="circleList">
      <li class="needBorder">
        <img src="" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
        <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
        <a class="pullBlack">添 加</a>
      </li>
      <li class="needBorder">
        <img src="" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
        <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
        <a class="pullBlack">添 加</a>
      </li>
      <li class="needBorder">
        <img src="" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
        <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
        <a class="pullBlack">添 加</a>
      </li>
      <li class="needBorder">
        <img src="" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">长沙大唐物流</span><span class="companyPhone floatright">18373278936</span></div>
        <div class="lineName"><span class="lineInfo">线路：湖南全境；长沙到广东(广州、惠州)</span></div>
        <a class="pullBlack">添 加</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      methods: {
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
