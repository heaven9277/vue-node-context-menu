<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-12 21:52:37
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 16:51:37
-->
# vue-node-context-menu
```
vue 2.0+ 自定义指令 右键菜单 获取当前数据和点击菜单的数据
```
## How to use for vue2.0+
```bash
#import package
npm i vue-node-context-menu

#use(at your main.js)
import VueNodeContextMenu from 'vue-node-context-menu';

#how to use 
#for example 举个例子
#at your html
<div v-node-context-menu="{node:item,menu:menu}" v-for="(item,index) in list" ></div>
#at your js
node:当前数据
menu：为右键菜单数据
list: 当前遍历的数组
## js list
data(){
  return {
    list:[
      {
        name:'1',
        id:0
      }
    ],
    menu:[
      {
        text:"返回",
        icon:"",
        handler:this.nodeConextMenu
      },
      {
        text:"重新加载",
        icon:"",
        handler:this.nodeConextMenu
      },
      {
        text:"打印",
        icon:"",
        handler:this.nodeConextMenu
      }
    ]
  }
}
methods:{
  #click menu to callbck  点击菜单选项的回调函数 node 为当前点击的数据，menu为当前点击菜单的对象
  nodeConextMenu(node,menu){
    
  }
}
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
