import * as echarts from 'echarts';
import * as ownset2 from '@/assets/js/ownset2.js'
import axios from 'axios';
import { data } from 'jquery';

//货物流量图表
export default async function echart1(containerId){
    // var grade=[0,0,0,0,0,0];//定义港口流量分层6层
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart1 = echarts.init(chartContainer);  

    var portName=localStorage.getItem('portName');

    let result=await findGoods(portName);
    //柱状图X轴属性数据处理
    var convertData1=function(data){
      var name=[]; 
      for(var i=0;i<data.length;i++){
          name.push(data[i].gName);
      }
      return name;
    }
    //柱状图Y轴属性数据处理
    var convertData2=function(data){
      var value=[];
      for(var i=0;i<data.length;i++){
          value.push(data[i].gValue);
      }
      return value;
    }

    // 定义渐变色数组
    var gradientColors = [
      {
        offset: 0, color: 'rgb(71, 119, 245)'   // 渐变起始颜色
      },
      {
        offset: 1, color: 'rgb(25, 237, 253)'  // 渐变结束颜色
      }
    ];

    chart1.setOption( {
      xAxis: {
        type: 'category',
        data: convertData1(result),
        axisLabel: {
          interval: 0  // 固定每个属性的宽度
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: convertData2(result),
          type: 'bar',
          barWidth: 20 ,
          itemStyle: {
            // 设置渐变色
            normal: {
              // 设置半圆顶部
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: gradientColors
              },
              barBorderRadius: [30, 30, 0, 0]
            }
          }
        }
      ]
      // xAxis: {
      //   type: 'category',
      //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // },
      // yAxis: {
      //   type: 'value'
      // },
      // series: [
      //   {
      //     data: [120, 200, 150, 80, 70, 110, 130],
      //     type: 'bar'
      //   }
      // ]
    });
    return chart1;
}

// 根据港口名称查找与其相关的货物数据
async function findGoods(portName) {      
    console.log('portname='+portName); 
    var url = `http://localhost:3000/getGoods?portName=${portName}`;  // url    
    try {    
      const response = await axios.get(url);    
      console.log('数据发送成功！', response);     
      return response.data;     
    } catch (error) {      
        console.error('发送数据时出现错误：', error);      
    }    
}