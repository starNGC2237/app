/*
 * @Author: zhilutianji
 * @Date: 2021-12-31 19:24:02
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-31 19:51:09
 * @Description: file content
 * @FilePath: \app\src\store\index.js
 */

import Vue from 'vue'
import Vuex from 'vuex';
import home from './home'
import search from './search'
//需要使用插件一次
Vue.use(Vuex)


export default new Vuex.Store({

    modules:{
        home,search
    },

})