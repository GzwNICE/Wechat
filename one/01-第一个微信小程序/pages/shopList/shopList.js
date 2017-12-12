Page({

  /**
   * 页面的初始数据
   */
  data: {
      shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("a1:(店铺列表页)监听页面加载");
    wx.request({
      url: "https://locally.uieee.com/categories/" + options.cat +"/shops",
      data: {
        _limit: 20,
        _page: 1
      },
      success: (res) => {
        this.setData({
          shopList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("b1:(店铺列表页)监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("c1:(店铺列表页)监听页面显示");

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("d1:(店铺列表页)监听页面隐藏");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("e1:(店铺列表页)监听页面卸载");

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("f1:(店铺列表页)监听用户下拉动作");

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("g1:(店铺列表页)页面上拉触底事件的处理函数");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log("h1:(店铺列表页)用户点击右上角分享");

  }
})
