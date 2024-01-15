import * as echarts from 'echarts';
import * as ownset2 from '@/assets/js/ownset2.js'
import axios from 'axios';


export default async function echart1(containerId){
    // var grade=[0,0,0,0,0,0];//定义港口流量分层6层
    let grade=[
        {name:'0-600',value:0},
        {name:'600-1200',value:0},
        {name:'1200-1800',value:0},
        {name:'2400-3000',value:0},
        {name:'3000-3600',value:0},
        {name:'3600以上',value:0},
    ];

    let result= await getAll();
    console.log(result);
    for(var i=0;i<result.length;i++){
        if(result[i].tAmount>=0&&result[i].tAmount<600){
            grade[0].value++;
        }
        else if(result[i].tAmount>=600&&result[i].tAmount<1200){
            grade[1].value++;
        }
        else if(result[i].tAmount>=1200&&result[i].tAmount<1800){
            grade[2].value++;
        }
        else if(result[i].tAmount>=1800&&result[i].tAmount<2400){
            grade[3].value++;
        }
        else if(result[i].tAmount>=2400&&result[i].tAmount<3000){
            grade[4].value++;
        }
        else{
            grade[5].value++;
        }
    }
    grade.sort(function(a,b){//对获取的数据进行排序，从而方便应用到后面的图例中
        return b.value-a.value;
    });
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart1 = echarts.init(chartContainer,);  
    chart1.setOption( {
    tooltip: {
        trigger: 'item'
    },
    color:['rgb(248, 69, 241)','rgb(173, 70, 243)','rgb(80, 69, 246)','rgb(71, 119, 245)','rgb(68, 175, 240)','#7efc52'],
    legend: {
        top: '5%',
        left: 'center',
        // show: false,
        testStyle:{
            color:'#FFFFFF'
        },
        // label: {
        //     show: false,
        //     color: '#FFFFFF' // 这里设置文字颜色为白色
        // },
        // doesn't perfectly work with our tricks, disable it
        // selectedMode: false
    },
    series: [
        {
            name: '流量分段',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            // adjust the start angle
            roseType: {
                radius: '20%'
            },
            startAngle: 0,
            label: {
                show: true,
                 color: '#FFFFFF' // 这里设置文字颜色为白色
            },
            data: [
                { value: grade[0].value/grade[5].value, name: grade[0].name },
                { value: grade[1].value/grade[5].value, name: grade[1].name },
                { value: grade[2].value/grade[5].value, name: grade[2].name },
                { value: grade[3].value/grade[5].value, name: grade[3].name },
                { value: grade[4].value/grade[5].value, name: grade[4].name },
                { value: grade[5].value/grade[5].value, name: grade[5].name },
                // { value: grade[0].value/grade[5].value},
                // { value: grade[1].value/grade[5].value},
                // { value: grade[2].value/grade[5].value},
                // { value: grade[3].value/grade[5].value},
                // { value: grade[4].value/grade[5].value},
                // { value: grade[5].value/grade[5].value},
                {
                // make an record to fill the bottom 50%
                    value: (grade[0].value+grade[1].value+grade[2].value+grade[3].value+grade[4].value+grade[5].value)/grade[5].value,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                        symbol: 'none'
                        }
                    },
                    label: {
                        show: true,
                        color: '#FFFFFF' // 这里设置文字颜色为白色
                    }
                }
            ]
        }
    ]
    });
    return chart1;
}

async function getAll() {       
    var url = `http://localhost:3000/getAll`;  // url获取港口所有数据，用来进行流量分层
    try {    
      const response = await axios.get(url);    
      console.log('数据发送成功！', response);     
      console.log(response.data.length);    
      return response.data;     
    } catch (error) {      
        console.error('发送数据时出现错误：', error);      
    }    
}





            // data: [
            //     { value: 1048, name: 'Search Engine' },
            //     { value: 735, name: 'Direct' },
            //     { value: 580, name: 'Email' },
            //     { value: 484, name: 'Union Ads' },
            //     { value: 300, name: 'Video Ads' },
            //     { value: 211, name: 'Geo' },
            //     {
            //     // make an record to fill the bottom 50%
            //         value: 1048 + 735 + 580 + 484 + 300 + 211,
            //         itemStyle: {
            //             // stop the chart from rendering this piece
            //             color: 'none',
            //             decal: {
            //             symbol: 'none'
            //             }
            //         },
            //         label: {
            //             show: false
            //         }
            //     }
            // ]