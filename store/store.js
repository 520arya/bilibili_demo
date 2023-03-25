// store/store.js
import {observable,action} from 'mobx-miniprogram'
export const store = observable({
  // 共享数据
  numA:1,
  numB:2,
  activeTabBarIndex:0,
  //计算属性
  get sum(){return this.numA+this.numB},
  //actions方法，修改store数据
  updateNum1:action(function(step){this.numA+=step}),
  updateNum2:action(function(step){this.numB+=step}),
  updateActiveTabBarIndex:action(function(index){
    this.activeTabBarIndex=index
  })
})