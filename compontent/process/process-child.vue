<template>
	<view class="process-child">		
		<view class="plain-list" v-if="child.objType !== 2">
			<view class="list-plain">
				<image class="list-item" src="../../static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="list-into" @tap="gotoInfo(child)">{{child.reamrk}}</view>
		</view>
		<view class="plain-video" v-else>
			<view class="list-plain">
				<image class="list-item" src="../../static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="video-content" >
				<!-- 视频播放组件 -->
				<MyVideo :videoUrl="child.objPath"></MyVideo>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getProcessInfo
	} from '@/services/process.js'
	
	import MyVideo from './Myvideo.vue'
	export default {
		props:{
			child: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			async gotoInfo(child){
				if(child.objType === 0){
					//面试题
					uni.switchTab({
						url:"../../pages/initerview-question/initerview-question"
					})
				}else if(child.objType === 1){
					//链接
					this.copy(child.objPath)
				}
			},
			copy(val) {
				uni.showModal({
					content:val,
					confirmText:"复制内容",
					success: () => {
						uni.setClipboardData({
							data:val,
							success:function(){
								uni.showToast({
									title:"复制成功，请打开百度网盘APP",
									duration: 2000,
									icon: 'none'
								})
							},
							fail:function(){
								uni.showToast({
									title:"复制失败",
									duration: 2000,
									icon: 'none'
								})
							},
						})
					}
				})
			}
		},
		components:{
			MyVideo
		}
	}
</script>

<style scoped>
.plain-list{
	display: flex;
	align-items: center;
	padding-bottom: 40rpx;
	padding-left: 30rpx;
}
.plain-list:nth-child(1){
	margin-top: 20rpx;
}
.list-plain{
	display: flex;
	align-items: center;
}
.list-item{
	width: 37rpx;
	height: 34rpx;
	padding-right: -15rpx;
}
.list-title{
	font-size: 30rpx;
	padding-right: 40rpx;
}
.list-into{
	font-size: 20rpx;
	color: #0072ff;
}
.plain-video{
	width: 650rpx;
}
.plain-list .list-plain{
	padding-left: 20rpx;
}
.video-content{
	margin-top: 40rpx;
}
.video-img{
	width: 650rpx;
	height: 450rpx;
}
</style>
