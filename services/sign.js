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