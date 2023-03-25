// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
  behaviors:[storeBindingsBehavior],//绑定
  storeBindings:{
    store,
    fields:{
      sum:'sum',
      active:'activeTabBarIndex'
    },
    actions:{
      updateActive:'updateActiveTabBarIndex'
    }
  },
  // 监听sum变化，为list中info重新赋值
  observers:{
    'sum':function(val){
      if(val<0)return;
      this.setData({
        'list[1].info':val
      })
    }
  },
  options:{
    //覆盖Vant图标样式 
    styleIsolation:'shared'
  },
  data: {
    // active: 0,
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/tabs/index.png",
      "selectedIconPath": "/images/tabs/home-active.png"
      },{
      "pagePath": "/pages/message/message",
      "text": "动态",
      "iconPath": "/images/tabs/message.png",
      "selectedIconPath": "/images/tabs/message-active.png",
      info:0
    },{
      "pagePath": "/pages/my/my",
      "text": "我的",
      "iconPath": "/images/tabs/my.png",
      "selectedIconPath": "/images/tabs/my-active.png"
    }]
  },
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  }
})
