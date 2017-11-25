<template>
	<div class="goodsBox">
		<div class="goodsTitle">
			<p>你可能喜欢</p>
		</div>
		<ul class="goodsList"
			v-infinite-scroll="loadMore"
  			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="10">
			<li class="goodsItem" v-for="good in goods">
				<img :src="good.poster.origin">
				<p>{{good.name}}</p>
				<p>{{good.intro}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"hot",
		data(){
			return{
				goods:[],
				page:1,
				isLoad:true,	//是否加载
				loading:false,	//加载状态
				type:"now-playing"
			}
		},
		created(){
			this.getGoods()
		},
		methods:{
			getGoods(){
				let that =this;
				axios.get("/mz/v4/api/film/"+this.type+"?count=8",{params:{page:that.page}}).then((res)=>{
					that.goods = that.goods.concat(res.data.data.films)
					that.loading=false	//请求数据时，没有加载
					if(that.page==res.data.data.page.total||res.data.data.page.total==0){
						that.isLoad=false	//无内容时不再加载
					}
				})
			},
			loadMore() {
				if(!this.isLoad){	//页数判断后不再加载
					console.log("jie")
					return ;}
				this.loading = true;
				this.page++
				this.getGoods()
			}
		}
	}
</script>

<style scoped lang="scss">
	.goodsBox{
		.goodsTitle{
			p{
				font-size: 0.2rem;
				color:#dadada;
				line-height:0.56rem;
				text-align: center;
			}
			
		}
		.goodsList{
			display: flex;
			flex-wrap: wrap;
			padding:0 0.3rem;
			justify-content: space-between;
			.goodsItem{
				width:45%;
				display: flex;
				flex-direction: column;
				img{
					height:1.88rem;
				}
				p{
					text-align: center;
					font-size: 0.09rem;
					color:#b0b0b0;
				}
			}
		}
	}
</style>