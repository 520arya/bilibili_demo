// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}, //视频详情
    red: [], //推荐视频
    query:{}//页面传递过来的参数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options)
    let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getRecommend();
    this.setData({
      query:options
    })
  },
  //根据id获取视频详情
  getCurrentVideo(videoId){
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success:(res)=>{
        console.log(res)
        if (res.statusCode === 200) {
          let movie = res.data.movie; 
          let keys = Object.keys(movie);
          for (let i = 0; i < keys.length; i++) {
            if (movie[i].aid === parseInt(videoId)) {
              this.setData({
                detail: movie[i]
              })
            }
          }
        }
      }
    })
  },
  //获取推荐视频
  getRecommend() {
    wx.request({
      url: 'https://www.bilibili.com/index/catalogy/5-3day.json',
      success:(res)=>{
        // console.log(res, '<-res->');
        if (res.statusCode === 200) {
          let list = res.data.hot.list
          this.setData({
            red: list
          })
        }
      }
    })
  },
  // 动态导航标题
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  }
})