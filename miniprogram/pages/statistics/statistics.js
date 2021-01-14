import * as echarts from '../../components/ec-canvas/echarts';

const app = getApp();
var pieOption = {
  //背景色
  backgroundColor: '#ffffff',
  //标题
  title:{
    show:true,
    text:'支出情况'
  },

  tooltip: {
      trigger: 'item',
      formatter: '{a} /n{b} : {c} ({d}%)'
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
              {value: 335, name: '学习'},
              {value: 410, name: '娱乐'},
              {value: 374, name: '日用'},
              {value: 335, name: '购物'},
              {value: 500, name: '饮食',}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'area',
          label: {
              color: 'rgb(0, 0, 0)'
          },
          labelLine: {
              lineStyle: {
                  color:'rgb(0, 0, 0)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
          },
          itemStyle: {
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
              return Math.random() * 200;
          }
      }
  ]
};
let getData = function(year,mouth){
  let days;
  if(mouth==11){
    days = new Date(year+1,0,0).getDate()
  }else{
    days = new Date(year,mouth+1,0).getDate();
  }
  // days = 5
  let date = new Date(year,mouth);
  let res = []
  for(let i = 1 ; i <= days ; i++){
    date.setDate(i);
    res.push([date.getTime(),25+Math.floor(Math.random()*10)])
  }
  return res
}

var lineOption = {
  backgroundColor:"#ffffff",
  xAxis: {
    type: 'time',
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
    data: getData(2021,0),
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
    },
    option:[
      {
        text:'支出',
        value:'out'
      },
      {
        text:'收入',
        value:'in'
      }
    ],
    value:'out',
    timeActive:0,
    mouthActive:0,
    yearActive:0
  },

  onReady() {
  },
  onShow(){
    this.setData({
      mouthActive:0,
      yearActive:0
    })
  },
  onTimeChange:function(params){
    this.setData({
      timeActive:params.detail.index
    })
    console.log(this.data.timeActive)
    }
  
});