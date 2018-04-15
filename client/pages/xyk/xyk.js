// pages/xyk/xyk.js

var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    users: {},   
    
    object: {
      text: 'init data'
    }
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

  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },

    /**
     * 点击测试读取数据库中cTest表中的数据
     */
    readDateDemo() {
      var that =this;
    util.showBusy('连接中。。。')
    var url = 'https://499819604.juziinfo.xyz/demo';
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data)
        // that..users = res.data;
        // that.name = that.user.name;
        that.setData({
          user:res.data.data[0],
          users:res.data.data,
           
        });
        console.log(that.users)
        // console.log(this);
        // console.log(that);
      }
    })
    console.log('====')
    console.log(that.user)
  },

  /**
   * 保存数据
   */

  formSubmit: function(e) {
    console.log("e.detail.value");
     console.log(e.detail.value['remark']);
    var that = this;
    var url = "https://499819604.juziinfo.xyz/demo/create";
    wx.request({
      url: url,
      header: { "Content-Type":"application/x-www-form-urlencoded"},
      method:"POST",
      dataType:"",
      data: {
        'name':e.detail.value['name'],
         age:e.detail.value['age'],
         'remark': e.detail.value['remark']
        // 'remark': e.detail.value['remark']
      },
     
      success: function (result) {
        wx.showToast({
          title: '请求成功！',
          icon: 'success',
          mask: true,
          duration: 2000
        })
        // that.setData({
        //   cards: result.data.data
        // })
        console.log(result.data);
      }
    })
  }
})