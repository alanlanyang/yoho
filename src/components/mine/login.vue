<template>
	<div>
		<mine-banner></mine-banner>
		<div class="loginBox">
			<form class="loginForm">
				<label>
					<span><icon name="phone"></icon></span>
					<span>中国</span>
					<input type="text" placeholder="请输入手机号" v-model="username"/>
				</label>
				<label>
					<span><icon name="expeditedssl"></icon></span>
					<input type="password" placeholder="请输入验证码" v-model="password"/>
					<button>获取验证码</button>
				</label>
				<button class="loginBtn" @click="login({username,password,cb})">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	import mineBanner from './banner'
	import {mapActions} from 'vuex'
	export default{
		name:'login',
		data(){
			return{
				username:'',
				password:''
			}
		},
		components:{mineBanner},
		methods:{
			...mapActions(['login']),
			cb(){	//登录成功的回调
				this.$router.push("/mine")
			}
		}
	}
</script>

<style scoped lang="scss">
	.loginBox{
		padding:0.3rem 0.35rem 0 0.35rem;
		.loginForm{
			.loginBtn{
				width:100%;
				background:#b0b0b0;
				color:#fff;
				font-size: 0.15rem;
				border: none;
				font-weight: 500;
				padding:0.11rem 0;
				border-radius: 0.05rem;
				outline: none;
			}
			label{
				display: flex;
				border-bottom: 1px solid #e0e0e0;
				align-items: center;
				span:nth-child(1){
					display: flex;
				}
				span:nth-child(2){
					font-size:0.14rem;
					width:0.83rem;
					padding:0.08rem;
				}
				input{
					border:none;
					outline: none;
				}
			}
			label:nth-child(2){
				margin-top:0.26rem;
				input{
					width:1.93rem;
					padding-left:0.07rem;
				}
				button{
					color:#fff;
					background:#b0b0b0;
					font-size: 0.11rem;
					display: block;
					width:0.85rem;
					height: 0.25rem;
					border-radius: 10px;
					border: none;
				}
			}
		}
	}
</style>