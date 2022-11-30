<template>
	<view class="notice">
		<view :class="['notice-item', item.noticeType =='2' ? 'notice-warning-item' : '']" v-for="(item,index) in noticeList" :key="item.noticeId" @tap="goToDetail(index)">
			<view class="notice-main">
				<block>
					<image class="notice-bg" :src="item.noticeType =='1' ? require('../../static/imgs/guide.png') : require('../../static/imgs/upgrade.png')" mode=""></image>
				</block>
				<view class="notice-text">
					<text>{{item.noticeTitle}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	
	export default {
		props:{
			noticeList: {
				type: Array,
				default:[],
			}
		},
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		methods: {
			goToDetail(index){
				uni.navigateTo({
					url: "../../pages/notice-content/notice-content?index="+index
				})
			}
		}
	}
</script>

<style scoped>
.notice-item{
	width: 674rpx;
	height: 60rpx;
	border-radius: 10rpx;
	/* padding-bottom: 20rpx; */
	border: 2rpx solid #358cf8;
	background: rgba(53,140,248,.12);
	margin-bottom: 20rpx;
}
.notice-main{
	width: 674rpx;
	height: 60rpx;
	border-radius: 10rpx;
	display: flex;
	align-items: center;
	padding: 0 20rpx;
	box-sizing: border-box;
	/* border: 2rpx solid #358cf8;
	background: rgba(53,140,248,.12); */
}
.notice-warning-item{
	border: 2rpx solid #f88c35;
	background: rgba(248,140,53,.12);
}
.notice-bg{
	width: 29rpx;
	height: 29rpx;
	margin-right: 10rpx;
}
/* 默认 */
.notice-text{
	/* background: rgba(53,140,248,.12); */
	/* border: 2rpx solid #358cf8; */
	color: #358cf8;
}
/* 警告 */
.notice-warning-text{
	color: #f88c35;
}
</style>
