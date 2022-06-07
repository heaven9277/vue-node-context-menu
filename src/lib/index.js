/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 15:20:20
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 15:44:10
 */
import contextMenu from './contextMenu.vue'
//凡是vue插件一定有这个方法。目的是use使用，才能被use引用
let instance;
let optionObjs;
function hideMenu(){
    if(instance&&instance.$el&&optionObjs){
        instance.visible = false;
        optionObjs.el.removeChild(instance.$el);
        instance = null;
    }
}
let install = function (Vue,options) {
    //挂载在原型上  使用的时候this.$showLoading()
    Vue.prototype.$showContextMenu = function (optionObj) {
        hideMenu();//需要先清除
        //加载在设置的div上
        //Vue.extend可以继承这个组件，然后得到一个新的组件
        const contextMenuVue = Vue.extend(contextMenu);
        //创建一个新的实例，实例挂载在一个空的div
        let options = {
            visible:true,
            ...optionObj
        }
        optionObjs = options;
        const c = new contextMenuVue({
            data:options
        })
        instance = c.$mount(document.createElement('div'));
        if(options.el){
            // const domIdDiv = document.getElementById(domId);
            options.el.appendChild(instance.$el); //将div添加到body中
            return;
        }
    }
}
export default install