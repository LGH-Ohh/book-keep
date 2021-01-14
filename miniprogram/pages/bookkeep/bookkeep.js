// miniprogram/pages/bookkeep/bookkeep.js
const payIcon = [
  {
    id:'diet',
    src:'../../images/diet.png',
    name:'饮食'
  },  {
    id:'shopping',
    src:'../../images/shopping.png',
    name:'购物'
  },  {
    id:'daily',
    src:'../../images/daily.png',
    name:'日用'
  },  {
    id:'entertainment',
    src:'../../images/entertainment.png',
    name:'娱乐'
  },  {
    id:'communication',
    src:'../../images/communication.png',
    name:'通讯'
  },  {
    id:'traffic',
    src:'../../images/traffic.png',
    name:'交通'
  },  {
    id:'study',
    src:'../../images/study.png',
    name:'学习'
  },  {
    id:'pay',
    src:'../../images/pay.png',
    name:'其他'
  },
]
const incomeIcon = [
  {
    id:'salary',
    src:'../../images/salary.png',
    name:'工资'
  },
  {
    id:'part-time',
    src:'../../images/part-time.png',
    name:'兼职'
  },
  {
    id:'manage-money',
    src:'../../images/manage-money.png',
    name:'理财'
  },
  {
    id:'income',
    src:'../../images/income.png',
    name:'其他'
  },
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payIcon :payIcon ,
    incomeIcon:incomeIcon,
    desc:'',
    count:'',
    time:'请选择时间',
    showTimePop:false,
    currentDate: new Date().getTime(),
    minDate: new Date(2019,0,1).getTime(),
    formatter:function(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    showDialog:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  selectPayIcon(params){
    this.setData({
      selectPay:params.target.id,
      showDialog:true
    })
  },
  selectIncomeIcon(params){
    this.setData({
      selectIncome:params.target.id,
      showDialog:true
    })
  },
  selectTime(){
    this.setData({
      showTimePop:true
    })
  },
  onTimeComfirm(event){
    console.log(event)
    let date = new Date(event.detail)
    this.setData({
      time:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      currentDate:event.detail,
      showTimePop:false
    })
  },
  onTimeCancel(event){
    this.setData({
      showTimePop:false
    })
  },
  onDialogClose(){
    this.setData({
      showDialog:false,
      desc:'',
      time:'请选择时间',
      count:'',
      currentDate:new Date().getTime()
    })
  },
  onDialogComfirm(){
    console.log(this.data.desc,this.data.time,this.data.count)

  }
})