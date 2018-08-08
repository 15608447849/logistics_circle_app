<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>查找好友</span>
      </div>
      <div class="width20">
        <i class="icon iconfont icon-gengduo1 colorWhite floatright" @click="toaddFriend"></i>
      </div>
    </div>
    <div class="searchFri">
      <div class="addFriendBox">
        <div class="searchFriendBox">
          <div class="searchFriend">
            <div class="friendSearchBtn">
              <i class="icon iconfont icon-sousuo"></i>
              <input type="text" class="friendSousuo" placeholder="搜索">
            </div>
          </div>
        </div>
        <span class="friendCanle">取消</span>
      </div>
      <p>按指定名称、电话查询</p>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
