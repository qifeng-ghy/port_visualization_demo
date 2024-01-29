import * as echarts from 'echarts';
import * as ownset4 from '@/assets/js/ownset4.js'
import axios from 'axios';
import get from 'core-js/library/fn/reflect/get';
import { data } from 'jquery';



export default async function echart3(containerId){
    var bohai=0,nanhai=0,donghai=0,huanghai=0;
    var land=await getLand();
    var bohai=await getBohai();
    var nanhai=await getNanhai();
    var donghai= await getDonghai();
    var huanghai=await getHuanghai();
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart3 = echarts.init(chartContainer,ownset4); 

    chart3.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        // formatter: function(params) {  
        //   return '<span style="color: white;">' + params.a + '</span><br/>' +  
        //          params.b + ': ' + params.c + ' (' + params.d + '%)';  
        // }  
      },
      legend: {
        data: ['黄海', '东海', '南海', '渤海', '内陆'],
        left:'center',
        textStyle:{
          color:'#ffffff',
        }
      },
      color:['#ec4df8','#19edfd','#73ee4a','#8772ff','#4777F5'],
      series: [
        {
          name: '港口区域统计',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14
          },
          labelLine: {
            show: false,
            color: '#FFFFFF' // 这里设置文字颜色为白色
          },
          data: [
            { value: bohai, name: null },
            { value: donghai, name: null },
            { value: huanghai, name: null },
            { value: nanhai, name: null },
            { value: land, name: null }
          ]
        },
        {
          name: '港口区域',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },

          data: [
            { value: bohai, name: '渤海' },
            { value: donghai, name: '东海' },
            { value: huanghai, name: '黄海' },
            { value: nanhai, name: '南海' },
            { value: land, name: '内陆' }
          ]
        }
      ]
    });
          // label: {
          //   formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          //   backgroundColor: '#F6F8FC',
          //   borderColor: '#8C8D8E',
          //   borderWidth: 1,
          //   borderRadius: 4,
          //   rich: {
          //     a: {
          //       color: '#6E7079',
          //       lineHeight: 22,
          //       align: 'center'
          //     },
          //     hr: {
          //       borderColor: '#8C8D8E',
          //       width: '100%',
          //       borderWidth: 1,
          //       height: 0
          //     },
          //     b: {
          //       color: '#4C5058',
          //       fontSize: 14,
          //       fontWeight: 'bold',
          //       lineHeight: 33
          //     },
          //     per: {
          //       color: '#fff',
          //       backgroundColor: '#4C5058',
          //       padding: [3, 4],
          //       borderRadius: 4
          //     }
          //   }
          // },
    
    // console.log(chart3);
    return chart3;
}


async function getLand() {     
  var url = 'http://localhost:3000/land';  // url  
  try {  
    const response = await axios.get(url);  
    // console.log('数据发送成功！', response);   
    // console.log(response.data.length);  
    return response.data.length;   
  } catch (error) {    
      console.error('发送数据时出现错误：', error);    
  }  
}  


async function getBohai() {     
  var url = 'http://localhost:3000/bohai';  // url  
  try {  
    const response = await axios.get(url);  
    // console.log('数据发送成功！', response);   
    // console.log(response.data.length);  
    return response.data.length;   
  } catch (error) {    
      console.error('发送数据时出现错误：', error);    
  }  
}  
async function getDonghai() {     
  var url = 'http://localhost:3000/donghai';  // url  
  try {  
    const response = await axios.get(url);  
    // console.log('数据发送成功！', response);   
    // console.log(response.data.length);  
    return response.data.length;   
  } catch (error) {    
      console.error('发送数据时出现错误：', error);    
  }  
}  
async function getNanhai() {     
  var url = 'http://localhost:3000/nanhai';  // url  
  try {  
    const response = await axios.get(url);  
    // console.log('数据发送成功！', response);   
    // console.log(response.data.length);  
    return response.data.length;   
  } catch (error) {    
      console.error('发送数据时出现错误：', error);    
  }  
}  
async function getHuanghai() {     
  var url = 'http://localhost:3000/huanghai';  // url  
  try {  
    const response = await axios.get(url);  
    // console.log('数据发送成功！', response);   
    // console.log(response.data.length);  
    return response.data.length;   
  } catch (error) {    
      console.error('发送数据时出现错误：', error);    
  }  
}  
// async function useLandValue() {  
//     // 你的代码 
//   var result =await getLand(); // 调用 getLand 函数并获取返回值  
//   console.log('返回的 land 值：', result); // 打印返回的 land 值  
//   return result;
// }  
  


