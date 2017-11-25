<template>
<div class="mainBox">
	<div class="main">
		<index-header></index-header>
		<index-banner></index-banner>
		<titles imgSrc="/static/imgs/index.jpg">人气推荐</titles>
		<goods></goods>
		<titles imgSrc="/static/imgs/index2.jpg">热门品牌</titles>
		<hot></hot>
	</div>
	<app-footer></app-footer>
</div>
</template>

<script>
	import indexHeader from '../../components/index/header';
	import indexBanner from '../../components/index/banner';
	import appFooter from '../../components/footer'
	import titles from '../../components/index/title'
	import hot from '../../components/index/hot'
	import goods from '../../components/index/goods'
	export default{
		name:"index",
		components:{indexHeader,indexBanner,appFooter,titles,hot,goods}
	}
</script>

<style scoped>
	.main{
		flex: 1;
	}
</style>