/*
 * @Author: zhilutianji
 * @Date: 2021-12-30 17:46:20
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-31 20:23:21
 * @Description: file content
 * 
 * @FilePath: \app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
//引入路由
import router from '@/router'
//引入vuex的store
import store from './store'
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false





//测试
//import {reqCateGoryList} from '@/api';




new Vue({
  render: h => h(App),
  //注册路由
  //组件身上有$router和$route
  router,
  store
}).$mount('#app')
//console.log(reqCateGoryList())