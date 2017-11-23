<template>
	<div class="car-footer">
	 	<div class="car-checked">
	 		<input class="sectle" type="radio" checked>
	 		<span>全选</span>
	 	</div>
	 	<div class="car-info">
	 		<div class="car-price">
	 			<span>总计:￥{{all_price_num.price}} （{{all_price_num.num}}件）</span>
	 			<span class="freight">不含运费</span>
	 		</div>
	 		<div class="my-btn">
	 			<button class="btn">结算</button>
	 		</div>
	 	</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
	name:"carFooter",
	data:function(){
		return {

		}
	},
	computed:{
   
    	...mapGetters(['pureCar','all_price_num'])
    },
}
</script>

<style scoped lang="scss">
	.car-footer{
		box-sizing:border-box;
		width:100%;
		height:0.6rem;
		display:flex;
		justify-content:space-between;
		border:1px solid #ccc;
	}
	.car-checked{
		padding-left:0.1rem;
		width:0.45rem;
		height:0.6rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		
		
	}

	.car-info{
		width:2.3rem;
		height:0.6rem;
		display:flex;
		justify-content:space-between;
	}
	.car-price{
		display:flex;
		flex-direction:column;
		justify-content:center;
		color:#d0253b;
	
	}
	.freight{
		color:#ccc;
		font-size:0.12rem;
		padding-top:0.05rem;
		padding-left:0.4rem;
	}
	.my-btn{
		padding-right:0.1rem;
		line-height:0.6rem;
	}
	.btn{

		background:#d0253b;
		border:none;
    	width: 0.85rem;
    	height: 0.42rem;
    	border-radius: .05rem;
    	color:#fff;
    	font-size:0.16rem;
	}
</style>