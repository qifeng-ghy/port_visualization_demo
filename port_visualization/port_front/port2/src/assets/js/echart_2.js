import * as echarts from 'echarts';
// import * as chalk from '@/assets/js'
import * as axios from 'axios';
import * as ownset2 from '@/assets/js/ownset2'

export default function echart1(containerId){
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart2 = echarts.init(chartContainer,ownset2);  
    var series = [
        {
            data: [5700, 5200, 4977, 4820, 4770],
            type: 'bar',
            stack: 'a',
            name: 'a'
        }
    ];
    const stackInfo = {};
    for (let i = 0; i < series[0].data.length; ++i) {
        for (let j = 0; j < series.length; ++j) {
            const stackName = series[j].stack;
            if (!stackName) {
            continue;
            }
            if (!stackInfo[stackName]) {
            stackInfo[stackName] = {
                stackStart: [],
                stackEnd: []
            };
            }
            const info = stackInfo[stackName];
            const data = series[j].data[i];
            if (data && data !== '-') {
            if (info.stackStart[i] == null) {
                info.stackStart[i] = j;
            }
            info.stackEnd[i] = j;
            }
        }
    }
    for (let i = 0; i < series.length; ++i) {
    const data = series[i].data;
    const info = stackInfo[series[i].stack];
        for (let j = 0; j < series[i].data.length; ++j) {
            // const isStart = info.stackStart[j] === i;
            const isEnd = info.stackEnd[j] === i;
            const topBorder = isEnd ? 130 : 0;
            const bottomBorder = 0;
            data[j] = {
            value: data[j],
            itemStyle: {
                borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
            }
            };
        }
    }

    chart2.setOption({
        xAxis: {
            type: 'category',
            data: ['上海', '广州', '厦门', '宁波', '天津']
        },
        yAxis: {
            type: 'value'
        },
        series: series,

    });

    return chart2;
}