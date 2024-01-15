<template>
    <div class="show">
        <div class="data">
            <div class="data-title">
                <div class="title-left fl"></div>
                <div class="title-center fl"></div>
                <div class="title-right fr"></div>
            </div>
            <div class="data-content">
                <div class="con-left fl">
                    <div class="left-top">
                        <div class="info">
                            <div class="info-title">港口属性</div>
                            <img src="../img/bj-1.png" alt="" class="bj-1">
                            <img src="../img/bj-2.png" alt="" class="bj-2">
                            <img src="../img/bj-3.png" alt="" class="bj-3">
                            <img src="../img/bj-4.png" alt="" class="bj-4">
                            <div class="info-main">
                                <!-- <div id="portName" style="color: white;"></div>
                                <div id="portLoc"></div>
                                <div id="portAmount"></div>
                                <div id="portBalance"></div> -->
                                <div class="info-1">
                                    <div class="info-img fl">
                                        <img src="../img/港口1.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <!-- <div id="portName1">港口名称:</div><br> -->
                                        <div id="portName"></div>
                                    </div>
                                </div>
                                <div class="info-2">
                                    <div class="info-img fl">
                                        <img src="../img/港口2.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <!-- <div id="portLoc1">港口位置:</div><br> -->
                                        <div id="portLoc"></div>
                                    </div>
                                </div>
                                <div class="info-3">
                                    <div class="info-img fl">
                                        <img src="../img/港口3.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <!-- <div id="portAmount1">港口数量：</div><br> -->
                                        <div id="portAmount"></div>
                                    </div>
                                </div>
                                <div class="info-4">
                                    <div class="info-img fl">
                                        <img src="../img/港口4.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <!-- <div id="portBalance1">港口流入流出差值：</div><br> -->
                                        <div id="portBalance"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-bottom">
                        <div class="title">港口流量分段</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_1" class="charts" style="color: white"></div>
                    </div>
                </div>
                <div class="con-center fl">
                    <div class="cen-top" id="map">
                        <div id="echarts_map" class="charts"></div>
                    </div>
                </div>
                <div class="con-right fr">
                    <div class="right-top">
                        <div class="title">港口流量TOP5</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_2" class="charts"></div>
                    </div>
                    <div class="right-bottom">
                        <div class="title">港口类型数量对比</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_3" class="charts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import url(../assets/css/common.css);
@import url(../assets/css/map.css);
@import url(../assets/css/box.css);


</style>

<script>
// @ is an alias to /src
import * as echarts from 'echarts';
// import {Allcharts} from "../js/echarts.js";
// import * as china from "../js/china.js";
import centerMap from '@/assets/js/echartmap'
import chart1 from '@/assets/js/echart_1'
import chart2 from '@/assets/js/echart_2'
import chart3 from '@/assets/js/echart_3'
// import jquery from 'jquery';、



export default {
  name: 'show',
  data(){
    return{
      hello:'',
      chart_1:'',
      chart_2:'',
      chart_3:'',
      chart_map:''
    }

  },
  created(){

  },
  mounted(){
    this.chart_map=centerMap('echarts_map','portName','portLoc','portAmount','portBalance');
    this.chart_1=chart1('echarts_1');
    this.chart_2=chart2('echarts_2');
    this.chart_3=chart3('echarts_3');
  },
  methods:{

  },

}
</script>

<style>
.show {
    width: 100%;
    height: 100%;
    /* Additional styles for positioning or overflow if necessary */
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto; /* or hidden, based on your layout */
}
</style>
  