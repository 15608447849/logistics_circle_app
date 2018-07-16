<template>
  <div style="height: 100%;">
    <yd-navbar title="城市选择" bgcolor="#1E90FF" color="#FFFFFF" fontsize="16px">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
      </router-link>
      <!--<img slot="right" src="../../assets/images/small/logo_26.png"/>-->
    </yd-navbar>
    <cube-index-list
      :data="cityData"
      :title="title"
      @select="selectItem"
      @title-click="clickTitle"></cube-index-list>
  </div>
</template>
<script>
  const cityData = [
    {
      "name": "热门城市",
      "items": [
        {
          "name": "上海",
          "value": 1
        },
        {
          "name": "杭州",
          "value": 2
        },
        {
          "name": "南京",
          "value": 3
        },
        {
          "name": "北京",
          "value": 4
        },
        {
          "name": "长沙",
          "value": 5
        },
        {
          "name": "成都",
          "value": 5
        },
      ]
    },
    {
      "name": "A",
      "items": [
        {
          "name": "阿坝",
          "value": 3
        },
        {
          "name": "阿拉善",
          "value": 4
        },
        {
          "name": "阿里",
          "value": 4
        },
        {
          "name": "安康",
          "value": 4
        },
        {
          "name": "安庆",
          "value": 4
        },
        {
          "name": "鞍山",
          "value": 4
        },
        {
          "name": "安顺",
          "value": 4
        },
        {
          "name": "安阳",
          "value": 4
        },
        {
          "name": "澳门",
          "value": 4
        }
      ]
    },
    {
      "name": "B",
      "items": [
        {
          "name": "北京",
          "value": 3
        },
        {
          "name": "白银",
          "value": 4
        },
        {
          "name": "保定",
          "value": 4
        },
        {
          "name": "宝鸡",
          "value": 4
        },
        {
          "name": "保山",
          "value": 4
        },
        {
          "name": "包头",
          "value": 4
        },
        {
          "name": "巴中",
          "value": 4
        },
        {
          "name": "北海",
          "value": 4
        },
        {
          "name": "蚌埠",
          "value": 4
        },
        {
          "name": "本溪",
          "value": 4
        },
        {
          "name": "毕节",
          "value": 4
        },
        {
          "name": "滨州",
          "value": 4
        },
        {
          "name": "百色",
          "value": 4
        },
        {
          "name": "亳州",
          "value": 4
        }
      ]
    },
    {
      "name": "C",
      "items": [
        {
          "name": "重庆",
          "value": 3
        },
        {
          "name": "成都",
          "value": 4
        },
        {
          "name": "长沙",
          "value": 4
        },
        {
          "name": "长春",
          "value": 4
        },
        {
          "name": "沧州",
          "value": 4
        },
        {
          "name": "常德",
          "value": 4
        },
        {
          "name": "昌都",
          "value": 4
        },
        {
          "name": "长治",
          "value": 4
        },
        {
          "name": "常州",
          "value": 4
        },
        {
          "name": "巢湖",
          "value": 4
        },
        {
          "name": "潮州",
          "value": 4
        },
        {
          "name": "承德",
          "value": 4
        },
        {
          "name": "郴州",
          "value": 4
        },
        {
          "name": "赤峰",
          "value": 4
        },
        {
          "name": "池州",
          "value": 4
        },
        {
          "name": "赤峰",
          "value": 4
        }
      ]
    },
  ]
  export default {
    data() {
      return {
        title: '当前城市: 长沙',
        cityData: cityData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }
</script>
<style>

</style>
