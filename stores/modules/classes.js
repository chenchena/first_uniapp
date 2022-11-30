export default {
	state: {
		classInfo: {}
	},
	getters: {},
	mutations: {
		addClassInfo(state, option){
			state.classInfo = option
		}
	},
	actions: {
		AddClassInfo({commit}, option){
			commit('addClassInfo', option)
		}
	},
}