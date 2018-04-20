//app.js

/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
const douban = require('./utils/douban.js')

/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js')

App({
  data: {
    name: 'Douban Movie',
    version: '1.0.0',
    currentCity: '北京'
  },
  wechat: wechat,
  douban: douban,
  baidu: baidu,
  onLaunch: function (option) {
    wechat.getLocation().then(res => {
      const { latitude, longitude } = res
      return baidu.getCityName(latitude, longitude)
    })
    .then(name => {
      this.data.currentCity = name.replace('市','')
      console.log(`currentCity: ${this.data.currentCity}`)
    })
      .catch(err => {
      this.data.currentCity = '北京'
      console.error("error")
    })
  },

  onShow: function(option){
    console.log(option.path);
    //console.log(option.query);
  },
  onPageNotFound: function(option){
    //console.error("error")
    wx.redirectTo({
      url: 'pages/index/index'
    })
  },
  globalData: {
    userInfo: null
  }
})