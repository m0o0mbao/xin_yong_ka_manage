// pages/home/addcard.js

const host = require('../../config').service.host;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  /**
   * 添加信用卡表单提交处理函数
   */
  formSubmit:function(e){

    console.log(e);
    wx.request({
      url: host + "/card/create",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      method:"POST",

      data:{
        'card_no':e.detail.value['card_no']
      },
      success:function(result){
        wx.showToast({
          title: '请求成功！',
          icon: 'success',
          mask: true,
          duration: 2000
        })
      }
      

    })
  }


})