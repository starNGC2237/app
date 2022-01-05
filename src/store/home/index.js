/*
 * @Author: zhilutianji
 * @Date: 2021-12-31 19:45:56
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-01 23:14:28
 * @Description: file content
 * @FilePath: \app\src\store\home\index.js
 */

import {reqCateGoryList} from '@/api';

const state = {
    categoryList:[]
};

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
};


const actions = {
    async categoryList({commit}){
        let result = await reqCateGoryList()
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
};

const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}