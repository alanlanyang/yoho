<template>
	<nav class="bar bar-tab">
	  <router-link :to="{name:item.path}" class="tab-item external" active-class="active" href="#" v-for="(item,index) in navs" key="index">
	    <span :class="'icon icon-'+item.icon"></span>
	    <span class="tab-label">{{item.text}}</span>
	  </router-link>
	</nav>
</template>

<script>
	export default{
		name:"footer",
		data:function(){
			return {
				navs:[
					{id:1,text:"首页",icon:"home",path:"index"},
					{id:2,text:"分类",icon:"app",path:"kind"},
					{id:3,text:"逛",icon:"gift",path:"shopping"},
					{id:4,text:"购物车",icon:"cart",path:"car"},
					{id:5,text:"我的",icon:"me",path:"mine"}
				]
			}
		}
	}
</script>

<style>
</style>