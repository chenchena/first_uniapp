// 面试流程相关
import $http from './request.js'

//面试流程列表
export function getProcessList(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/process/list`,
		data
	})
}

//面试详情
export function getProcessInfo(data){
	return $http.request({
		method: 'GET',
		url: `/wechat/process/info/${data}`,
		data
	})
}