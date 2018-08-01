<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="goBackPage"></i>
      <span>司机管理</span>
      <span @click="addDriver">添加</span>
    </div>
    <div class="downfixed havedownfixed">
      <div class="driverBox">
        <div class="searchDriverBox">
          <div class="searchDriver">
            <div class="driverSearchBtn" @click="toPageSearch">
              <i class="icon iconfont icon-sousuo"></i>
              <span class="sousuo">{{searchInputVal}}</span>
            </div>
          </div>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <ul class="driverList">
            <li class="needBorder" v-for="(item,index) in drivers" :key="index" @click="editorDriver(item)">
              <div class="driverInfo">
                <div class="driverPic">
                  <i class="icon iconfont icon-siji"></i>
                </div>
                <span class="driverName">{{item.name}}</span>
                <span class="driverPhone">{{item.phone}}</span>
              </div>
              <a :class="item.status === 32 ? 'driverStateYes' : 'driverStateNo'" @click.stop="isEnable"
                 @click="isEnable(item,index)">{{item.status === 32 ? '启用' : '停用'}}</a>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
  import {searchState} from '../../../utils/config'
  import {SEARCH_STATE} from "../../../store/mutation-types";

  export default {
    data() {
      return {
        drivers: [],// 司机列表
        driverName: '',// 司机名称
        driverPhone: '',// 司机手机,
        driverStatus: '',// 状态 0 启用 32 停用
        driverType: 1, //  1,司机;132,业务员
        userId: this.$app_store.getters.userId,
        // pageSize: '1'// 当前页数
        page: new cstruct.Page(),
        searchInputVal: '搜索',
        loading: false, // 控制加载动画
        finished: false // 控制是否执行上推加载
      }
    },
    mounted() {
      this.initData();
      // this.requestDriverList();
    },
    methods: {
      onLoad() {
        this.requestDriverList();
      },
      initData() {
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;
        // 搜索框搜索内容
        if (this.$app_store.getters.searchState === searchState.DRIVER) {
          this.searchInputVal = this.$app_store.getters.searchContent;
          // driverName 后端搜索条件
          this.driverName = this.searchInputVal;
          console.log(this.$app_store.getters.searchContent)
        }
      },
      toPageSearch() {
        // 存储到VUX 设置当前搜索状态
        this.$app_store.commit(SEARCH_STATE, searchState.DRIVER);
        this.$router.push({
          name: 'simpleSearch'
        })
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
      goBackPage() {
        this.$router.go(-1);
      },
      requestDriverList() {
        let self = this;
        this.$Ice_InfoService.selectStaffInfo(this.driverName, this.driverPhone, this.driverStatus, this.driverType, this.userId, this.page, new IceCallback(
          function (result) {
            self.loading = false;
            if (result.code === 0) {
              self.page.pageIndex += 1; // 页码增加
              self.drivers = self.drivers.concat(result.obj);
              if (self.drivers.length >= result.totalItems) {
                self.finished = true;
              }
            } else {
              self.finished = true;
              self.$vux.toast.text('司机管理列表获取失败, 请稍后重试', 'top');
            }
          },
          function (error) {
            self.finished = true;
            self.loading = false;
          }
        ))
      },
      /** 是否启用 */
      isEnable(item, index) {
        let content = '';
        let self = this;
        let status = 1;
        if (item.status === 0) {
          // 停用
          status = 32;
          content = '司机停用后,该司机将无法进行取货等操作 ,您确认吗?';
        } else {
          // 启用
          status = 0;
          content = '司机启用后, 司机端将可以进行取货等操作 ,您确认吗?';
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_InfoService.updateStaffstatus(self.userId, item.uid, status, self.driverType, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  if (status === 0) {
                    self.message.Toast(self, 'correct', '司机启用成功', false);
                  } else {
                    self.message.Toast(self, 'correct', '司机停用成功', false);
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
