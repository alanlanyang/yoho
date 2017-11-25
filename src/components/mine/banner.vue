<template>
	<div class="banner">
		<div class="banner-head">
			<span @touchstart="goIndex"><icon name="angle-left"></icon></span>
			<router-link to="register">注册</router-link>
		</div>
		<div class="tip"><span>Yoho!Family账号可登录YohoBuy有货</span></div>
	</div>
	
</template>

<script>
	export default{
		name:'banner',
		methods:{
			goIndex(){
				this.$router.push("/index")
			}
		}
	}
</script>

<style scoped lang="scss">
	.banner{
		height:1.45rem;
		background:#ccc;
		padding:0 0.37rem;
		padding-top:0.25rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.banner-head{
			height:0.25rem;
			display:flex;
			justify-content:space-between;
			span{
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border:1px solid #fff;
				width:0.22rem;
				height:0.22rem;
				border-radius: 50%;
			}
			a{
				font-size: 0.12rem;
				color:#fff;
				border: 1px solid #fff;
				border-radius: 20%;
				padding:0.03rem 0.06rem;
			}
		}
		.tip{
			display: flex;
			justify-content: center;
			span{
				font-size: 0.11rem;
				color:#fff;
			}
		}
	}
</style>