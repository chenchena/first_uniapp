<template>
	<view class="my-contract">
		<myHeader :isBack="false" className="我的协议"></myHeader>
		<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
			<view class="contract-content" :style="'height: '+clientHeight+'px;'">
				<view class="contract" :style="'height: '+clientHeight+'px;'">
					<image class="contract-img" :src="signInfo.classProtocolPath" :lazy-load="true"></image>
					<view class="userName">{{signInfo.studentName}}</view>
					<view class="idCard">{{signInfo.idCard}}</view>
					<view class="contract-time">{{signInfo.signTime}}</view>
					<view class="company-time">{{signInfo.signTime}}</view>
					
					<image class="contract-sign" :src="signInfo.signProtocolPath" :lazy-load="true"></image>
					<view class="idCard1">{{signInfo.idCard}}</view>
					<view class="contract-time1">{{signInfo.signTime}}</view>
					<view class="company-time1">{{signInfo.signTime}}</view>
					<image class="contract-sign1" :src="signInfo.signProtocolPath" :lazy-load="true"></image>
				</view>
			</view>
		</scroll-view>
		<text>我的协议</text>
		<MyTabbar :selected='selected'></MyTabbar>
	</view>
</template>

<script>
	import {
		getStuProtocol,
	} from '@/services/sign.js'
	
	import {mapState, mapActions} from 'vuex'
	
	import myHeader from '@/common/my-header/my-header.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		computed:{
			...mapState({
				userList: state => state.user.userList,
				signInfo: state => state.sign.signInfo,
				barHeight: state => state.bar.barHeight,
			})
		},
		data() {
			return {
				selected:3,
				clientHeight: null,
				// signInfo: {},
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 68是tabbar的高度 statusBarHeight状态栏高度
					this.clientHeight = res.windowHeight - 68 - res.statusBarHeight
				}
			})
		},	
		onLoad() {
			this.contractTime = uni.getStorageSync('signtime')
			this._getStuProtocol()
		},
		methods: {
			...mapActions(['AddSignInfo']),
			_getStuProtocol(){
				getStuProtocol().then(res => {
					this.userList.status = 1;
					res.classProtocolPath = res.classProtocolPath;
					res.signProtocolPath = "https://fawn.xuexiluxian.cn/api" + res.signProtocolPath
					this.AddSignInfo(res)
				}).catch(err => {
					console.log(err)
				})
			}
		},
		components:{
			myHeader,
			MyTabbar
		}
	}
</script>

<style scoped>
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance:none;
		background: transparent;
		color: transparent;
	}
	.my-contract{
		width: 100vw;
		height: 100vh;
		background-color: #F0F3F7;
	}
	.contract-content{
		padding: 0 35rpx;
		box-sizing: border-box;
	}
	scroll-view{
		box-sizing: border-box;
	}
	.contract{
		width: 682rpx;
		border: 2px dashed #000;
		position: relative;
		margin-bottom: 140rpx;
	}
	.canvasImg{
		width: 682rpx;
		border: 2px dashed #000;
	}
	.userName{
		position: absolute;
		left: 150rpx;
		top: 220rpx;
	}
	.idCard{
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 2320rpx;
	}
	.idCard1{
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 180rpx;
	}
	.contract-time{
		font-size: 20rpx;
		position: absolute;
		right: 60rpx;
		bottom: 2280rpx;
	}
	.company-time{
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 2280rpx;
	}
	.contract-time1{
		font-size: 20rpx;
		position: absolute;
		right: 50rpx;
		bottom: 140rpx;
	}
	.company-time1{
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 140rpx;
	}
	.contract-img{
		width: 682rpx;
		height: 6000rpx;
	}
	/* 签名的图片显示的位置 */
	.contract-sign{
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 2300rpx;
		transform: rotate(-90deg);
	}
	.contract-sign1{
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 170rpx;
		transform: rotate(-90deg);
	}
</style>
