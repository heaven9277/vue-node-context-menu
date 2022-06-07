/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-06-07 10:18:44
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 15:45:27
 */
import Vue from 'vue'
import nodeContextMenu from './index'
Vue.use(nodeContextMenu);
Vue.directive("nodeContextMenu", (el, binding,vnode) => {
    el.oncontextmenu = function(e) {
        // 鼠标点的坐标
        const oX = e.layerX;
        const oY = e.layerY;
        let options = binding.value || {}; //传输的值
        vnode.context.$showContextMenu({
            el:el,
            left:oX,
            top:oY,
            ...options
        });
        return false;
    };
})