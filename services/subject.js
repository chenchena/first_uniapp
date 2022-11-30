// 面试题相关
import $http from './request.js'

// 面试题总数
export function selQuestionNum(data){
	return $http.request({
		method: 'GET',
		url: `/wechat/questions/selQuestionNum/${data}`,
		data
	})
}

// 面试题列表
export function getQuestionsDetailList(data) {
    return $http.request({
        method: 'POST',
        url: `/wechat/questions/list`,
        data
    })
};