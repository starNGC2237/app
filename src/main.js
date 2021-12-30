/*
 * @Author: zhilutianji
 * @Date: 2021-12-30 17:46:20
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-30 23:08:54
 * @Description: file content
 * 
 * @FilePath: \app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  //组件身上有$router和$route
  router
}).$mount('#app')
