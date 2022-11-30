export default {
	state: {
		userList: {
			name: "xxx",
			tel: "0000",
			//0 未签协议 1已签协议
			status: 0,
			selectedPath: '',
			openId: 0,
			avatarUrl: '../../static/imgs/weidenglu.png',
			nickName: "小鹿线",
			classId: null
		},
		students: {},
	},
	getters: {},
	mutations: {
		changeUserStatus(state, option){
			state.userList.status = option.status
		},
		changeOpenId(state, option){
			state.userList.openId = option.openId
			state.userList.avatarUrl = option.avatarUrl
			state.userList.nickName = option.nickName
		},
		changeUserClassId(state, option){
			state.userList.classId = option.classId
		},
		changeStudents(state, option){
			state.students = option
		},
	},
	actions: {
		ChangeStatus({commit},option){
			commit('changeUserStatus', option)
		},
		ChangeOpenId({commit},option){
			commit('changeOpenId', option)
		},
		ChangeClassId({commit},option){
			commit('changeUserClassId', option)
		},
		ChangeStudents({commit},option){
			commit('changeStudents', option)
		},
	},
}