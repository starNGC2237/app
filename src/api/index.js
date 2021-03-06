/*
 * @Author: zhilutianji
 * @Date: 2021-12-31 14:02:34
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-01 23:14:02
 * @Description: file content
 * @FilePath: \app\src\api\index.js
 */
//当前模块，API进行统一管理，即对请求接口统一管理
import requests from "@/api/request";

//首页三级分类接口
export const reqCateGoryList = () => {
    return  requests({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}