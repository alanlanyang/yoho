<template>
	<div class="swiper-container goodsBox">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="good in goods">
				<img :src="good.img" />
				<p class="price">{{good.price}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import Swiper from 'swiper'
	export default{
		name:"goods",
		data(){
			return{
				goods:[]
			}
		},
		created(){
			this.getGoods()
		},
		methods:{
			getGoods(){
				axios.get("static/goods.json").then((res)=>{
					this.goods=res.data
				})
			}
		},
		updated(){
			new Swiper(".goodsBox",{
				slidesPerView : 3,
				slidesPerGroup : 3,
				freeMode : true,
			})
		}
	}
</script>

<style scoped lang="scss">
.goodsBox{
	.swiper-wrapper{
		padding:0.09rem;
		.swiper-slide{
			width:28%;
			display: flex;
			flex-direction: column;
			align-items:center;
			img{
				width:0.76rem;
				height:1.02rem;
			}
			.price{
				margin-top:0.02rem;
				font-size: 0.11rem;
				color: #ccc;
				align-self: center;
			}
		}
	}
}
</style>