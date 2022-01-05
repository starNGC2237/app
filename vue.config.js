/*
 * @Author: zhilutianji
 * @Date: 2021-12-30 17:56:24
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-01 23:14:47
 * @Description: file content
 * @FilePath: \app\vue.config.js
 */
module.exports = {
    //关闭eslint
    //lintOnsSave:false
    devServer: {
        // true 则热更新，false 则手动刷新，默认值为 true
        //inline: true,
        // development server port 8000
        //port: 8080,
        //代理服务器解决跨域
        proxy: {
            //会把请求路径中的/api换为后面的代理服务器
            '/api': {
                //提供数据的服务器地址
                target: 'http://39.98.123.211',
                //会在后面加/api
                //除非
                //重写去掉
                //pathRewrite:{'^/api':''},

            }
        },
    }
}