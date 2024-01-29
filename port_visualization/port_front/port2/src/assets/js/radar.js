import * as echarts from 'echarts'; // 如果你使用的是npm安装的echarts  
import * as china from '@/assets/js/china.js'
import axios from 'axios';
// 或者如果你使用的是本地文件，应该这样引入  
// import 'path/to/echarts.min.js';  
  

//两港口对比雷达T图
export default async function radar(containerId) {  
  const chartContainer = document.getElementById(containerId);  
  if (!chartContainer) {  
    console.error(`Chart container with id ${containerId} not found.`);  
    return null;  
  }  

  var point1=localStorage.getItem("point1");
  var point2=localStorage.getItem("point2");
  var data1,data2;
  if(point1==null){
    data1=null;
  }


  
  // var convertData= function(data){
  //     var result=[];
  //     for(var i=0;i<data.length;i++){
  //       result.push(data[i].tAmount);
  //     }
  // }


  const chart = echarts.init(chartContainer);  
  chart.setOption({  
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    // title: {
    //   text: 'Customized Radar Chart'
    // },
    legend: {
      textStyle:{
        color:'#ffffff',
        font_size: 13,
        margin_bottom:5,
      }
    },
    radar: [
      {
        indicator: [
          { text: '港口流量', max: 5000 },
          { text: '城市gdp', max: 50000 },
          { text: '人口增长率', max: 0.3 },
          // { text: '港口流入流出差值',max:400},
          // { text: '港口所在省市直辖区人口',max:}

          // { text: 'Indicator1', max: 150 },
          // { text: 'Indicator2', max: 150 },
          // { text: 'Indicator3', max: 150 },
          // { text: 'Indicator4', max: 120 },
          // { text: 'Indicator5', max: 108 },
          // { text: 'Indicator6', max: 72 }


        ],
        center: ['50%', '55%'],
        radius: 110,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        }
      }
    ],
    series: [
      // {
      //   type: 'radar',
      //   emphasis: {
      //     lineStyle: {
      //       width: 4
      //     }
      //   },
      //   data: [
      //     {
      //       value:  [120, 118, 130, 100, 99, 70],
      //       name: 'Data A',
      //       areaStyle:{
      //         color: 'rgba(103, 249, 216,0.6)'
      //       }
      //     },
      //     {
      //       value:[100, 93, 50, 90, 70, 60],
      //       name: 'Data B',
      //       areaStyle: {
      //         color: 'rgba(255, 228, 52, 0.6)'
      //       }
      //     }
      //   ]
        // data: [
        //   {
        //     value:  [data1.tAmount, data1.tCitygdp, data1.tGrow, data1.tBanlance],
        //     name: data1.name,
        //     areaStyle:{
        //       color: 'rgba(103, 249, 216,0.6)'
        //     }
        //   },
        //   {
        //     value: [data2.tAmount, data2.tCitygdp, data2.tGrow],
        //     name: data2.name,
        //     areaStyle: {
        //       color: 'rgba(255, 228, 52, 0.6)'
        //     }
        //   }
        // ]
      // },
    ]
  });  

  var data1,data2;
  if(point1==null){
    data1=null;
  }
  else{
    data1=await findPort(point1);
  }

  if(point2==null){
    data2=null;
  }
  else{
    data2=await findPort(point2);
  }

  getRaDar(chart,data1,data2);
  return chart; // 返回图表实例以便在Vue组件中操作图表（如果需要的话）  
}

//根据港口名查找某港口实体
async function findPort(portName) {      
  console.log('portname='+portName); 
  var url = `http://localhost:3000/findPort?portName=${portName}`;  // url    
  try {    
    const response = await axios.get(url);    
    console.log('数据发送成功！', response);     
    return response.data[0];     
  } catch (error) {      
      console.error('发送数据时出现错误：', error);      
  }    
}

//用于判断地图中是否选中了这两条数据
function getRaDar(chart,data1,data2){

  if(data1!=null){
    if(data2!=null){
      chart.setOption({
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value:  [data1.tAmount, data1.tCitygdp, data1.tGrow, data1.tBanlance],
                name: data1.tName,
                areaStyle:{
                  color: 'rgba(103, 249, 216,0.6)'
                }
              },
              {
                value: [data2.tAmount, data2.tCitygdp, data2.tGrow],
                name: data2.tName,
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          },
        ]
      })
    }
    else{
      chart.setOption({
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value:  [data1.tAmount, data1.tCitygdp, data1.tGrow],
                name: data1.tName,
                areaStyle:{
                  color: 'rgba(103, 249, 216,0.6)'
                }
              },
              {
                value: data2,
                name: 'nun',
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          },
        ]
      })
    }

  }
  else{
    if(data2!=null){
      chart.setOption({
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value:  data1,
                name: 'nun',
                areaStyle:{
                  color: 'rgba(103, 249, 216,0.6)'
                }
              },
              {
                value: [data2.tAmount, data2.tCitygdp, data2.tGrow],
                name: data2.tName,
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          },
        ]
      })
    }
    else{
      chart.setOption({
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value:  data1,
                name: 'nun',
                areaStyle:{
                  color: 'rgba(103, 249, 216,0.6)'
                }
              },
              {
                value: data2,
                name: 'nun',
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          },
        ]
      })
    }
  }
}
