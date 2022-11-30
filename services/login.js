// 登录相关
import $http from './request.js'

// 用户登录
export function getLogin(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/user/auth/login`,
		data
	})
}

// 获取token
export function getToken(){
	return $http.request({
		method: 'GET',
		url: `/wechat/test/login/`,
	})
}