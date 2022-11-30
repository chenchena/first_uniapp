// 学员信息相关
import $http from './request.js'

// 入学信息详情
export function getStudent(){
	return $http.request({
		method: 'GET',
		url: `/wechat/student/info`,
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}