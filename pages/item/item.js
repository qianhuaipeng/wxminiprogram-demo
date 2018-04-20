// pages/item/item.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    movie: {} 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    wx.showLoading({
      title: '拼命加载中...',
    })

    app.douban.findOne(params.id)
      .then(d => {
        this.setData({title: d.title, movie: d})
        wx.setNavigationBarTitle({
          title: d.title + ' << 电影 << 豆瓣',
        })
        wx.hideLoading()
      })
      .catch(e =>{
        this.setData({ title: '获取数据异常', movie:{}})
        console.error(e)
        wx.hideLoading()
      })
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