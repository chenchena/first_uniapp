<template>
	<view class="celebrityList">
		<Celebrity :celebrityList="celebrityList"></Celebrity>
	</view>
</template>

<script>
	import Celebrity from './Celebrity.vue'
	export default {
		components:{Celebrity},
		props:{
			celebrityList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
