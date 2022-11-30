<template>
	<view class="manga-list">
		<view class="list-item" @tap="goDetail(1)">
			<image class="item-img" src="../../static/imgs/archives.png"></image>
			<view class="item-text">档案管理</view>
		</view>
		<view class="list-item" @tap="goDetail(2)">
			<image class="item-img" :src="signList.url"></image>
			<view class="item-text">{{signList.name}}</view>
		</view>
		<view class="list-item" @tap="goDetail(3)">
			<image class="item-img" :src="mangaList.url"></image>
			<view class="item-text">{{mangaList.name}}</view>
		</view>
		<view class="list-item" @tap="goDetail(4)">
			<image class="item-img" src="../../static/imgs/service.png"></image>
			<view class="item-text">咨询帮助</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			className: {
				type: String,
				default: ""
			},
			classId: {
				type: String,
				default: ""
			},
		},
		data() {
			return {
				mangaList: {
					url: '../../static/imgs/sign-out.png',
					name: "签署协议"
				},
				signList: {
					url: '../../static/imgs/sign-in.png',
					name: "我的协议"
				}
			}
		},
		methods: {
			goDetail(type){
				let url = ""
				if(type == "1") {
					//档案管理
					url = "../../pages/show-manage/show-manage?classId="+this.classId
				} else if(type == "4") {
					//咨询帮助
					url = "../../pages/consulting-help/consulting-help"
				} else if(type == "2") {
					//我的协议
					uni.switchTab({
						url: "../../pages/my-contract/my-contract"
					})
					return
				} else if(type == "3") {
					//签署协议
					url = ""
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style scoped>
.manga-list{
	/* width: 100vw;
	height: 108rpx; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}
.item-img{
	width: 108rpx;
	height: 108rpx;
}
.item-text{
	width: 108rpx;
	height: 25rpx;
	font-size: 26rpx;
	font-weight: 400;
	color: #222222;
	padding-top: 10rpx;
}
</style>
