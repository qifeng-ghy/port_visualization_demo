import * as echarts from 'echarts';
// import * as chalk from '@/assets/js'
// import * as axios from 'axios';
import axios from 'axios';
import * as ownset2 from '@/assets/js/ownset2'

export default async function echart2(containerId){
    const chartContainer = document.getElementById(containerId);  
    let result=await getPort();
    console.log(result);
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart2 = echarts.init(chartContainer,ownset2);  
    var category=[];
    var barData=[];
    for(var i=0;i<5;i++){
      category.push(result[i].tName);
      barData.push(result[i].tAmount);
    }
    // // Generate data
    // let category = ['上海', '南通', '南京', '广州', '厦门'];
    
    // // let lineData = [];
    // let barData = [5100, 4982, 3327, 3090, 2936];
    // let barData=result;
    
    // option
    chart2.setOption({
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        }
      },
      grid:{
        right: 10,
      },
      xAxis: {
        data:category ,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [
        {
          name: '流量',
          type: 'bar',
          barWidth: 20,
          data: [],
          itemStyle: {
            borderRadius: 10,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ])
          },
          data: barData
        }
      ]
    });
    return chart2;
}


async function getPort() {       
    var url = `http://localhost:3000/getPort`;  // url获取某个港口信息   
    try {    
      const response = await axios.get(url);    
      console.log('数据发送成功！', response);     
      console.log(response.data.length);    
      return response.data;     
    } catch (error) {      
        console.error('发送数据时出现错误：', error);      
    }    
}
