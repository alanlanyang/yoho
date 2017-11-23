<template>
	<div class="shopping-list">
		<div class="list-box" v-for="good in goods" :key="good.id">
			<img :src="good.img" alt="">
			<p class="good-info">{{good.title}}</p>
			<p class="good-price">
			<span class="price">￥{{good.price}}</span>
			<span class="mint"><button @click="addGood({goodid:good.goodid,title:good.title,price:good.price,img:good.img})" class="btn">加入购物车</button></span>
			</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'shoppingList',
  data () {
    return {
     	goods:[]
    }
  },
  methods:{
  	getGoods(){
  		let that = this
  		axios.get('./static/goods.json').then((res)=>{
  			//console.log(res.data)
  			that.goods = res.data
  		})
  	},

  	...mapMutations(['addGood'])
  },
  created(){
  	this.getGoods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopping-list{
	width:100%;
	padding-top:0.2rem;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	.list-box{
		padding:0rem 0.12rem 0rem 0.12rem;
		width:1.62rem;
		height:2.96rem;

		img{
			width:1.62rem;
			height:2.156rem;
		}
		.good-info{
			width:1.62rem;
			height:0.35rem;
			font-size:0.12rem;
			line-height:0.35rem;
		}

		.good-price{
			display:flex;
			justify-content:space-between;
			width:1.48rem;
			heidht:1.1rem;

			.price{
				color:#f99;
				font-size:0.12rem;
			}
			.mint{
				color:#666;
				
				.btn{
					background:#f99;
					border:none;
					color:#fff;
					font-size:0.12rem;
				}
			}

		}
	}
}
</style>
