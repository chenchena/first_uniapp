// 优秀学员相关
import $http from './request.js'

//名人堂
export function getExcellentList(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/excellent/list`,
		data
	})
}

//公告
export function getNoticeList(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/notice/list`,
		data
	})
}