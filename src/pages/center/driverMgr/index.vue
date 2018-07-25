<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>司机管理</span>
      <span @click="addDriver">添加</span>
    </div>
    <div class="driverBox">
      <div class="searchDriverBox">
        <div class="searchDriver">
          <div class="driverSearchBtn" @click="toPageSearch">
            <i class="icon iconfont icon-sousuo"></i>
            <span class="sousuo">搜索</span>
          </div>
        </div>
      </div>
      <ul class="driverList" id="mescroll">
        <li class="needBorder" v-for="(item,index) in drivers" :key="index" @click="editorDriver(item)">
          <div class="driverInfo">
            <div class="driverPic">
              <i class="icon iconfont icon-siji"></i>
            </div>
            <span class="driverName">{{item.name}}</span>
            <span class="driverPhone">{{item.phone}}</span>
          </div>
          <a :class="item.status === 32 ? 'driverStateYes' : 'driverStateNo'" @click.stop="isEnable" @click="isEnable(item,index)">{{item.status === 32 ? '启用' : '停用'}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import '../../../assets/css/mescroll.min.css'
  import '../../../assets/lib/mescroll.m'

  export default {
    data() {
      return {
        drivers: [],// 司机列表
        driverName: '',// 司机名称
        driverPhone: '',// 司机手机,
        driverStatus: '',// 状态 0 启用 32 停用
        driverType: '1', //  1,司机;132,业务员
        userId: this.$app_store.getters.userId || 4,
        // pageSize: '1'// 当前页数
        page: new cstruct.Page(),
      }
    },
    mounted() {
      this.initData();
      // this.initMescroll();
      this.getDriverList();
    },
    methods: {
      initData() {
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;
      },
      initMescroll() {
        self.mescroll = new MeScroll("mescroll", {
          up: {
            callback: self.onPullingUp, // 上拉回调
            //以下参数可删除,不配置
            isBounce: false, // 此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
            toTop: { //配置回到顶部按钮
              src: "../../assets/images/small/totop.png", // 默认滚动到1000px显示,可配置offset修改
              duration: 500// 回到顶部的动画时长, 默认300ms
            },
            empty: {
              // 配置列表无任何数据的提示
            },
          }
        });
      },
      toPageSearch() {

      },
      // 司机添加
      addDriver() {
        this.$router.push({
          name: 'driverInfo'
        })
      },
      editorDriver(item) {
        this.$router.push({
          name: 'driverInfo',
          params: item
        })
      },
      // 获取司机列表
      getDriverList() {
        let self = this;
        this.$Ice_InfoService.selectStaffInfo(this.driverName, this.driverPhone, this.driverStatus, this.driverType, this.userId, this.page, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.drivers = result.obj
            }
          },
          function (error) {
            self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
          }
        ))
      },
      /** 是否启用 */
      isEnable(item, index) {
        let title = '操作确认';
        let content = '';
        let self = this;
        let status = 1;
        if (item.status === 0) {
          // 停用
          status = 32;
          content = '司机停用后,该司机将无法进行取货等操作 ,您确认吗?';
        }else {
          // 启用
          status = 0;
          content = '司机启用后, 司机端将可以进行取货等操作 ,您确认吗?';
        }
        this.message.showAlert(this,title,content)
          .then(() => {
            self.$Ice_InfoService.updateStaffstatus(self.userId,item.uid,status,self.driverType, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  if(status === 0) {
                    self.message.Toast(self, 'correct', '司机启用成功', false);
                  }else {
                    self.message.Toast(self,'correct', '司机停用成功', false);
                  }
                  // 更新item
                  self.drivers[index].status = status;
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
              }
            ))
          })
          .catch(() => {

          })
      }

    }
  }
</script>

<style scoped>

</style>
