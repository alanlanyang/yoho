<template>
	<div class="title">
		<p><slot></slot></p>
		<img :src="imgSrc"/>
	</div>
</template>

<script>
	export default{
		name:"titles",
		/*data(){
			return{
				banner1:"/static/imgs/index.jpg",
				banner2:"/static/imgs/index2.jpg"
			}
		}*/
		props:["imgSrc"]
	}
</script>

<style scoped lang="scss">
	p{
		font-size: 0.14rem;
		line-height:0.48rem;
		text-align: center;
		font-weight: bold;
	}
	.title{
		background:#f0f0f0;
		padding-top:0.12rem;
		img{
			width:100%;
		}
	}
</style>