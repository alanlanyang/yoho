import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	username:""
}

import actions from './actions'
const store = new Vuex.Store({
	state,actions
})
export default store;
