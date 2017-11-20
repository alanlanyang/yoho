<template>
	<nav class="footer-nav">
	  <router-link :to="{name:item.path}" class="footer-a" active-class="active" href="#" v-for="(item,index) in navs" key="index">
	    <icon class="footer-icon" :name="item.icon"></icon>
	    <span class="footer-text">{{item.text}}</span>
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
					{id:2,text:"分类",icon:"indent",path:"kind"},
					{id:3,text:"逛",icon:"rocket",path:"shopping"},
					{id:4,text:"购物车",icon:"shopping-cart",path:"car"},
					{id:5,text:"我的",icon:"user-o",path:"mine"}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.footer-nav{
		display:flex;
		justify-content: space-between;
		height:0.58rem;
		width:100%;
		.active{
			color:#ff88ae;
		}
		a{
			width:20%;
			height:0.58rem;
			color:#b0b0b0;
			display: flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			.footer-icon{
				/*transform: scale(3.3);*/
				margin-bottom:0.04rem;
			}
			.footer-text{
				font-size: 0.1rem;
			}
		}
	}
</style>