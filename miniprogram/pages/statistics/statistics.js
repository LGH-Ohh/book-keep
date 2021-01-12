import * as echarts from '../../components/ec-canvas/echarts';

const app = getApp();
var pieOption = {
  backgroundColor: '#2c343c',


  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎',}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
              color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
          },
          itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
              return Math.random() * 200;
          }
      }
  ]
};
var lineOption = {
  backgroundColor:"#ffffff",
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
},
tooltip: {
  show: true,
  trigger: 'axis',
  axisPointer:{
    snap:true,
    label:{
      formatter:(params)=>`支出${params.value}`
    }
  }
},
grid:{
  left:'12%',
  top:'15%',
  right:'5%',
  bottom:'20%',
},
yAxis: {
    type: 'value'
},
series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
}]
}
function initChart(option,clickEvent) {

  return function(canvas, width, height, dpr){
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
  
   
  
    chart.setOption(option);
    clickEvent&&chart.on('click',clickEvent)
    return chart;
  }
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart(lineOption)
    },
    ec2:{
      onInit:initChart(pieOption,function(params){
        console.log(params)
      })
    }
  },

  onReady() {
  }
});