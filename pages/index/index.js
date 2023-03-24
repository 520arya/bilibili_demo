Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList: [{"text": "直播"},{"text": "动画"},{"text": "番剧"},
      {"text": "国创"},{"text": "漫画"},{"text": "音乐"},{"text": "舞蹈"},
      {"text": "游戏"},{"text": "科技"},{"text": "数码"},{"text": "生活"},
      {"text": "鬼畜"},{"text": "时尚"},{"text": "广告"},{"text": "娱乐"},
      {"text": "专栏"},{"text": "电影"}
    ],
    //轮播图数据
    swiperList: [{
        src: '../../images/1.png'
      },
      {
        src: '../../images/2.png'
      },
      {
        src: '../../images/3.png'
      },
      {
        src: '../../images/4.png'
      },
    ],
    //视频列表数据
    videoList: [],
    //被点击的首页导航索引
    currentIndexNav: 0,
  },
 //点击首页导航事件
  activeNav(e) {
    // console.log(222)
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  //获取首页导航数据 接口失效，自定义data
/*   getNavList() {
    let that = this;
  利用小程序内置发送请求方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        //console.log(res);
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  }, */
  //获取轮播图数据
 /*  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      success:(res)=> {
        //console.log(res, '<-res->');
        if (res.data.code === 0) {
          this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  }, */
  //获取电影视频列表数据
  getVideoList() {
    //显示Loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success:(res)=>{
        if (res.statusCode === 200) {
          this.setData({
            videoList: res.data.music
          })
          console.log(res.data)
        }
      },
      complete:()=>{
        //隐藏Loading效果
        wx.hideLoading()
      }
    })
    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取首页导航数据
    // this.getNavList();
    //获取轮播图数据
    // this.getSwiperList();
    //获取视频列表数据
    this.getVideoList();
  },
  
})