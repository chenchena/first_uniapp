<template>
	<view class="headers">
		<view class="nav_top">
			<view class="status_bar"></view>
			<view class="topContent">
				<view class="goBack" @tap="goBack" v-if="isBack">
					<slot name="left">
						<image class="imgbg" src="../../static/imgs/arrow.png"></image>
					</slot>
				</view>
				<view class="title">
					<slot name="center">{{className}}</slot>
				</view>
			</view>
		</view>
		<view class="marginBox"></view>
	</view>
</template>

<script>
	export default {
		props:{
			className:{
				type: String,
				default:""
			},
			isBack: {
				type:Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
.headers{
	height: 115rpx;
}
.nav_top{
	width: 100vw;
	height: 115rpx;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 800;
}
.status_bar{
	width: 100vw;
	height: 64px;
}
.topContent{
	width: 100vw;
	height: 100px;
	display: flex;
	align-items: center;
}
.goBack{
	width: 90rpx;
	height: 42rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	position: relative;
	font-size: 24rpx;
}
.goBack .imgbg{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 40rpx;
	height: 42rpx;
}
.title{
	line-height: 115rpx;
	font-size: 32rpx;
	text-align: center;
	color: #344356;
	position: absolute;
	left: 50%;
	/* top: 50%; */
	transform: translate(-50%, 0);
}
</style>
