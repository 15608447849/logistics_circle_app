<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>黑名单</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div style="margin-top:5.5vh;">
      <!--<div class="blackList">-->
      <!--<div class="blackListNum">2个黑名单</div>-->

      <!--</div>-->
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <ul class="circleList">
          <li class="needBorder" @click="toComPInfo(item)" v-for="(item, index) in blackList" :key="index">
            <img src="" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span></div>
            <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
            <a class="pullBlack" @click.stop="removeClick(item,index)">移 出</a>
          </li>
        </ul>
      </van-list>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blackList: [], // 黑名单列表
        page: new cstruct.Page(),
        userId: this.$app_store.getters.userId,
        loading: false,
        finished: false
      }
    },
    mounted() {
      // 初始化数据
      this.initData();
    },
    methods: {
      initData() {
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;
      },
      onLoad() {
        let self = this;
        this.queryMyCircleBlackList(function (result) {
          self.page.pageIndex += 1; // 页码增加
          result.circleSeq.forEach((item, index, arr) => {
            let disRoute = '';
            if (item.routes !== null && item.routes.length > 0) {
              disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
            }
            item['disRoute'] = disRoute;
          });
          self.blackList = self.blackList.concat(result.circleSeq);
          if (self.blackList.length >= result.totalItems) {
            self.finished = true;
          }
        }, function (error) {
          self.finished = true;
          self.loading = false;
        });
      },
      queryMyCircleBlackList(successCallback, errorCallback) {
        let self = this;
        this.$Ice_CircleService.queryMyCircleBlackList(this.userId, this.page.pageIndex, this.page.pageSize, new IceCallback(
          function (result) {
            // 关闭加载动画
            self.loading = false;
            if (result.code !== 0) {
              // 关闭上推加载
              self.finished = true;
              // 显示列表无数据
              self.$vux.toast.text(result.msg, 'top');
              return
            }
            successCallback(result.obj)
          },
          function (error) {
            errorCallback(error);
          }
        ))
      },
      fallback() {
        this.$router.go(-1)
      },
      removeClick(item, index) {
        let content = '';
        let self = this;
        content = '您确定要将好友移除黑名单嘛?';
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.removeCircle(this.userId, item.compId, 512, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('黑名单移除成功', 'top');
                  self.blackList.splice(index, 1);
                } else {
                  self.$vux.toast.text('黑名单移除失败', 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.compId,
            status: 5
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
