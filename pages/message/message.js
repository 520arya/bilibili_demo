// pages/message/message.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({
  btnHandler1(e){
    this.updateNum1(e.target.dataset.step)
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    this.storeBindings=createStoreBindings(this,{
      store,//数据源
      fields:['numA','numB','sum'],//字段、计算属性
      actions:['updateNum1'] //方法
    })
  },
  //生命周期函数--监听页面卸载
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  }
})