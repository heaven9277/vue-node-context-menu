<!--
 * @Descripttion: 加载组件
 * @version: 1.0.0
 * @Author: zhenghaiwen
 * @Date: 2022-04-11 16:59:09
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 17:10:58
-->
<template>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li v-for="(item,index) in menu" @click="item.handler(node,item)" @contextmenu.stop="handlePaste($event)">
            <i :class="item.icon" v-if="item.icon"></i><span>{{item.text}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'contextMenu',
    props:{},
    data(){
        return{
            visible:false,
            left:0,
            top:0,
            node:null,
            menu:[]
        }
    },
    mounted(){
        // 监听全局点击事件
        document.addEventListener("click", this.handleHideMenu);
    },
    methods:{
        handleHideMenu($event){
            // 隐藏右键菜单
            this.visible = false;
            document.removeEventListener('click',this.handleHideMenu);
        },
        handlePaste (event) {
            // 禁用鼠标右键
            event.preventDefault();
        }
    }
}
</script>
<style scoped>
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
}

.contextmenu li {
  margin: 0;
  cursor: pointer;
  color: #000;
  width: 126px;
  text-align: center;
  height: 22px;
  line-height: 22px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0px 16px;
}

.contextmenu li:hover {
  background: #EBF5FF;
  color: #409eff;
}
</style>
