export default {
	state: {
		noticeInfo: null
	},
	getters: {},
	mutations: {
		addNoticeInfo(state, option){
			state.noticeInfo = option
		}
	},
	actions: {
		AddNoticeInfo({commit}, option){
			commit('addNoticeInfo', option)
		}
	},
}