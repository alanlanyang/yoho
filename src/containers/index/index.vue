<template>
	<div class="main">
		<index-header></index-header>
		<index-banner></index-banner>
	</div>
</template>

<script>
	import indexHeader from '../../components/index/header';
	import indexBanner from '../../components/index/banner';
	
	export default{
		name:"index",
		components:{indexHeader,indexBanner}
	}
</script>

<style scoped>
	.main{
		flex: 1;
	}
</style>