import * as echarts from 'echarts'; 
import * as chalk from '@/assets/js/chalk.js'
import * as china from '@/assets/js/china.js'
import axios from 'axios';

export default async function centerMap(containerId,portName,portLoc,portAmount,portBalance){
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart = echarts.init(chartContainer,chalk);  
    var data = [//绘制起点到终点的流线
        // 例 {name: '广州', value: '北京'},
         {name:'厦门',value:null},
         {name:'青岛',value:null},
         {name: '秦皇岛', value: null},
         {name: '泉州', value:null},
         {name: '上海',value:null},
         {name: '镇江',value:null},
         {name: '南京',value:null},
         {name: '张家港',value:null},
         {name: '舟山',value:null},
         {name: '扬州',value:null},
         {name: '天津',value:null},
         {name: '锦州',value:null},
         {name: '岚山',value:null},
         {name: '靖江',value:null},
         {name: '宁波',value:null},
         {name: '连云港',value:null},
         {name: '曹妃甸',value:null},
         {name: '常州',value:null},
         {name: '新会',value:null},
         {name: '台州',value:null},
         {name: '太仓',value:null},
         {name: '烟台',value:null},
         {name: '黄花',value:null},
         {name: '长江口',value:null},
         {name: '中山',value:null},
         {name: '大连',value:null},
         {name: '日照',value:null},
         {name: '钦州',value:null},
         {name: '龙口',value:null},
         {name: '东莞',value:null},
         {name: '温州',value:null},
         {name: '南通',value:null},
         {name: '惠州',value:null},
         {name: '洋浦',value:null},
         {name: '乍浦',value:null},
         {name: '马迹山',value:null},
         {name: '涪陵',value:null},
         {name: '南山',value:null},
         {name: '常熟',value:null},
         {name: '高港',value:null},
         {name: '宁德',value:null},
         {name: '威海',value:null},
         {name: '京唐',value:null},
         {name: '六横',value:null},
         {name: '铜陵',value:null},  
         {name: '湄洲岛',value:null},  
         {name: '漳州',value:null},   
         {name: '北海',value:null},  
         {name: '重庆',value:null},      
         {name: '珠江',value:null},  
         {name: '潍坊',value:null},  
         {name: '珠海',value:null},  
         {name: '龙海',value:null},  
         {name: '仪征',value:null},  
         {name: '东营',value:null},  
         {name: '罗源',value:null},  
         {name: '三亚',value:null},  
         {name: '深圳',value:null}, 
         {name: '广州',value:null}, 
         {name: '海口',value:null},  
         {name: '福州',value:null},  
         {name: '蓬莱',value:null},  
         {name: '滨州',value:null},  
         {name: '丽江',value:null},  
    ];
    //这里记录每个城市的坐标信息（不全）
    var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.05],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58],
    '江阴':[120.26,31.91],
    '丽江':[100.47,26.83],
    '涪陵':[106.93,29,60],
    '湄洲岛':[119.13,25.09],
    '长江口':[121,22,31.09],
    '曹妃甸':[118.38,39.13],
    '黄花':[117.52,38.19]
    };
    //根据data得到每个data中城市的坐标
    var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var fromCoord = geoCoordMap[data[i].name];//获取城市的坐标 source
        var toCoord = geoCoordMap[data[i].value];//获取城市的坐标 destination
        if (fromCoord && toCoord) {
            res.push({
                fromName: data[i].name,
                toName: data[i].value,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
    };
    //根据data得到放射光标效果图。如果起始城市没有值的话，就只显示目的城市
    var province= [
        { name: '北京', value: 0 },
        { name: '天津', value: 200 },
        { name: '上海', value: 600 },
        { name: '重庆', value: 4 },
        { name: '河北', value: 5 },
        { name: '河南', value: 6 },
        { name: '云南', value: 7 },
        { name: '辽宁', value: 8 },
        { name: '黑龙江', value: 9 },
        { name: '湖南', value: 10 },
        { name: '安徽', value: 11 },
        { name: '山东', value: 12 },
        { name: '新疆', value: 134 },
        { name: '江苏', value: 14 },
        { name: '浙江', value: 151 },
        { name: '江西', value: 16 },
        { name: '湖北', value: 17 },
        { name: '广西', value: 18 },
        { name: '甘肃', value: 192 },
        { name: '山西', value: 20 },
        { name: '内蒙古', value: 21 },
        { name: '陕西', value: 22 },
        { name: '吉林', value: 23 },
        { name: '福建', value: 242 },
        { name: '贵州', value: 25 },
        { name: '广东', value: 26 },
        { name: '青海', value: 273 },
        { name: '西藏', value: 28 },
        { name: '四川', value: 29 },
        { name: '宁夏', value: 30 },
        { name: '海南', value: 31 },
        { name: '台湾', value: 32 },
        { name: '香港', value: 33 },
        { name: '澳门', value: 34 }
    ] //各省地图颜色数据依赖value

    var convertData1 = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            var geoCoord1 = geoCoordMap[data[i].value];
            if (geoCoord) 
            {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
            if(geoCoord1)
            {
                res.push({
                    name: data[i].value,
                    value: geoCoord1.concat(data[i].name)
                })
            }
        }
        return res;
    };
    
    //设置一些可选的参数
    // chart.setOption( {
    //     // visualMap: {
    //     //     show: false,
    //     //     min: 0,
    //     //     max: 600,
    //     //     left: 'left',
    //     //     top: 'bottom',
    //     //     text: ['高', '低'], // 文本，默认为数值文本
    //     //     calculable: true,
    //     //     seriesIndex: [1],
    //     //     inRange: {
    //     //         color: ['#22e5e8', '#0035f9','#22e5e8'] // 蓝绿

    //     //     }
    //     // },


    // tooltip : {
    //     trigger: 'item'
    // },

    // geo: {
    //     map: 'china',
    //     label: {
    //         emphasis: {
    //             show: true
    //         }
    //     },
    //     //是否可以点击鼠标、滚轮缩放
    //     roam: true,
    //     itemStyle: {
    //         normal: {//未选中
    //           	// areaColor: 'rgb(135, 247, 207)',
    //             borderWidth: 0.2, //设置外层边框
    //             borderColor:'black',
    //         },
    //         emphasis: { // 选中
    //             areaColor: '#49FFE9',
    //             // shadowColor: 'rgba(0,0,0,0.2)',
    //             shadowOffsetX: 0, // 阴影水平方向上的偏移距离
    //             shadowOffsetY: 4, // 阴影垂直方向上的偏移距离
    //             shadowBlur: 8, // 图形阴影的模糊大小。
    //             label: {
    //               show: true,
    //               textStyle: {
    //                 color: '#fff'
    //               }
    //             }
    //         }
    //     }
    // },
    // //series就是要绘制的地图的主体。是一个数组，也就是说可以有多个数据进行绘制。这里有两个，一个是两个城市的连线，一个是对两个城市进行高亮显示。其中的type是很重要的参数，主要有饼图、条形图、线、地图等等。具体的可以去参考官网上的配置手册。
    // series : 
    // [
    //     {
    //         type: 'map',
    //         map: 'china',
    //         geoIndex: 0,
    //         aspectScale: 0.75, //长宽比
    //         showLegendSymbol: false, // 存在legend时显示
    //         label: {
    //             normal: {
    //                 show: true
    //             },
    //             emphasis: {
    //                 show: false,
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             }
    //         },
    //         roam: true,
    //         itemStyle: {
    //             normal: {
    //                 areaColor: '#031525',
    //                 borderColor: '#3B5077',
    //             },
    //             emphasis: {
    //                 areaColor: '#2B91B7'
    //             }
    //         },
    //         animation: false,
    //         data: province
    //     },



    //     {//省份
    //         name: 'rode',
    //         type: 'lines',
    //         coordinateSystem: 'geo',
    //         data: convertData(data),
    //         // data:province,
    //         effect: {
    //             show: true,
    //             period: 6,
    //             trailLength: 0,
    //         },
    //         lineStyle: {
    //             normal: {
    //                 color:'orange',
    //                 width: 2,
    //                 opacity: 0.4,
    //                 curveness: 0.2
    //             }
    //         }
    //     },
    //     {//城市
    //         name: 'city',
    //         type: 'effectScatter',
    //         coordinateSystem: 'geo',
    //         rippleEffect: {
    //             brushType: 'stroke'
    //         },
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'right',
    //                 formatter: '{b}'
    //             }
    //         },
    //         symbolSize: 8,
    //         itemStyle: {
    //             normal: {
    //                 color:'yellow'
    //             }
    //         },
    //         data: convertData1(data)
    //     },
    // ]
    // });
    // 使用刚指定的配置项和数据显示图表。
    chart.setOption({
        tooltip: {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    borderWidth: 0.2,
                    borderColor: 'black',
                },
                emphasis: {
                    areaColor: '#49FFE9',
                    shadowOffsetX: 0,
                    shadowOffsetY: 4,
                    shadowBlur: 8,
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            }
        },
        visualMap: {  // 添加 visualMap 组件
            show:false,
            min: 0,  // 设置最小值
            max: 60,  // 设置最大值
            text: ['High', 'Low'],  // 文本显示
            realtime: false,  // 是否实时更新
            calculable: true,  // 是否支持拖拽
            inRange: {  // 定义颜色范围
                color: ['#22e5e8', '#0035f9']  // 设置颜色范围，这里用浅蓝到深蓝
            },
            seriesIndex: 0
        },
        series: [
            {
                type: 'map',
                map: 'china',
                geoIndex: 0,
                aspectScale: 0.75,
                showLegendSymbol: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: province
            },
            {
                name: 'rode',
                type: 'lines',
                coordinateSystem: 'geo',
                data: convertData(data),
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                },
                lineStyle: {
                    normal: {
                        color: 'orange',
                        width: 2,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                }
            },
            {
                name: '港口',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: 8,
                // 直接在这里设置 itemStyle 来定义颜色
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                },
                data: convertData1(data)
            },
        ]
    });
    





    chart.on('mouseover',async function (params) {  
        var name=null;
        let result;
        for(var i=0;i<data.length;i++){
            if(params.name==data[i].name){
                var name = params.name; // 鼠标移动到的区域名称，例如"北京"或"上海"等。 
            }
        }
        if(name!=null){
            result=await findPort(name);
            console.log(result);
            document.getElementById(portName).innerText = '港口名称：' + name; // 在div中显示数据。
            document.getElementById(portLoc).innerText = '港口所处位置:' + result.tLocaltion;
            document.getElementById(portAmount).innerText = '港口流量:' + result.tAmount;
            document.getElementById(portBalance).innerText = '港口流入流出差值:'+result.tBalance;
        }
        else{
            document.getElementById(portName).innerText = '港口名称：' +'------'; //若鼠标移到省份时，则不显示相关数据
            document.getElementById(portLoc).innerText = '港口所处位置:' + '------';
            document.getElementById(portAmount).innerText = '港口流量:' + '------';
            document.getElementById(portBalance).innerText = '港口流入流出差值:'+ '------';
        }
        // var data = params.data; // 该区域的数据，具体内容取决于你的数据格式。这里只是一个示例。  

    });
    console.log(chart);
    return chart;

}


async function findPort(portName) {      
    console.log('portname='+portName); 
    var url = `http://localhost:3000/findPort?portName=${portName}`;  // url    
    try {    
      const response = await axios.get(url);    
      console.log('数据发送成功！', response);     
      console.log(response.data.length);  
      console.log(response.data);  
      return response.data[0];     
    } catch (error) {      
        console.error('发送数据时出现错误：', error);      
    }    
}
