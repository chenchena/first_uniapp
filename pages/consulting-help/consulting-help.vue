<template>
	<view class="consulting-help">
		<myHeader className="咨询帮助"></myHeader>
		<view v-if="helpList.length > 0"  class="help-content">
			<view class="help-item" v-for="item in helpList" :key="item.id">
				<image class="address img" src="../../static/imgs/address.png" mode=""></image>
				<view class="item-main">
					<view class="main-title">{{item.name}}</view>
					<view class="main-phone">{{item.phone}}</view>
				</view>
				<image class="item-phone img" src="../../static/imgs/phone.png" mode=""></image>
			</view>
		</view>
		<view v-else class="help-content">暂无数据...</view>
		<view class="help-sure" @tap="goBack">确认</view>
	</view>
</template>

<script>
	import {
		getHelpList
	} from '@/services/consulting-help.js'
	
	import myHeader from '../../common/my-header/my-header.vue'
	
	export default {
		components:{myHeader, },
		data() {
			return {
				helpList: []
			}
		},
		onLoad() {
			this._getHelpList()
		},
		methods: {
			async _getHelpList() {
				let res = await getHelpList()
				console.log("咨询列表",res)
				this.helpList = res
			},
			goBack() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
.consulting-help{
	width: 100vw;
	height: 100vh;
	background-color: #F3F4F6;
}
.help-content{
	background-color: #FFFFFF;
}
.help-item{
	display: flex;
	align-items: center;
	padding: 40rpx;
	border: 2rpx solid #F3F4F6;
	box-sizing: border-box;
}
.img{
	width: 33rpx;
	height: 36rpx;
}
.item-main{
	flex: 1;
	padding: 0 20rpx;
}
.main-title{
	font-size: 28rpx;
	font-weight: 400;
	color: #333333;
	padding-bottom: 20rpx;
}
.main-phone{
	font-size: 24rpx;
	font-weight: 400;
	color: #999999;
	opacity: 0.8;
}
.help-sure{
	width: 420rpx;
	height: 80rpx;
	background-color: #0066FF;
	text-align: center;
	line-height: 80rpx;
	border-radius: 40rpx;
	font-size: 30rpx;
	font-weight: 400;
	color: #FFFFFF;
	position: absolute;
	left: 50%;
	bottom: 105rpx;
	transform: translate(-50%);
}
</style>
