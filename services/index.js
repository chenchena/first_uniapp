// 班级信息接口管理
import $http from './request.js'

export function getClassList(data) {
    return $http.request({
        method: 'POST',
        url: `/wechat/class/list`,
        data
    })
};