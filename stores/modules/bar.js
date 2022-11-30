export default {
	state: {
		barHeight: null,
		isBackShow: true,
	},
	getters: {},
	mutations: {
		setBarHeight(state, barHeight){
			state.barHeight = barHeight
		},
		setIsBackShow(state, isBackShow){
			state.isBackShow = isBackShow
		}
	},
	actions: {},
}