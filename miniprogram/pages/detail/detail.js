// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    show: false, //时间选择器控制显隐
    dataList: [
      {
      time: "01月05日",
      week: "星期二",
      income: 0,
      expend: 62,
      list: [{
          priceType: 0,
          inOutType: 1,
          desc: "描述信息",
          count: 14
        }, {
          priceType: 1,
          inOutType: 1,//0收入,1支出
          desc: "描述信息",
          count: 14
        }

      ]
    },{
      time: "01月03日",
      week: "星期日",
      income: 14,
      expend: 62,
      list: [{
          priceType: 0,
          inOutType: 1,
          desc: "描述信息",
          count: 14
        }, {
          priceType: 1,
          inOutType: 0,//0收入,1支出
          desc: "描述信息",
          count: 14
        }, {
          priceType: 1,
          inOutType: 0,//0收入,1支出
          desc: "描述信息",
          count: 14
        }

      ]
    },,{
      time: "01月04日",
      week: "星期一",
      income: 14,
      expend: 62,
      list: [{
          priceType: 0,
          inOutType: 1,
          desc: "描述信息",
          count: 14
        }, {
          priceType: 1,
          inOutType: 0,//0收入,1支出
          desc: "描述信息",
          count: 14
        }

      ]
    }]
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  onConfirm() {
    this.onClose();
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

  }
})