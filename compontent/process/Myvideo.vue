<template>
	<view class="myVideo">
		<video class="video-content" :src="videoUrl" :controls="true" :enable-play-gesture="true"></video>
	</view>
</template>

<script>
	export default {
		props:{
			videoUrl: {
				type: String,
				default:""
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

<style scoped>
.video-content{
	width: 650rpx;
}
</style>
