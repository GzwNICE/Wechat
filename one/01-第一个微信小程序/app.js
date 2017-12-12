App({
  /**
   * 微信小程序的生命周期函数：
   * 本事就是事件，微信小程序某个阶段自己触发的事件而已。
   */
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 
   * 常用!!!!!!!!!!!
   */
  onLaunch: function () {
    // console.log("A:(全局)当小程序初始化完成时执行的函数！")
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log(options);
    // 场景值
    // options.scene 记录了用户是通过什么方式进入的小程序
    // console.log("B:(全局)当小程序启动，或从后台进入前台显示时执行的函数！")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log("C:(全局)当小程序从前台进入后台时执行的函数！")
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
