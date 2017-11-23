<template>
	<div class="car-footer">
	 	<div class="car-checked">
	 		<input type="redio" checked>
	 		<span>全选</span>
	 	</div>
	 	<div class="car-info">
	 		<div>
	 			<span>总计:￥ （1件）</span>
	 			<span>不含运费</span>
	 		</div>
	 		<div>
	 			<button>结算</button>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	export default{
		name:"carFooter",
		data:function(){
			return {

			}
		}
	}
</script>

<style scoped lang="scss">
	.car-footer{
		width:100%;
		height:0.6rem;
		display:flex;
		justify-content:space-between;
	}
</style>