// 协议相关
import $http from './request.js'

// 查询已签署协议（当前班级）
export function getStuProtocol(){
	return $http.request({
		method: 'GET',
		url: `/wechat/stuProtocol/current`,
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}

// 查询已签署协议（按班级id查）
export function protocolInfo(data){
	return $http.request({
		method: 'GET',
		url: `/wechat/stuProtocol/info/${data.classId}`,
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}

// 查询已签署协议（按班级id查）
export function signClassProtocol(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/stuProtocol/signClassProtocol`,
		header: {
			'token': uni.getStorageSync('token')
		},
		data
	})
}