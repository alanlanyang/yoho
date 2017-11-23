<template>
	<div class="car-header">
		<p>
		<span class="icon"><icon name="chevron-left"></icon></span>
		<span class="car">购物车</span>
		<span class="compile">编辑</span>
		</p>
	</div>
</template>
<script>
	export default{
		name:'headerBanner',
		data(){
			return {
				
			}
		}
		

	}
</script>

<style scoped lang="scss">
.car-header{
	width:100%;
	height:0.53rem;
	background:#ff88ae;
	color:#fff;

	p{
		width:100%;
		
		.icon{
			display:inline-block;
			width:0.53rem;
			height:0.53rem;
			line-height:0.53rem;
			text-align:center;
			
		}
		.car{
			display:inline-block;
			width:2.58rem;
			height:0.53rem;
			text-align:center;
			line-height:0.53rem;
			font-size:0.2rem;
			font-weight:500;
		}
	}
}
</style>