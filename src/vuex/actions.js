import axios from 'axios'
import {Toast} from 'mint-ui'
export default{
	login({commit},params){
		axios.get("/yl/users/login.do",{params}).then((res)=>{
//			console.log(res.data)
			if(res.data.username){
				//登录成功,更改store
				commit("changeInfo",res.data.username)
				params.cb()
			}else if(res.data==0){
				Toast("密码错误")	
			}else if(res.data==1){
				Toast('用户名不存在')
			}
		})
	}
}
