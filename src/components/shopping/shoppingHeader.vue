<template>
	<div class="header-info">
		<ul class="header-box">
			<router-link :to="{name:nav.path}" active-class="active" class="nav-item" v-for="nav in navs" :key="nav.id">{{nav.title}}</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'headerInfo',
		data(){
			return {
				navs:[
					{title:'最新',id:1,path:'shopping'},{title:'人气',id:2,path:'#'},{title:'搭配',id:3,path:'#'},
					{title:'潮品',id:4,path:'#'},{title:'视频',id:5,path:'#'}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
.header-info{
	width:100%;
	height:0.47rem;

	.header-box{
		width:100%;
		height:0.47rem;
		display:flex;
		justify-content:space-around;
		line-height:0.47rem;
		color:#ccc;
	}
	.active{
		color:#000;
	}
}
	
</style>