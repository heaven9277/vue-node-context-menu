/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-13 13:26:45
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 15:27:28
 */
var path = require('path');
module.exports = {
    publicPath:'/dist/',
    outputDir:'dist',
    pages:{
        index:{
            entry:'./src/lib/directiveMenu.js',
            output:{
                path:path.resolve(__dirname,'./dist'),
                publicPath:'/dist/',
                filename:'vue-node-context-menu.js',
                library:'vue-node-context-menu',
                libraryTarget:'umd',
                umdNameDefine:true
            }
        }
    }
}