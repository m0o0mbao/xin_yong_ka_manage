// pages/home/home.js

const baseUrl = require('../../config').requestUrl

var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cards:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = "https://499819604.juziinfo.xyz/card/getall";
    // var url = "https://ufuradww.qcloud.la/card/getall";
    wx.request({
      url: url,
      date: {

      },
      success: function (result) {
        // wx.showToast({
        //   title: '请求成功！',
        //   icon: 'success',
        //   mask: true,
        //   duration: 2000
        // })
        that.setData({
          cards: result.data.data
        })
        console.log(result.data.data);
      }
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
    
    util.showSuccess("到底了！")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  loadCards:function(){
    var that = this;
    var url = "https://499819604.juziinfo.xyz/card/getall";
    // var url = "https://ufuradww.qcloud.la/card/getall";
    wx.request({
      url: url,
      date: {

      },
      success: function (result) {
        wx.showToast({
          title: '请求成功！',
          icon: 'success',
          mask: true,
          duration: 2000
        })
        that.setData({
          cards: result.data.data
        })
        console.log(result.data.data);
      }
    })
  },







// showhi  
showhi:function($name){
  
  wx.showToast({
    title: 'this hi!' +$name ,
  })
}







})