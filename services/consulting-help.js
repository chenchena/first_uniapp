// 咨询帮助
import $http from '@/services/request.js'

//咨询列表
export function getHelpList(data){
	return $http.request({
		method: 'POST',
		url: `/wechat/help/list`,
		data
	})
}