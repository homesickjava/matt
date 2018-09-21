const app = getApp()
var isplay = false
var isplayText = 'Play'
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    //userInfo: {}, 
    src: "../../pic/10.jpg",
    mode: 'scaleToFill',
    freind: '__',
    isplayText: 'Play',
    //rope: this.ropeCav
    // hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')

    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src1: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      freind: e.detail.value
    })
  },
  audioPlay: function (e) {
    if (isplay) {
      console.log(isplay, '音乐已暂停', isplayText)
      this.audioCtx.pause()
      isplay = false
      this.setData({
        isplayText: 'Play'
      })
    } else {
      console.log(isplay, '音乐正在播放中...', isplayText)
      this.audioCtx.play()
      isplay = true
      this.setData({
        isplayText: 'Stop'
      })
    }
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: './pic/2.jpg'
    })
  },

  onPullDownRefresh: function (e) {
 
  },
  touchMove:function(e) {
  },
  ccvsMove:function(e){
  },
  touchStart:function(e){
  },
  touchEnd:function(e){
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    },
      Component({
        properties: {},
        methods: {
          onTap: function () {
            var myEventDetail = {} // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('myevent', myEventDetail, myEventOption)
          }
        } 
      })
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  } ,
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    console.log("----------" + app.globalData)
    console.log("----------" + app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
 


App({
  onLaunch: function (options) {
    // Do something initial when launch.
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  }
})
  

