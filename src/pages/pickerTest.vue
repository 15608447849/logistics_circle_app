<template>
  <cube-button @click="showCascadePicker">地区选择</cube-button>
</template>
<script>
  const cascadeData = [
    {
      "children":[
        {
          "children":[
            {
              "value":10000000,
              "text":"宣武区"
            }
          ],
          "value":100000,
          "text":"北京市"
        }
      ],
      "value":1000,
      "text":"北京"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102220,
          "text":"凉山彝族"
        },
        {
          "children":[

          ],
          "value":102200,
          "text":"成都"
        },
        {
          "children":[

          ],
          "value":102211,
          "text":"眉山"
        },
        {
          "children":[

          ],
          "value":102210,
          "text":"南充"
        },
        {
          "children":[

          ],
          "value":102209,
          "text":"乐山"
        },
        {
          "children":[

          ],
          "value":102202,
          "text":"攀枝花"
        },
        {
          "children":[

          ],
          "value":102213,
          "text":"广安"
        },
        {
          "children":[

          ],
          "value":102201,
          "text":"自贡"
        },
        {
          "children":[

          ],
          "value":102212,
          "text":"宜宾"
        },
        {
          "children":[

          ],
          "value":102204,
          "text":"德阳"
        },
        {
          "children":[

          ],
          "value":102215,
          "text":"雅安"
        },
        {
          "children":[

          ],
          "value":102203,
          "text":"泸州"
        },
        {
          "children":[

          ],
          "value":102214,
          "text":"达州"
        },
        {
          "children":[

          ],
          "value":102206,
          "text":"广元"
        },
        {
          "children":[

          ],
          "value":102217,
          "text":"资阳"
        },
        {
          "children":[

          ],
          "value":102205,
          "text":"绵阳"
        },
        {
          "children":[

          ],
          "value":102216,
          "text":"巴中"
        },
        {
          "children":[

          ],
          "value":102208,
          "text":"内江"
        },
        {
          "children":[

          ],
          "value":102219,
          "text":"甘孜藏族"
        },
        {
          "children":[

          ],
          "value":102207,
          "text":"遂宁"
        },
        {
          "children":[

          ],
          "value":102218,
          "text":"阿坝藏族"
        }
      ],
      "value":1022,
      "text":"四川"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102100,
          "text":"重庆市"
        }
      ],
      "value":1021,
      "text":"重庆"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102000,
          "text":"海口"
        },
        {
          "children":[

          ],
          "value":102011,
          "text":"澄迈县"
        },
        {
          "children":[

          ],
          "value":102010,
          "text":"屯昌县"
        },
        {
          "children":[

          ],
          "value":102002,
          "text":"三沙"
        },
        {
          "children":[

          ],
          "value":102013,
          "text":"白沙黎族"
        },
        {
          "children":[

          ],
          "value":102001,
          "text":"三亚"
        },
        {
          "children":[

          ],
          "value":102012,
          "text":"临高县"
        },
        {
          "children":[

          ],
          "value":102004,
          "text":"琼海市"
        },
        {
          "children":[

          ],
          "value":102015,
          "text":"乐东黎族"
        },
        {
          "children":[

          ],
          "value":102003,
          "text":"五指山市"
        },
        {
          "children":[

          ],
          "value":102014,
          "text":"昌江黎族"
        },
        {
          "children":[

          ],
          "value":102006,
          "text":"文昌市"
        },
        {
          "children":[

          ],
          "value":102017,
          "text":"保亭黎族"
        },
        {
          "children":[

          ],
          "value":102005,
          "text":"儋州市"
        },
        {
          "children":[

          ],
          "value":102016,
          "text":"陵水黎族"
        },
        {
          "children":[

          ],
          "value":102008,
          "text":"东方市"
        },
        {
          "children":[

          ],
          "value":102007,
          "text":"万宁市"
        },
        {
          "children":[

          ],
          "value":102018,
          "text":"琼中黎族"
        },
        {
          "children":[

          ],
          "value":102009,
          "text":"定安县"
        }
      ],
      "value":1020,
      "text":"海南"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101909,
          "text":"百色"
        },
        {
          "children":[

          ],
          "value":101902,
          "text":"桂林"
        },
        {
          "children":[

          ],
          "value":101913,
          "text":"崇左"
        },
        {
          "children":[

          ],
          "value":101901,
          "text":"柳州"
        },
        {
          "children":[

          ],
          "value":101912,
          "text":"来宾"
        },
        {
          "children":[

          ],
          "value":101904,
          "text":"北海"
        },
        {
          "children":[

          ],
          "value":101903,
          "text":"梧州"
        },
        {
          "children":[

          ],
          "value":101906,
          "text":"钦州"
        },
        {
          "children":[

          ],
          "value":101905,
          "text":"防城港"
        },
        {
          "children":[

          ],
          "value":101908,
          "text":"玉林"
        },
        {
          "children":[

          ],
          "value":101907,
          "text":"贵港"
        },
        {
          "children":[

          ],
          "value":101900,
          "text":"南宁"
        },
        {
          "children":[

          ],
          "value":101911,
          "text":"河池"
        },
        {
          "children":[

          ],
          "value":101910,
          "text":"贺州"
        }
      ],
      "value":1019,
      "text":"广西"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101802,
          "text":"深圳"
        },
        {
          "children":[

          ],
          "value":101813,
          "text":"河源"
        },
        {
          "children":[

          ],
          "value":101803,
          "text":"珠海"
        },
        {
          "children":[

          ],
          "value":101814,
          "text":"阳江"
        },
        {
          "children":[

          ],
          "value":101804,
          "text":"汕头"
        },
        {
          "children":[

          ],
          "value":101815,
          "text":"清远"
        },
        {
          "children":[

          ],
          "value":101805,
          "text":"佛山"
        },
        {
          "children":[

          ],
          "value":101816,
          "text":"东莞"
        },
        {
          "children":[

          ],
          "value":101806,
          "text":"江门"
        },
        {
          "children":[

          ],
          "value":101817,
          "text":"中山"
        },
        {
          "children":[

          ],
          "value":101807,
          "text":"湛江"
        },
        {
          "children":[

          ],
          "value":101818,
          "text":"潮州"
        },
        {
          "children":[

          ],
          "value":101808,
          "text":"茂名"
        },
        {
          "children":[

          ],
          "value":101819,
          "text":"揭阳"
        },
        {
          "children":[

          ],
          "value":101809,
          "text":"肇庆"
        },
        {
          "children":[

          ],
          "value":101820,
          "text":"云浮"
        },
        {
          "children":[

          ],
          "value":101810,
          "text":"惠州"
        },
        {
          "children":[

          ],
          "value":101800,
          "text":"广州"
        },
        {
          "children":[

          ],
          "value":101811,
          "text":"梅州"
        },
        {
          "children":[

          ],
          "value":101801,
          "text":"韶关"
        },
        {
          "children":[

          ],
          "value":101812,
          "text":"汕尾"
        }
      ],
      "value":1018,
      "text":"广东"
    },
    {
      "children":[
        {
          "children":[
            {
              "value":10170307,
              "text":"衡山县"
            },
            {
              "value":10170306,
              "text":"衡南县"
            },
            {
              "value":10170305,
              "text":"衡阳县"
            },
            {
              "value":10170304,
              "text":"南岳区"
            },
            {
              "value":10170303,
              "text":"郊 区"
            },
            {
              "value":10170302,
              "text":"城北区"
            },
            {
              "value":10170301,
              "text":"城南区"
            },
            {
              "value":10170300,
              "text":"江东区"
            },
            {
              "value":10170311,
              "text":"常宁市"
            },
            {
              "value":10170310,
              "text":"耒阳市"
            },
            {
              "value":10170309,
              "text":"祁东县"
            },
            {
              "value":10170308,
              "text":"衡东县"
            }
          ],
          "value":101703,
          "text":"衡阳"
        },
        {
          "children":[
            {
              "value":10170406,
              "text":"隆回县"
            },
            {
              "value":10170405,
              "text":"邵阳县"
            },
            {
              "value":10170404,
              "text":"新邵县"
            },
            {
              "value":10170403,
              "text":"邵东县"
            },
            {
              "value":10170402,
              "text":"北塔区"
            },
            {
              "value":10170401,
              "text":"大祥区"
            },
            {
              "value":10170400,
              "text":"双清区"
            },
            {
              "value":10170411,
              "text":"武冈市"
            },
            {
              "value":10170410,
              "text":"城步"
            },
            {
              "value":10170409,
              "text":"新宁县"
            },
            {
              "value":10170408,
              "text":"绥宁县"
            },
            {
              "value":10170407,
              "text":"洞口县"
            }
          ],
          "value":101704,
          "text":"邵阳"
        },
        {
          "children":[
            {
              "value":10170505,
              "text":"湘阴县"
            },
            {
              "value":10170504,
              "text":"华容县"
            },
            {
              "value":10170503,
              "text":"岳阳县"
            },
            {
              "value":10170502,
              "text":"君山区"
            },
            {
              "value":10170501,
              "text":"云溪区"
            },
            {
              "value":10170500,
              "text":"岳阳楼区"
            },
            {
              "value":10170508,
              "text":"临湘市"
            },
            {
              "value":10170507,
              "text":"汨罗市"
            },
            {
              "value":10170506,
              "text":"平江县"
            }
          ],
          "value":101705,
          "text":"岳阳"
        },
        {
          "children":[
            {
              "value":10170604,
              "text":"澧县"
            },
            {
              "value":10170603,
              "text":"汉寿县"
            },
            {
              "value":10170602,
              "text":"安乡县"
            },
            {
              "value":10170601,
              "text":"鼎城区"
            },
            {
              "value":10170600,
              "text":"武陵区"
            },
            {
              "value":10170608,
              "text":"津市市"
            },
            {
              "value":10170607,
              "text":"石门县"
            },
            {
              "value":10170606,
              "text":"桃源县"
            },
            {
              "value":10170605,
              "text":"临澧县"
            }
          ],
          "value":101706,
          "text":"常德"
        },
        {
          "children":[
            {
              "value":10170703,
              "text":"桑植县"
            },
            {
              "value":10170702,
              "text":"慈利县"
            },
            {
              "value":10170701,
              "text":"武陵源区"
            },
            {
              "value":10170700,
              "text":"永定区"
            }
          ],
          "value":101707,
          "text":"张家界"
        },
        {
          "children":[
            {
              "value":10170802,
              "text":"南县"
            },
            {
              "value":10170801,
              "text":"赫山区"
            },
            {
              "value":10170800,
              "text":"资阳区"
            },
            {
              "value":10170805,
              "text":"沅江市"
            },
            {
              "value":10170804,
              "text":"安化县"
            },
            {
              "value":10170803,
              "text":"桃江县"
            }
          ],
          "value":101708,
          "text":"益阳"
        },
        {
          "children":[
            {
              "value":10170901,
              "text":"苏仙区"
            },
            {
              "value":10170900,
              "text":"北湖区"
            },
            {
              "value":10170910,
              "text":"资兴市"
            },
            {
              "value":10170909,
              "text":"安仁县"
            },
            {
              "value":10170908,
              "text":"桂东县"
            },
            {
              "value":10170907,
              "text":"汝城县"
            },
            {
              "value":10170906,
              "text":"临武县"
            },
            {
              "value":10170905,
              "text":"嘉禾县"
            },
            {
              "value":10170904,
              "text":"永兴县"
            },
            {
              "value":10170903,
              "text":"宜章县"
            },
            {
              "value":10170902,
              "text":"桂阳县"
            }
          ],
          "value":101709,
          "text":"郴州"
        },
        {
          "children":[
            {
              "value":10171010,
              "text":"江华县"
            },
            {
              "value":10171000,
              "text":"芝山区"
            },
            {
              "value":10171001,
              "text":"冷水滩区"
            },
            {
              "value":10171002,
              "text":"祁阳县"
            },
            {
              "value":10171003,
              "text":"东安县"
            },
            {
              "value":10171004,
              "text":"双牌县"
            },
            {
              "value":10171005,
              "text":"道县"
            },
            {
              "value":10171006,
              "text":"江永县"
            },
            {
              "value":10171007,
              "text":"宁远县"
            },
            {
              "value":10171008,
              "text":"蓝山县"
            },
            {
              "value":10171009,
              "text":"新田县"
            }
          ],
          "value":101710,
          "text":"永州"
        },
        {
          "children":[
            {
              "value":10170008,
              "text":"浏阳市"
            },
            {
              "value":10170007,
              "text":"宁乡县"
            },
            {
              "value":10170006,
              "text":"望城县"
            },
            {
              "value":10170005,
              "text":"长沙县"
            },
            {
              "value":10170004,
              "text":"雨花区"
            },
            {
              "value":10170003,
              "text":"开福区"
            },
            {
              "value":10170002,
              "text":"岳麓区"
            },
            {
              "value":10170001,
              "text":"天心区"
            },
            {
              "value":10170000,
              "text":"芙蓉区"
            }
          ],
          "value":101700,
          "text":"长沙"
        },
        {
          "children":[
            {
              "value":10171110,
              "text":"通道县"
            },
            {
              "value":10171100,
              "text":"鹤城区"
            },
            {
              "value":10171111,
              "text":"洪江市"
            },
            {
              "value":10171101,
              "text":"中方县"
            },
            {
              "value":10171102,
              "text":"沅陵县"
            },
            {
              "value":10171103,
              "text":"辰溪县"
            },
            {
              "value":10171104,
              "text":"溆浦县"
            },
            {
              "value":10171105,
              "text":"会同县"
            },
            {
              "value":10171106,
              "text":"麻阳苗族"
            },
            {
              "value":10171107,
              "text":"新晃侗族"
            },
            {
              "value":10171108,
              "text":"芷江侗族"
            },
            {
              "value":10171109,
              "text":"靖州县"
            }
          ],
          "value":101711,
          "text":"怀化"
        },
        {
          "children":[
            {
              "value":10170108,
              "text":"醴陵市"
            },
            {
              "value":10170107,
              "text":"炎陵县"
            },
            {
              "value":10170106,
              "text":"茶陵县"
            },
            {
              "value":10170105,
              "text":"攸县"
            },
            {
              "value":10170104,
              "text":"株洲县"
            },
            {
              "value":10170103,
              "text":"天元区"
            },
            {
              "value":10170102,
              "text":"石峰区"
            },
            {
              "value":10170101,
              "text":"芦淞区"
            },
            {
              "value":10170100,
              "text":"荷塘区"
            }
          ],
          "value":101701,
          "text":"株洲"
        },
        {
          "children":[
            {
              "value":10171200,
              "text":"娄底市"
            },
            {
              "value":10171201,
              "text":"冷水江市"
            },
            {
              "value":10171202,
              "text":"涟源市"
            },
            {
              "value":10171203,
              "text":"双峰县"
            },
            {
              "value":10171204,
              "text":"新化县"
            }
          ],
          "value":101712,
          "text":"娄底"
        },
        {
          "children":[
            {
              "value":10170204,
              "text":"韶山市"
            },
            {
              "value":10170203,
              "text":"湘乡市"
            },
            {
              "value":10170202,
              "text":"湘潭县"
            },
            {
              "value":10170201,
              "text":"岳塘区"
            },
            {
              "value":10170200,
              "text":"雨湖区"
            }
          ],
          "value":101702,
          "text":"湘潭"
        },
        {
          "children":[
            {
              "value":10171300,
              "text":"吉首市"
            },
            {
              "value":10171301,
              "text":"泸溪县"
            },
            {
              "value":10171302,
              "text":"凤凰县"
            },
            {
              "value":10171303,
              "text":"花垣县"
            },
            {
              "value":10171304,
              "text":"保靖县"
            },
            {
              "value":10171305,
              "text":"古丈县"
            },
            {
              "value":10171306,
              "text":"永顺县"
            },
            {
              "value":10171307,
              "text":"龙山县"
            }
          ],
          "value":101713,
          "text":"湘西土家"
        }
      ],
      "value":1017,
      "text":"湖南"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101604,
          "text":"襄阳"
        },
        {
          "children":[

          ],
          "value":101615,
          "text":"天门"
        },
        {
          "children":[

          ],
          "value":101605,
          "text":"鄂州"
        },
        {
          "children":[

          ],
          "value":101616,
          "text":"神龙架"
        },
        {
          "children":[

          ],
          "value":101606,
          "text":"荆门"
        },
        {
          "children":[

          ],
          "value":101607,
          "text":"孝感"
        },
        {
          "children":[

          ],
          "value":101608,
          "text":"荆州"
        },
        {
          "children":[

          ],
          "value":101609,
          "text":"黄冈"
        },
        {
          "children":[

          ],
          "value":101610,
          "text":"咸宁"
        },
        {
          "children":[

          ],
          "value":101600,
          "text":"武汉"
        },
        {
          "children":[

          ],
          "value":101611,
          "text":"随州"
        },
        {
          "children":[

          ],
          "value":101601,
          "text":"黄石"
        },
        {
          "children":[

          ],
          "value":101612,
          "text":"恩施州"
        },
        {
          "children":[

          ],
          "value":101602,
          "text":"十堰"
        },
        {
          "children":[

          ],
          "value":101613,
          "text":"仙桃"
        },
        {
          "children":[

          ],
          "value":101603,
          "text":"宜昌"
        },
        {
          "children":[

          ],
          "value":101614,
          "text":"潜江"
        }
      ],
      "value":1016,
      "text":"湖北"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101505,
          "text":"鹤壁"
        },
        {
          "children":[

          ],
          "value":101516,
          "text":"驻马店"
        },
        {
          "children":[

          ],
          "value":101506,
          "text":"新乡"
        },
        {
          "children":[

          ],
          "value":101517,
          "text":"济源"
        },
        {
          "children":[

          ],
          "value":101507,
          "text":"焦作"
        },
        {
          "children":[

          ],
          "value":101508,
          "text":"濮阳"
        },
        {
          "children":[

          ],
          "value":101509,
          "text":"许昌"
        },
        {
          "children":[

          ],
          "value":101510,
          "text":"漯河"
        },
        {
          "children":[

          ],
          "value":101500,
          "text":"郑州"
        },
        {
          "children":[

          ],
          "value":101511,
          "text":"三门峡"
        },
        {
          "children":[

          ],
          "value":101501,
          "text":"开封"
        },
        {
          "children":[

          ],
          "value":101512,
          "text":"南阳"
        },
        {
          "children":[

          ],
          "value":101502,
          "text":"洛阳"
        },
        {
          "children":[

          ],
          "value":101513,
          "text":"商丘"
        },
        {
          "children":[

          ],
          "value":101503,
          "text":"平顶山"
        },
        {
          "children":[

          ],
          "value":101514,
          "text":"信阳"
        },
        {
          "children":[

          ],
          "value":101504,
          "text":"安阳"
        },
        {
          "children":[

          ],
          "value":101515,
          "text":"周口"
        }
      ],
      "value":1015,
      "text":"河南"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101406,
          "text":"潍坊"
        },
        {
          "children":[

          ],
          "value":101407,
          "text":"济宁"
        },
        {
          "children":[

          ],
          "value":101408,
          "text":"泰安"
        },
        {
          "children":[

          ],
          "value":101409,
          "text":"威海"
        },
        {
          "children":[

          ],
          "value":101410,
          "text":"日照"
        },
        {
          "children":[

          ],
          "value":101400,
          "text":"济南"
        },
        {
          "children":[

          ],
          "value":101411,
          "text":"莱芜"
        },
        {
          "children":[

          ],
          "value":101401,
          "text":"青岛"
        },
        {
          "children":[

          ],
          "value":101412,
          "text":"临沂"
        },
        {
          "children":[

          ],
          "value":101402,
          "text":"淄博"
        },
        {
          "children":[

          ],
          "value":101413,
          "text":"德州"
        },
        {
          "children":[

          ],
          "value":101403,
          "text":"枣庄"
        },
        {
          "children":[

          ],
          "value":101414,
          "text":"聊城"
        },
        {
          "children":[

          ],
          "value":101404,
          "text":"东营"
        },
        {
          "children":[

          ],
          "value":101415,
          "text":"滨州"
        },
        {
          "children":[

          ],
          "value":101405,
          "text":"烟台"
        },
        {
          "children":[

          ],
          "value":101416,
          "text":"菏泽"
        }
      ],
      "value":1014,
      "text":"山东"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101307,
          "text":"吉安"
        },
        {
          "children":[

          ],
          "value":101308,
          "text":"宜春"
        },
        {
          "children":[

          ],
          "value":101309,
          "text":"抚州"
        },
        {
          "children":[

          ],
          "value":101310,
          "text":"上饶"
        },
        {
          "children":[

          ],
          "value":101300,
          "text":"南昌"
        },
        {
          "children":[

          ],
          "value":101301,
          "text":"景德镇"
        },
        {
          "children":[

          ],
          "value":101302,
          "text":"萍乡"
        },
        {
          "children":[

          ],
          "value":101303,
          "text":"九江"
        },
        {
          "children":[

          ],
          "value":101304,
          "text":"新余"
        },
        {
          "children":[

          ],
          "value":101305,
          "text":"鹰潭"
        },
        {
          "children":[

          ],
          "value":101306,
          "text":"赣州"
        }
      ],
      "value":1013,
      "text":"江西"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101208,
          "text":"宁德"
        },
        {
          "children":[

          ],
          "value":101200,
          "text":"福州"
        },
        {
          "children":[

          ],
          "value":101201,
          "text":"厦门"
        },
        {
          "children":[

          ],
          "value":101202,
          "text":"莆田"
        },
        {
          "children":[

          ],
          "value":101203,
          "text":"三明"
        },
        {
          "children":[

          ],
          "value":101204,
          "text":"泉州"
        },
        {
          "children":[

          ],
          "value":101205,
          "text":"漳州"
        },
        {
          "children":[

          ],
          "value":101206,
          "text":"南平"
        },
        {
          "children":[

          ],
          "value":101207,
          "text":"龙岩"
        }
      ],
      "value":1012,
      "text":"福建"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101110,
          "text":"阜阳"
        },
        {
          "children":[

          ],
          "value":101100,
          "text":"合肥"
        },
        {
          "children":[

          ],
          "value":101111,
          "text":"宿州"
        },
        {
          "children":[

          ],
          "value":101109,
          "text":"滁州"
        },
        {
          "children":[

          ],
          "value":101101,
          "text":"芜湖"
        },
        {
          "children":[

          ],
          "value":101112,
          "text":"六安"
        },
        {
          "children":[

          ],
          "value":101102,
          "text":"蚌埠"
        },
        {
          "children":[

          ],
          "value":101113,
          "text":"亳州"
        },
        {
          "children":[

          ],
          "value":101103,
          "text":"淮南"
        },
        {
          "children":[

          ],
          "value":101114,
          "text":"池州"
        },
        {
          "children":[

          ],
          "value":101104,
          "text":"马鞍山"
        },
        {
          "children":[

          ],
          "value":101115,
          "text":"宣城"
        },
        {
          "children":[

          ],
          "value":101105,
          "text":"淮北"
        },
        {
          "children":[

          ],
          "value":101106,
          "text":"铜陵"
        },
        {
          "children":[

          ],
          "value":101107,
          "text":"安庆"
        },
        {
          "children":[

          ],
          "value":101108,
          "text":"黄山"
        }
      ],
      "value":1011,
      "text":"安徽"
    },
    {
      "children":[

      ],
      "value":1033,
      "text":"澳门"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":101010,
          "text":"丽水"
        },
        {
          "children":[

          ],
          "value":101000,
          "text":"杭州"
        },
        {
          "children":[

          ],
          "value":101001,
          "text":"宁波"
        },
        {
          "children":[

          ],
          "value":101002,
          "text":"温州"
        },
        {
          "children":[

          ],
          "value":101003,
          "text":"嘉兴"
        },
        {
          "children":[

          ],
          "value":101004,
          "text":"湖州"
        },
        {
          "children":[

          ],
          "value":101005,
          "text":"绍兴"
        },
        {
          "children":[

          ],
          "value":101006,
          "text":"金华"
        },
        {
          "children":[

          ],
          "value":101007,
          "text":"衢州"
        },
        {
          "children":[

          ],
          "value":101008,
          "text":"舟山"
        },
        {
          "children":[

          ],
          "value":101009,
          "text":"台州"
        }
      ],
      "value":1010,
      "text":"浙江"
    },
    {
      "children":[

      ],
      "value":1032,
      "text":"香港"
    },
    {
      "children":[

      ],
      "value":1031,
      "text":"台北"
    },
    {
      "children":[

      ],
      "value":1030,
      "text":"新疆"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100800,
          "text":"上海市"
        }
      ],
      "value":1008,
      "text":"上海"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100702,
          "text":"鸡西"
        },
        {
          "children":[

          ],
          "value":100703,
          "text":"鹤岗"
        },
        {
          "children":[

          ],
          "value":100704,
          "text":"双鸭山"
        },
        {
          "children":[

          ],
          "value":100705,
          "text":"大庆"
        },
        {
          "children":[

          ],
          "value":100706,
          "text":"伊春"
        },
        {
          "children":[

          ],
          "value":100707,
          "text":"佳木斯"
        },
        {
          "children":[

          ],
          "value":100708,
          "text":"七台河"
        },
        {
          "children":[

          ],
          "value":100709,
          "text":"牡丹江"
        },
        {
          "children":[

          ],
          "value":100710,
          "text":"黑河"
        },
        {
          "children":[

          ],
          "value":100700,
          "text":"哈尔滨"
        },
        {
          "children":[

          ],
          "value":100711,
          "text":"绥化"
        },
        {
          "children":[

          ],
          "value":100701,
          "text":"齐齐哈尔"
        },
        {
          "children":[

          ],
          "value":100712,
          "text":"大兴安岭"
        }
      ],
      "value":1007,
      "text":"黑龙江"
    },
    {
      "children":[

      ],
      "value":1029,
      "text":"宁夏"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100603,
          "text":"辽源"
        },
        {
          "children":[

          ],
          "value":100604,
          "text":"通化"
        },
        {
          "children":[

          ],
          "value":100605,
          "text":"白山"
        },
        {
          "children":[

          ],
          "value":100606,
          "text":"松原"
        },
        {
          "children":[

          ],
          "value":100607,
          "text":"白城"
        },
        {
          "children":[

          ],
          "value":100608,
          "text":"延边朝鲜"
        },
        {
          "children":[

          ],
          "value":100600,
          "text":"长春"
        },
        {
          "children":[

          ],
          "value":100601,
          "text":"吉林"
        },
        {
          "children":[

          ],
          "value":100602,
          "text":"四平"
        }
      ],
      "value":1006,
      "text":"吉林"
    },
    {
      "children":[

      ],
      "value":1028,
      "text":"青海"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100504,
          "text":"本溪"
        },
        {
          "children":[

          ],
          "value":100505,
          "text":"丹东"
        },
        {
          "children":[

          ],
          "value":100506,
          "text":"锦州"
        },
        {
          "children":[

          ],
          "value":100507,
          "text":"营口"
        },
        {
          "children":[

          ],
          "value":100508,
          "text":"阜新"
        },
        {
          "children":[

          ],
          "value":100509,
          "text":"辽阳"
        },
        {
          "children":[

          ],
          "value":100510,
          "text":"盘锦"
        },
        {
          "children":[

          ],
          "value":100500,
          "text":"沈阳"
        },
        {
          "children":[

          ],
          "value":100511,
          "text":"铁岭"
        },
        {
          "children":[

          ],
          "value":100501,
          "text":"大连"
        },
        {
          "children":[

          ],
          "value":100512,
          "text":"朝阳"
        },
        {
          "children":[

          ],
          "value":100502,
          "text":"鞍山"
        },
        {
          "children":[

          ],
          "value":100513,
          "text":"葫芦岛"
        },
        {
          "children":[

          ],
          "value":100503,
          "text":"抚顺"
        }
      ],
      "value":1005,
      "text":"辽宁"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102705,
          "text":"武威"
        },
        {
          "children":[

          ],
          "value":102704,
          "text":"天水"
        },
        {
          "children":[

          ],
          "value":102707,
          "text":"平凉"
        },
        {
          "children":[

          ],
          "value":102706,
          "text":"张掖"
        },
        {
          "children":[

          ],
          "value":102709,
          "text":"庆阳"
        },
        {
          "children":[

          ],
          "value":102708,
          "text":"酒泉"
        },
        {
          "children":[

          ],
          "value":102701,
          "text":"嘉峪关"
        },
        {
          "children":[

          ],
          "value":102700,
          "text":"兰州"
        },
        {
          "children":[

          ],
          "value":102703,
          "text":"白银"
        },
        {
          "children":[

          ],
          "value":102702,
          "text":"金昌"
        }
      ],
      "value":1027,
      "text":"甘肃"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100405,
          "text":"鄂尔多斯"
        },
        {
          "children":[

          ],
          "value":100406,
          "text":"呼伦贝尔"
        },
        {
          "children":[

          ],
          "value":100407,
          "text":"巴彦淖尔"
        },
        {
          "children":[

          ],
          "value":100408,
          "text":"乌兰察布"
        },
        {
          "children":[

          ],
          "value":100409,
          "text":"兴安盟"
        },
        {
          "children":[

          ],
          "value":100410,
          "text":"锡林郭勒"
        },
        {
          "children":[

          ],
          "value":100400,
          "text":"呼和浩特"
        },
        {
          "children":[

          ],
          "value":100411,
          "text":"阿拉善盟"
        },
        {
          "children":[

          ],
          "value":100401,
          "text":"包头"
        },
        {
          "children":[

          ],
          "value":100402,
          "text":"乌海"
        },
        {
          "children":[

          ],
          "value":100403,
          "text":"赤峰"
        },
        {
          "children":[

          ],
          "value":100404,
          "text":"通辽"
        }
      ],
      "value":1004,
      "text":"内蒙古"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102606,
          "text":"汉中"
        },
        {
          "children":[

          ],
          "value":102605,
          "text":"延安"
        },
        {
          "children":[

          ],
          "value":102608,
          "text":"安康"
        },
        {
          "children":[

          ],
          "value":102607,
          "text":"榆林"
        },
        {
          "children":[

          ],
          "value":102609,
          "text":"商洛"
        },
        {
          "children":[

          ],
          "value":102600,
          "text":"西安"
        },
        {
          "children":[

          ],
          "value":102602,
          "text":"宝鸡"
        },
        {
          "children":[

          ],
          "value":102601,
          "text":"铜川"
        },
        {
          "children":[

          ],
          "value":102604,
          "text":"渭南"
        },
        {
          "children":[

          ],
          "value":102603,
          "text":"咸阳"
        }
      ],
      "value":1026,
      "text":"陕西"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100306,
          "text":"晋中"
        },
        {
          "children":[

          ],
          "value":100307,
          "text":"运城"
        },
        {
          "children":[

          ],
          "value":100308,
          "text":"忻州"
        },
        {
          "children":[

          ],
          "value":100309,
          "text":"临汾"
        },
        {
          "children":[

          ],
          "value":100310,
          "text":"吕梁"
        },
        {
          "children":[

          ],
          "value":100300,
          "text":"太原"
        },
        {
          "children":[

          ],
          "value":100301,
          "text":"大同"
        },
        {
          "children":[

          ],
          "value":100302,
          "text":"阳泉"
        },
        {
          "children":[

          ],
          "value":100303,
          "text":"长治"
        },
        {
          "children":[

          ],
          "value":100304,
          "text":"晋城"
        },
        {
          "children":[

          ],
          "value":100305,
          "text":"朔州"
        }
      ],
      "value":1003,
      "text":"山西"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102506,
          "text":"林芝"
        },
        {
          "children":[

          ],
          "value":102501,
          "text":"昌都"
        },
        {
          "children":[

          ],
          "value":102500,
          "text":"拉萨"
        },
        {
          "children":[

          ],
          "value":102503,
          "text":"日喀则"
        },
        {
          "children":[

          ],
          "value":102502,
          "text":"山南"
        },
        {
          "children":[

          ],
          "value":102505,
          "text":"阿里"
        },
        {
          "children":[

          ],
          "value":102504,
          "text":"那曲"
        }
      ],
      "value":1025,
      "text":"西藏"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100207,
          "text":"承德"
        },
        {
          "children":[

          ],
          "value":100208,
          "text":"沧州"
        },
        {
          "children":[

          ],
          "value":100209,
          "text":"廊坊"
        },
        {
          "children":[

          ],
          "value":100210,
          "text":"衡水"
        },
        {
          "children":[

          ],
          "value":100200,
          "text":"石家庄"
        },
        {
          "children":[

          ],
          "value":100201,
          "text":"唐山"
        },
        {
          "children":[

          ],
          "value":100202,
          "text":"秦皇岛"
        },
        {
          "children":[

          ],
          "value":100203,
          "text":"邯郸"
        },
        {
          "children":[

          ],
          "value":100204,
          "text":"邢台"
        },
        {
          "children":[

          ],
          "value":100205,
          "text":"保定"
        },
        {
          "children":[

          ],
          "value":100206,
          "text":"张家口"
        }
      ],
      "value":1002,
      "text":"河北"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102408,
          "text":"楚雄"
        },
        {
          "children":[

          ],
          "value":102407,
          "text":"临沧"
        },
        {
          "children":[

          ],
          "value":102409,
          "text":"红河"
        },
        {
          "children":[

          ],
          "value":102400,
          "text":"昆明"
        },
        {
          "children":[

          ],
          "value":102411,
          "text":"西双版纳"
        },
        {
          "children":[

          ],
          "value":102410,
          "text":"文山"
        },
        {
          "children":[

          ],
          "value":102402,
          "text":"玉溪"
        },
        {
          "children":[

          ],
          "value":102413,
          "text":"德宏"
        },
        {
          "children":[

          ],
          "value":102401,
          "text":"曲靖"
        },
        {
          "children":[

          ],
          "value":102412,
          "text":"大理"
        },
        {
          "children":[

          ],
          "value":102404,
          "text":"昭通"
        },
        {
          "children":[

          ],
          "value":102415,
          "text":"迪庆"
        },
        {
          "children":[

          ],
          "value":102403,
          "text":"保山"
        },
        {
          "children":[

          ],
          "value":102414,
          "text":"怒江"
        },
        {
          "children":[

          ],
          "value":102406,
          "text":"普洱"
        },
        {
          "children":[

          ],
          "value":102405,
          "text":"丽江"
        }
      ],
      "value":1024,
      "text":"云南"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100100,
          "text":"天津市"
        },
        {
          "children":[

          ],
          "value":100101,
          "text":"阿萨德"
        }
      ],
      "value":1001,
      "text":"天津"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":102308,
          "text":"黔南"
        },
        {
          "children":[

          ],
          "value":102301,
          "text":"六盘水"
        },
        {
          "children":[

          ],
          "value":102300,
          "text":"贵阳"
        },
        {
          "children":[

          ],
          "value":102303,
          "text":"安顺"
        },
        {
          "children":[

          ],
          "value":102302,
          "text":"遵义"
        },
        {
          "children":[

          ],
          "value":102305,
          "text":"铜仁"
        },
        {
          "children":[

          ],
          "value":102304,
          "text":"毕节"
        },
        {
          "children":[

          ],
          "value":102307,
          "text":"黔东"
        },
        {
          "children":[

          ],
          "value":102306,
          "text":"黔西"
        }
      ],
      "value":1023,
      "text":"贵州"
    },
    {
      "children":[
        {
          "children":[

          ],
          "value":100908,
          "text":"盐城"
        },
        {
          "children":[

          ],
          "value":100909,
          "text":"扬州"
        },
        {
          "children":[

          ],
          "value":100900,
          "text":"南京"
        },
        {
          "children":[

          ],
          "value":100911,
          "text":"泰州"
        },
        {
          "children":[

          ],
          "value":100901,
          "text":"无锡"
        },
        {
          "children":[

          ],
          "value":100912,
          "text":"宿迁"
        },
        {
          "children":[

          ],
          "value":100902,
          "text":"徐州"
        },
        {
          "children":[

          ],
          "value":100903,
          "text":"常州"
        },
        {
          "children":[

          ],
          "value":100904,
          "text":"苏州"

        },
        {
          "children":[

          ],
          "value":100905,
          "text":"南通"
        },
        {
          "children":[

          ],
          "value":100906,
          "text":"连云港"
        },
        {
          "children":[

          ],
          "value":100907,
          "text":"淮安"
        },
        {
          "children":[

          ],
          "value":100910,
          "text":"镇江"
        }
      ],
      "value":1009,
      "text":"江苏"
    }
  ]
  export default {
    mounted () {
      this.cascadePicker = this.$createCascadePicker({
        title: '地区选择',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
</script>
<style>

</style>
