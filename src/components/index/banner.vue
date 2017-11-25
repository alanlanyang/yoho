<template>
	<div ref="banner" class="swiper-container">
		<div class="swiper-wrapper">
			<div v-for="banner in banners" class="swiper-slide">
				<img :src="banner.img"/>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	export default{
		name:"banner",
		data(){
			return{
				banners:[]
			}
		},
		created(){
			this.getBanners()
		},
		methods:{
			getBanners(){
				axios.get('static/banners.json').then((res)=>{
					this.banners = res.data
				})
			}
		},
		updated(){
			new Swiper(this.$refs.banner,{
				loop:true,
				autoplay:true,
				pagination: {
			    	el: '.swiper-pagination',
			    	type: 'bullets',
//			    	paginationHide:false
			  	}
			})
		}
	}
</script>

<style scoped lang="scss">
	.swiper-slide{
		height:1.83rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
		bottom:0px;
		.swiper-pagination-bullet-active{
			background:red!important;
		}
		.swiper-pagination-bullet{
			background:red!important;
		}
	}
</style>