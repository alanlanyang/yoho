import axios from 'axios'
export default{
	login({commit},params){
		console.log(111)
		axios.get("/yl/users/login.do",{params}).then((res)=>{
			console.log(res.data)
		})
	}
}
