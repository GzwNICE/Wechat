Page({

  /**
   * 页面的初始数据
   */
  data: {
    slidesList:[],
    navList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   * 常用!!!!!!!!
   * 从网上请求数据时,需要在页面加载前完成请求
   * 所以需要在onLoad中发送请求
   */
  onLoad: function (options) {
    // console.log("a:(首页)监听页面加载");
    // wx.request({
    //   // 请求地址
    //   url: ,
    //   // 请求参数
    //   data: ,
    //   // 请求头
    //   header: {},
    //   // 请求方式
    //   method: GET,
    //   // 请求数据类型
    //   dataType: json,
        // 请求成功后的回调函数
    //   success: function(res) {},
        // 请求失败后的回调函数
    //   fail: function(res) {},
        // 请求完成后的回调函数(不管成功还是失败都会执行)
    //   complete: function(res) {},
    // })
    wx.request({
      url: "https://locally.uieee.com/slides",
      success:(res)=>{ //使用箭头函数的方法改变this指向,指向data
          // setData的两个功能
          // 1.更新数据
          // 2.更新视图
          this.setData({
            slidesList: res.data
          })
      }
    }),
      wx.request({
        url: "https://locally.uieee.com/categories",
        success: (res) => { //使用箭头函数的方法改变this指向,指向data
          // setData的两个功能
          // 1.更新数据
          // 2.更新视图
          // console.log(res.data);
          this.setData({
            navList: res.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("b:(首页)监听页面初次渲染完成");
    // 如果需要做一个简单的欢迎,需要在页面初次渲染完成后进行请求,也就是onRead
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("c:(首页)监听页面显示");
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("d:(首页)监听页面隐藏");
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("e:(首页)监听页面卸载");
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("f:(首页)监听用户下拉动作");
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("g:(首页)页面上拉触底事件的处理函数");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log("h:(首页)用户点击右上角分享");
  }
})
