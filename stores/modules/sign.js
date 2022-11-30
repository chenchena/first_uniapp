export default {
	state: {
		signInfo: null
	},
	getters: {},
	mutations: {
		addSignInfo(state, option){
			state.signInfo = option
		}
	},
	actions: {
		AddSignInfo({commit}, option){
			commit('addSignInfo', option)
		}
	},
}