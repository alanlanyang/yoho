<template>
	<div class="main">
		<mt-header title="个人中心">
		  <a slot="left"  @touchstart="back">
		    <icon name="angle-left"></icon>
		  </a>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="infoBox">
			<div class="loginBtn" v-if="!isLogin">
				<router-link to="/login">登录</router-link>
				<span>/</span>
				<router-link to="/register">注册</router-link>
			</div>
			<div class="userInfo" v-if="isLogin">
				<img src="/static/imgs/ib1.jpg"/>
				<p>{{username}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"mine",
		computed:{
			username(){
				if(localStorage.user){
					return localStorage.user
				}else{
					return this.$store.state.username
				}
			},
			isLogin(){
				if(localStorage.user){
					return true;
				}else{
					return this.$store.state.isLogins
				}
			}
		},
		methods:{
			back(){
				this.$router.push("/index")
			}
		}
	}
</script>
<style scoped lang="scss">
	.mint-header{
		background:#373737;
		height:0.54rem;
		font-size: 0.2rem;
	}
	.infoBox{
		height:1.02rem;
		display: flex;
		justify-content: center;
		background: #3a3d40;
		.loginBtn{
			border:1px solid #fff;
			width:1.25rem;
			height:0.3rem;
			display:flex;
			justify-content:center;
			align-items:center;
			align-self:center;
			a{
				color:#fff;
				font-size: 0.13rem;
			}
			span{
				color:#fff;
				font-size: 0.13rem;
			}
		}
		.userInfo{
			align-self: center;
			display:flex;
			flex-direction: column;
			align-items: center;
			img{
				width:0.6rem;
				height:0.6rem;
				border-radius: 50%;
			}
			p{
				font-size: 0.12rem;
				color:#fff;
				font-weight: bold;
			}
		}
	}
</style>