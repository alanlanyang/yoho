<template>
	<div class="header">
		<span class="left">
			<icon name="navicon"></icon>
		</span>
		<span class="text">YoHo!Buy</span>
		<span class="right">
			<icon name="search"></icon>
		</span>
	</div>
</template>

<script>
	export default{
		name:'header',
	}
</script>

<style scoped lang="scss">
	.header{
		height:0.53rem;
		display: flex;
		background:#ff88ae;
		justify-content: space-between;
		.text{
			font-size: 0.32rem;
			color:#fff;
		}
		.left,.right{
			width:0.53rem;
			height:0.52rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
		}
	}
</style>