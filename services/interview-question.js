// 刷面试题
import $http from './request.js'

// 面试题分类
export function getQuestionsList(data) {
    return $http.request({
        method: 'POST',
        url: `/wechat/questions/typeList`,
        data
    })
};