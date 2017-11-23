<template>
	<div class="header-banner swiper-container" ref="banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners" :key="banner.id">
				<img :src="banner.imgurl" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import Swiper from 'swiper'

	export default{
		name:'headerBanner',
		data(){
			return {
				banners:[]
			}
		},
		methods:{
			getBanners(){
				let that = this
				axios.get('./static/shoppingBanner.json').then((res)=>{
					//console.log(res.data)
					that.banners=res.data
				})
			}
		},
		created(){
			this.getBanners()
		},
		updated(){
			new Swiper(this.$refs.banner,{
				loop:true,
				autoplay:true
			})
		}

	}
</script>

<style scoped lang="scss">

.header-banner{
	width:100%;
	height:1.82rem;
	flex:1;
}
.header-banner img{
	width:100%;
	height:1.82rem;
}	
</style>