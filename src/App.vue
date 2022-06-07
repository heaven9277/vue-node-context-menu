<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenghaiwen
 * @Date: 2022-04-13 10:09:25
 * @LastEditors: zhenghaiwen
 * @LastEditTime: 2022-06-07 14:56:28
-->
<template>
<!-- <button @click="show">展示</button> -->
  <div id="app">
    <div style="width:500px;height:500px;background: #000;" v-node-context-menu="{node:item,menu:menu}" v-for="(item,index) in list">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      list:[
        {
          name:'1',
          id:0
        },
        {
          name:'2',
          id:1
        },
        {
          name:'3',
          id:2
        },
        {
          name:'4',
          id:3
        },
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
  },
  mounted(){
  },
  methods:{
    nodeConextMenu(node,menu){
      console.log(node);
      console.log(menu);
    }
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
