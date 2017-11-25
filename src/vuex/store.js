import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
<<<<<<< HEAD
	car:{
		username:'a',
		goods:localStorage.goods?JSON.parse(localStorage.goods):[]
	}
}
const getters = {
	pureCar(state){
		return state.car.goods
	},
	all_price_num(state){
		let all = {price:0,num:0}
		state.car.goods.forEach((item,i)=>{
			all.num+=item.num;
			all.price+=item.num*item.price
		})

		return all
	}
}

const mutations1 = {
	addGood(state,{goodid,price,title,img}){
		let goods = state.car.goods
		let isHas = false
		for(var i = 0;i<goods.length;i++){
			if(goods[i].goodid==goodid){
				goods[i].num++
				isHas = true
				break;
			}
		}

		if(!isHas){
			goods.push({goodid,price,title,img,num:1})
		}

		localStorage.goods=JSON.stringify(goods)
	}
}
const mutations2 = {
	reduceGood(state,{goodid}){
		let goods = state.car.goods
		for(var i = 0;i<goods.length;i++){
			if(goods[i].goodid==goodid){
				goods[i].num--
				if(goods[i].num==0){
					goods.splice(i,1)
				}
			}
		}

		localStorage.goods=JSON.stringify(goods)
	}
}
const mutations = Object.assign({},mutations1,mutations2)
const store = new Vuex.Store({
	state,getters,mutations
=======
	username:"",
	isLogin:false
}

const mutations = {
	changeInfo(state,params){
		state.username = params 
		state.isLogin = true
		localStorage.user = params
	}
}
import actions from './actions'
const store = new Vuex.Store({
	state,actions,mutations
>>>>>>> yang
})

export default store
