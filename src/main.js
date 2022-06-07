/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-13 10:09:25
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 15:13:24
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./lib/directiveMenu"
// "main": "./src/lib/index.js",
// "repository": {
//   "type":"git",
//   "url": "https://github.com/heaven9277/loading-vue.git"
// },

new Vue({
  render: h => h(App),
}).$mount('#app')
