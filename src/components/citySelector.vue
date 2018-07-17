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
  import {
    CURRENT_CITY
  } from '../store/mutation-types'
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
          "name": "崇左",
          "value": 4
        },
        {
          "name": "楚雄",
          "value": 4
        },
        {
          "name": "滁州",
          "value": 4
        },
        {
          "name": "朝阳",
          "value": 4
        }
      ]
    },
    {
      "name": "D",
      "items": [
        {
          "name": "大连",
          "value": 3
        },
        {
          "name": "东莞",
          "value": 4
        },
        {
          "name": "大理",
          "value": 4
        },
        {
          "name": "丹东",
          "value": 4
        },
        {
          "name": "大庆",
          "value": 4
        },
        {
          "name": "大同",
          "value": 4
        },
        {
          "name": "大兴安岭",
          "value": 4
        },
        {
          "name": "德宏",
          "value": 4
        },
        {
          "name": "德阳",
          "value": 4
        },
        {
          "name": "德州",
          "value": 4
        },
        {
          "name": "定西",
          "value": 4
        },
        {
          "name": "迪庆",
          "value": 4
        },
        {
          "name": "东营",
          "value": 4
        }
      ]
    },
    {
      "name": "E",
      "items": [
        {
          "name": "鄂尔多斯",
          "value": 3
        },
        {
          "name": "恩施",
          "value": 4
        },
        {
          "name": "鄂州",
          "value": 4
        }
      ]
    },
    {
      "name": "F",
      "items": [
        {
          "name": "福州",
          "value": 3
        },
        {
          "name": "防城港",
          "value": 4
        },
        {
          "name": "佛山",
          "value": 4
        },
        {
          "name": "抚顺",
          "value": 3
        },
        {
          "name": "抚州",
          "value": 4
        },
        {
          "name": "阜新",
          "value": 4
        },
        {
          "name": "阜阳",
          "value": 3
        }
      ]
    },
    {
      "name": "G",
      "items": [
        {
          "name": "广州",
          "value": 3
        },
        {
          "name": "桂林",
          "value": 4
        },
        {
          "name": "贵阳",
          "value": 4
        },
        {
          "name": "甘南",
          "value": 3
        },
        {
          "name": "赣州",
          "value": 4
        },
        {
          "name": "甘孜",
          "value": 4
        },
        {
          "name": "广安",
          "value": 3
        },
        {
          "name": "广元",
          "value": 3
        },
        {
          "name": "贵港",
          "value": 4
        },
        {
          "name": "果洛",
          "value": 4
        }
      ]
    },
    {
      "name": "H",
      "items": [
        {
          "name": "杭州",
          "value": 3
        },
        {
          "name": "哈尔滨",
          "value": 4
        },
        {
          "name": "合肥",
          "value": 4
        },
        {
          "name": "海口",
          "value": 3
        },
        {
          "name": "呼和浩特",
          "value": 4
        },
        {
          "name": "海北",
          "value": 4
        },
        {
          "name": "海东",
          "value": 3
        },
        {
          "name": "海南",
          "value": 3
        },
        {
          "name": "海西",
          "value": 4
        },
        {
          "name": "邯郸",
          "value": 4
        },
        {
          "name": "汉中",
          "value": 3
        },
        {
          "name": "鹤壁",
          "value": 4
        },
        {
          "name": "河池",
          "value": 4
        },
        {
          "name": "鹤岗",
          "value": 3
        },
        {
          "name": "黑河",
          "value": 4
        },
        {
          "name": "衡水",
          "value": 4
        },
        {
          "name": "衡阳",
          "value": 3
        },
        {
          "name": "河源",
          "value": 3
        },
        {
          "name": "贺州",
          "value": 4
        },
        {
          "name": "红河",
          "value": 4
        },
        {
          "name": "淮安",
          "value": 3
        },
        {
          "name": "淮北",
          "value": 4
        },
        {
          "name": "怀化",
          "value": 4
        },
        {
          "name": "淮南",
          "value": 3
        },
        {
          "name": "黄冈",
          "value": 4
        },
        {
          "name": "黄南",
          "value": 4
        },
        {
          "name": "黄山",
          "value": 3
        },
        {
          "name": "黄石",
          "value": 4
        },
        {
          "name": "惠州",
          "value": 4
        },
        {
          "name": "葫芦岛",
          "value": 3
        },
        {
          "name": "呼伦贝尔",
          "value": 4
        },
        {
          "name": "湖州",
          "value": 4
        },
        {
          "name": "菏泽",
          "value": 3
        }
      ]
    },
    {
      "name": "J",
      "items": [
        {
          "name": "济南",
          "value": 3
        },
        {
          "name": "佳木斯",
          "value": 4
        },
        {
          "name": "吉安",
          "value": 4
        },
        {
          "name": "江门",
          "value": 3
        },
        {
          "name": "焦作",
          "value": 4
        },
        {
          "name": "嘉兴",
          "value": 4
        },
        {
          "name": "嘉峪关",
          "value": 3
        },
        {
          "name": "揭阳",
          "value": 3
        },
        {
          "name": "吉林",
          "value": 4
        },
        {
          "name": "金昌",
          "value": 4
        },
        {
          "name": "晋城",
          "value": 3
        },
        {
          "name": "景德镇",
          "value": 4
        },
        {
          "name": "荆门",
          "value": 4
        },
        {
          "name": "荆州",
          "value": 3
        },
        {
          "name": "金华",
          "value": 4
        },
        {
          "name": "济宁",
          "value": 4
        },
        {
          "name": "晋中",
          "value": 3
        },
        {
          "name": "锦州",
          "value": 3
        },
        {
          "name": "九江",
          "value": 4
        },
        {
          "name": "酒泉",
          "value": 4
        }
      ]
    },
    {
      "name": "K",
      "items": [
        {
          "name": "昆明",
          "value": 3
        },
        {
          "name": "开封",
          "value": 4
        }
      ]
    },
    {
      "name": "L",
      "items": [
        {
          "name": "兰州",
          "value": 3
        },
        {
          "name": "拉萨",
          "value": 4
        },
        {
          "name": "来宾",
          "value": 3
        },
        {
          "name": "莱芜",
          "value": 4
        },
        {
          "name": "廊坊",
          "value": 3
        },
        {
          "name": "乐山",
          "value": 4
        },
        {
          "name": "凉山",
          "value": 3
        },
        {
          "name": "连云港",
          "value": 4
        },
        {
          "name": "聊城",
          "value": 3
        },
        {
          "name": "辽阳",
          "value": 4
        },
        {
          "name": "辽源",
          "value": 3
        },
        {
          "name": "丽江",
          "value": 4
        },
        {
          "name": "临沧",
          "value": 3
        },
        {
          "name": "临汾",
          "value": 4
        },
        {
          "name": "临夏",
          "value": 3
        },
        {
          "name": "临沂",
          "value": 4
        },
        {
          "name": "林芝",
          "value": 3
        },
        {
          "name": "丽水",
          "value": 4
        },
        {
          "name": "六安",
          "value": 3
        },
        {
          "name": "六盘水",
          "value": 4
        },
        {
          "name": "柳州",
          "value": 3
        },
        {
          "name": "陇南",
          "value": 4
        },
        {
          "name": "龙岩",
          "value": 3
        },
        {
          "name": "娄底",
          "value": 4
        },
        {
          "name": "漯河",
          "value": 3
        },
        {
          "name": "洛阳",
          "value": 4
        },
        {
          "name": "泸州",
          "value": 3
        },
        {
          "name": "吕梁",
          "value": 4
        }
      ]
    },
    {
      "name": "M",
      "items": [
        {
          "name": "马鞍山",
          "value": 3
        },
        {
          "name": "茂名",
          "value": 4
        },
        {
          "name": "眉山",
          "value": 3
        },
        {
          "name": "梅州",
          "value": 4
        },
        {
          "name": "绵阳",
          "value": 3
        },
        {
          "name": "牡丹江",
          "value": 4
        }
      ]
    },
    {
      "name": "N",
      "items": [
        {
          "name": "南京",
          "value": 3
        },
        {
          "name": "南昌",
          "value": 4
        },
        {
          "name": "南宁",
          "value": 3
        },
        {
          "name": "宁波",
          "value": 4
        },
        {
          "name": "南充",
          "value": 3
        },
        {
          "name": "南平",
          "value": 4
        },
        {
          "name": "南通",
          "value": 3
        },
        {
          "name": "南阳",
          "value": 4
        },
        {
          "name": "那曲",
          "value": 3
        },
        {
          "name": "内江",
          "value": 4
        },
        {
          "name": "宁德",
          "value": 3
        },
        {
          "name": "怒江",
          "value": 4
        }
      ]
    },
    {
      "name": "P",
      "items": [
        {
          "name": "盘锦",
          "value": 3
        },
        {
          "name": "攀枝花",
          "value": 4
        },
        {
          "name": "平顶山",
          "value": 3
        },
        {
          "name": "平凉",
          "value": 4
        },
        {
          "name": "萍乡",
          "value": 3
        },
        {
          "name": "莆田",
          "value": 4
        },
        {
          "name": "濮阳",
          "value": 3
        }
      ]
    },
    {
      "name": "Q",
      "items": [
        {
          "name": "青岛",
          "value": 3
        },
        {
          "name": "黔南",
          "value": 4
        },
        {
          "name": "庆阳",
          "value": 3
        },
        {
          "name": "清远",
          "value": 4
        },
        {
          "name": "秦皇岛",
          "value": 3
        },
        {
          "name": "钦州",
          "value": 4
        },
        {
          "name": "齐齐哈尔",
          "value": 3
        },
        {
          "name": "泉州",
          "value": 3
        },
        {
          "name": "曲靖",
          "value": 4
        },
        {
          "name": "衢州",
          "value": 3
        }
      ]
    },
    {
      "name": "R",
      "items": [
        {
          "name": "日喀则",
          "value": 3
        },
        {
          "name": "日照",
          "value": 4
        }
      ]
    },
    {
      "name": "S",
      "items": [
        {
          "name": "上海",
          "value": 3
        },
        {
          "name": "深圳",
          "value": 4
        },
        {
          "name": "苏州",
          "value": 3
        },
        {
          "name": "沈阳",
          "value": 4
        },
        {
          "name": "石家庄",
          "value": 3
        },
        {
          "name": "三门峡",
          "value": 4
        },
        {
          "name": "三明",
          "value": 3
        },
        {
          "name": "三亚",
          "value": 4
        },
        {
          "name": "商洛",
          "value": 3
        },
        {
          "name": "商丘",
          "value": 4
        },
        {
          "name": "上饶",
          "value": 3
        },
        {
          "name": "山南",
          "value": 4
        },
        {
          "name": "汕头",
          "value": 3
        },
        {
          "name": "汕尾",
          "value": 4
        },
        {
          "name": "韶关",
          "value": 3
        },
        {
          "name": "绍兴",
          "value": 4
        },
        {
          "name": "邵阳",
          "value": 3
        },
        {
          "name": "十堰",
          "value": 4
        },
        {
          "name": "朔州",
          "value": 3
        },
        {
          "name": "四平",
          "value": 4
        },
        {
          "name": "绥化",
          "value": 3
        },
        {
          "name": "遂宁",
          "value": 4
        },
        {
          "name": "随州",
          "value": 3
        },
        {
          "name": "宿迁",
          "value": 4
        },
        {
          "name": "宿州",
          "value": 4
        }
      ]
    },
    {
      "name": "T",
      "items": [
        {
          "name": "天津",
          "value": 3
        },
        {
          "name": "太原",
          "value": 4
        },
        {
          "name": "泰安",
          "value": 3
        },
        {
          "name": "泰州",
          "value": 4
        },
        {
          "name": "台州",
          "value": 3
        },
        {
          "name": "唐山",
          "value": 4
        },
        {
          "name": "天水",
          "value": 3
        },
        {
          "name": "铁岭",
          "value": 4
        },
        {
          "name": "铜川",
          "value": 3
        },
        {
          "name": "通化",
          "value": 4
        },
        {
          "name": "通辽",
          "value": 3
        },
        {
          "name": "铜陵",
          "value": 4
        },
        {
          "name": "铜仁",
          "value": 3
        },
        {
          "name": "台湾",
          "value": 4
        }
      ]
    },
    {
      "name": "W",
      "items": [
        {
          "name": "武汉",
          "value": 3
        },
        {
          "name": "乌鲁木齐",
          "value": 4
        },
        {
          "name": "无锡",
          "value": 3
        },
        {
          "name": "威海",
          "value": 4
        },
        {
          "name": "潍坊",
          "value": 3
        },
        {
          "name": "文山",
          "value": 4
        },
        {
          "name": "温州",
          "value": 3
        },
        {
          "name": "乌海",
          "value": 4
        },
        {
          "name": "芜湖",
          "value": 3
        },
        {
          "name": "乌兰察布",
          "value": 4
        },
        {
          "name": "武威",
          "value": 3
        },
        {
          "name": "梧州",
          "value": 4
        }
      ]
    },
    {
      "name": "X",
      "items": [
        {
          "name": "厦门",
          "value": 3
        },
        {
          "name": "西安",
          "value": 4
        },
        {
          "name": "西宁",
          "value": 3
        },
        {
          "name": "襄樊",
          "value": 4
        },
        {
          "name": "湘潭",
          "value": 3
        },
        {
          "name": "湘西",
          "value": 4
        },
        {
          "name": "咸宁",
          "value": 3
        },
        {
          "name": "咸阳",
          "value": 4
        },
        {
          "name": "孝感",
          "value": 3
        },
        {
          "name": "邢台",
          "value": 4
        },
        {
          "name": "新乡",
          "value": 3
        },
        {
          "name": "信阳",
          "value": 4
        },
        {
          "name": "新余",
          "value": 3
        },
        {
          "name": "忻州",
          "value": 4
        },
        {
          "name": "西双版纳",
          "value": 3
        },
        {
          "name": "宣城",
          "value": 4
        },
        {
          "name": "许昌",
          "value": 3
        },
        {
          "name": "徐州",
          "value": 4
        },
        {
          "name": "香港",
          "value": 3
        },
        {
          "name": "锡林郭勒",
          "value": 4
        },
        {
          "name": "兴安",
          "value": 3
        }
      ]
    },
    {
      "name": "Y",
      "items": [
        {
          "name": "银川",
          "value": 3
        },
        {
          "name": "雅安",
          "value": 4
        },
        {
          "name": "延安",
          "value": 3
        },
        {
          "name": "延边",
          "value": 4
        },
        {
          "name": "盐城",
          "value": 3
        },
        {
          "name": "阳江",
          "value": 4
        },
        {
          "name": "阳泉",
          "value": 3
        },
        {
          "name": "扬州",
          "value": 4
        },
        {
          "name": "烟台",
          "value": 3
        },
        {
          "name": "宜宾",
          "value": 4
        },
        {
          "name": "宜昌",
          "value": 3
        },
        {
          "name": "宜春",
          "value": 4
        },
        {
          "name": "营口",
          "value": 3
        },
        {
          "name": "益阳",
          "value": 4
        },
        {
          "name": "永州",
          "value": 3
        },
        {
          "name": "岳阳",
          "value": 4
        },
        {
          "name": "榆林",
          "value": 3
        },
        {
          "name": "运城",
          "value": 4
        },
        {
          "name": "云浮",
          "value": 3
        },
        {
          "name": "玉树",
          "value": 4
        },
        {
          "name": "玉溪",
          "value": 3
        },
        {
          "name": "玉林",
          "value": 3
        }
      ]
    },
    {
      "name": "Z",
      "items": [
        {
          "name": "枣阳市",
          "value": 3
        },
        {
          "name": "增城市",
          "value": 4
        },
        {
          "name": "扎赉特旗",
          "value": 3
        },
        {
          "name": "扎兰屯市",
          "value": 4
        },
        {
          "name": "张家港",
          "value": 3
        },
        {
          "name": "张家界",
          "value": 4
        },
        {
          "name": "张家口",
          "value": 3
        },
        {
          "name": "漳平",
          "value": 4
        },
        {
          "name": "章丘",
          "value": 3
        },
        {
          "name": "樟树",
          "value": 4
        },
        {
          "name": "漳州",
          "value": 3
        },
        {
          "name": "湛江",
          "value": 4
        },
        {
          "name": "肇庆",
          "value": 3
        },
        {
          "name": "郑州",
          "value": 4
        },
        {
          "name": "镇江",
          "value": 3
        },
        {
          "name": "枝江",
          "value": 4
        },
        {
          "name": "中山",
          "value": 3
        },
        {
          "name": "周口",
          "value": 4
        },
        {
          "name": "舟山",
          "value": 3
        },
        {
          "name": "珠海",
          "value": 4
        },
        {
          "name": "驻马店",
          "value": 3
        },
        {
          "name": "资兴",
          "value": 3
        },
        {
          "name": "株洲",
          "value": 3
        },
        {
          "name": "自贡",
          "value": 3
        },
      ]
    },
  ]
  export default {
    data() {
      return {
        title: '当前城市选中: 长沙',
        cityData: cityData,
        currentCity: ''
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      initData() {
        this.currentCity = this.$app_store.getters.currentCity || '北京';
        this.title = '当前城市选中:' + this.currentCity;
      },
      selectItem(item) {
        debugger
        this.$app_store.commit(CURRENT_CITY,item.name);
        this.$router.go(-1);
      },
      clickTitle(title) {
        this.$router.go(-1);
      }
    }
  }
</script>
<style>

</style>
