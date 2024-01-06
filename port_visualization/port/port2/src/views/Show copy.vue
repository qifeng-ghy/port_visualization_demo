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
                            <div class="info-title">实时统计</div>
                            <img src="../img/bj-1.png" alt="" class="bj-1">
                            <img src="../img/bj-2.png" alt="" class="bj-2">
                            <img src="../img/bj-3.png" alt="" class="bj-3">
                            <img src="../img/bj-4.png" alt="" class="bj-4">
                            <div class="info-main">
                                <div class="info-1">
                                    <div class="info-img fl">
                                        <img src="../img/港口1.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <p>船只总流量(支)</p>
                                        <p>12,457</p>
                                    </div>
                                </div>
                                <div class="info-2">
                                    <div class="info-img fl">
                                        <img src="../img/港口2.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <p>当前在线数(辆)</p>
                                        <p>12,457</p>
                                    </div>
                                </div>
                                <div class="info-3">
                                    <div class="info-img fl">
                                        <img src="../img/港口.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <p>今日活跃数(辆)</p>
                                        <p>12,457</p>
                                    </div>
                                </div>
                                <div class="info-4">
                                    <div class="info-img fl">
                                        <img src="../img/港口 4.png" alt="">
                                    </div>
                                    <div class="info-text fl">
                                        <p>今日活跃率(%)</p>
                                        <p>83</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-bottom">
                            <div class="title">行业分类</div>
                            <img src="../img/bj-1.png" alt="" class="bj-1">
                            <img src="../img/bj-2.png" alt="" class="bj-2">
                            <img src="../img/bj-3.png" alt="" class="bj-3">
                            <img src="../img/bj-4.png" alt="" class="bj-4">
                            <div id="echarts_1" class="charts"></div>
                        </div>
                    </div>
                    <div class="left-bottom">
                        <div class="title">车型分类</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_2" class="charts"></div>
                    </div>
                </div>
                <div class="con-center fl">
                    <div class="map-num">
                        <p>实时行驶车辆(辆)</p>
                        <div class="num" style="padding-left: 1px;">
                            <span>1</span>
                            <span>,</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>,</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                        </div>
                    </div>
                    <div class="cen-top" id="map"></div>
                    <div class="cen-bottom">
                        <div class="title">车辆充电高峰时间</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_3" class="charts"></div>
                    </div>
                </div>
                <div class="con-right fr">
                    <div class="right-top">
                        <div class="title">本月行驶里程TOP5</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_4" class="charts"></div>
                    </div>
                    <div class="right-center">
                        <div class="title">报警车辆TOP5</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_5" class="charts"></div>
                    </div>
                    <div class="right-bottom">
                        <div class="title">电池报警车辆TOP10</div>
                        <img src="../img/bj-1.png" alt="" class="bj-1">
                        <img src="../img/bj-2.png" alt="" class="bj-2">
                        <img src="../img/bj-3.png" alt="" class="bj-3">
                        <img src="../img/bj-4.png" alt="" class="bj-4">
                        <div id="echarts_6" class="charts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import url(../css/common.css);
@import url(../css/map.css);

</style>

<script>
// @ is an alias to /src
// import * as echarts from 'echarts';
import {Allcharts} from "../js/echarts.js";
import * as china from "../js/china.js";
import $ from 'jquery';
// import jquery from 'jquery';、



export default {
  name: 'show',
  data(){
    return{
      hello:'',
      mychart1:'',
      mychart2:'',
      mychart3:'',
      mychart4:'',
      mychart5:'',
      mychart6:'', 
    }

  },
  created(){

  },
  mounted(){
    Allcharts();
  },
  methods:{
    initChart(){
        // echarts.charts_1();

    },

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
  