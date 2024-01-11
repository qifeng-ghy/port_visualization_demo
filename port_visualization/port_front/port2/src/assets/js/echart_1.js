import * as echarts from 'echarts';
import * as ownset2 from '@/assets/js/ownset2.js'
import * as axios from 'axios';

export default function echart3(containerId){
    const chartContainer = document.getElementById(containerId);  
    if (!chartContainer) {  
      console.error(`Chart container with id ${containerId} not found.`);  
      return null;  
    }  
    const chart1 = echarts.init(chartContainer);  
    chart1.setOption( {
    tooltip: {
        trigger: 'item'
    },
    color:['rgb(248, 69, 241)','rgb(173, 70, 243)','rgb(80, 69, 246)','rgb(71, 119, 245)','rgb(68, 175, 240)','#7efc52'],
    legend: {
        top: '5%',
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false
    },
    // polar: {
    //   radius: '50%'
    // },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['30%', '100%'],
            center: ['50%', '50%'],
            // adjust the start angle
            roseType: {
                radius: '50%'
            },
            startAngle: 0,
            label: {
                show: true
                // formatter(param) {
                //   // correct the percentage
                //   return param.name + ' (' + param.percent * 2 + '%)';
                // }
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
                { value: 211, name: 'Geo' },
                {
                // make an record to fill the bottom 50%
                    value: 1048 + 735 + 580 + 484 + 300 + 211,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                        symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }
    ]
    });

    return chart1;
}