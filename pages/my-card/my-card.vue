<template>
	<view class="my-card">
		<view class="my-header">
			<myHeader :isBack="false" className="我的名片"></myHeader>
			<view class="header-main">
				<view class="main-content">
					<image class="mian-img" :src="avatarUrl" mode=""></image>
					<view class="mian">
						<view class="login" v-if="isLogin" style="position: relative;z-index: 999;">
							<view class="header-name" @tap="goLogin">授权登录</view>
						</view>
						<view class="header-name">{{nickName}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 内容区 -->
		<view class="card-content">
			<view class="card-item" @tap="goCard" :myInfo="myInfo">
				<image class="item-img" src="../../static/imgs/my-card.png" mode=""></image>
				<view class="item-card">我的名片</view>
			</view>
			<view class="card-item" @tap="goNews">
				<image class="item-img1" src="../../static/imgs/news.png" mode=""></image>
				<view class="item-card">消息</view>
			</view>
			<view class="card-item" @tap="goHelp">
				<image class="item-img2" src="../../static/imgs/customer.png" mode=""></image>
				<view class="item-card">客服及帮助</view>
			</view>
		</view>
		<MyTabbar :selected='selected'></MyTabbar>
		<view class="mask" v-if="isLogin"></view>
	</view>
</template>

<script>
	import {
		getLogin,
		getToken
	} from '@/services/login.js'
	import {
		getStuProtocol,
	} from '@/services/sign.js'
	import {
		getStudent,
	} from '@/services/students.js'
	
	import myHeader from '../../common/my-header/my-header.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	
	import {mapState, mapActions} from 'vuex'
	export default {
		data() {
			return {
				selected:4,
				isLogin: true,
				myInfo: null,
				nickName: "小鹿线",
				avatarUrl: '../../static/imgs/weidenglu.png',
				params: {}
			}
		},
		computed: {
			...mapState({
				signInfo: state => state.sign.signInfo,
				userList: state => state.user.userList,
				students: state => state.user.students,
			})
		},
		onLoad() {
			// this.getUser()
			// this.getStudent();
		},
		methods: {
			...mapActions(['ChangeOpenId', 'ChangeStatus', 'AddSignInfo', 'ChangeStudents']),
			goLogin() {
				if(this.isLogin){
					this.getUser()
					this.isLogin = false
				}
			},
			goCard() {
				if(this.myInfo){
					uni.navigateTo({
						url:""
					})
				}else{
					uni.showToast({
						title:"请先入学",
						icon:'none'
					})
				}
			},
			goNews(){
				uni.showToast({
					title:"该功能暂不开放",
					icon:'none'
				})
			},
			goHelp(){
				uni.navigateTo({
					url: "../consulting-help/consulting-help"
				})
			},
			//获取学员信息
			getStudent() {
				console.log("学员信息", uni.getStorageSync('token'))
				if(uni.getStorageSync('token')){
					//获取学员信息
					getStudent().then(res => {
						console.log("学员信息", res)
						if(!res.name) return
						this.myInfo = res
						this.ChangeStatus(res)
					}).catch(err => {
						console.log(err)
					})
				}
			},
			getUser() {
				if(wx.getUserProfile) {
					wx.getUserProfile({
						desc:"用于获取名片展示用户头像和昵称",
						lang: 'zh_CN',
						success: userData => {
							console.log("用户授权信息1", userData)
							this.nickName = userData.userInfo.nickName;
							this.avatarUrl = userData.userInfo.avatarUrl;
							this.params.avatarUrl = userData.userInfo.avatarUrl;
							this.params.nickName = userData.userInfo.nickName;
							this.wxLogin()
						},
						fail: () => {
							this.isLogin = false
						}
					})
				}else{
					wx.getUserInfo({
						success: (res) => {
							console.log("用户授权信息2", res)
							this.nickName = res.userInfo.nickName;
							this.avatarUrl = res.userInfo.avatarUrl;
							this.params.avatarUrl = res.userInfo.avatarUrl;
							this.params.nickName = res.userInfo.nickName;
							this.wxLogin()
						}
					})
				}				
			},
			wxLogin() {
				uni.login({
					provider:"weixin",
					success: (loginRes) => {
						console.log("登录信息", loginRes)
						getLogin({
							code: loginRes.code,
							avatar: loginRes.avatarUrl,
							nickName: loginRes.nickName
						}).then(res => {
							this.params.openId = res.openId
							this.ChangeOpenId(this.params)
							uni.setStorageSync('token', res.token)
							//获取学生信息
							this.getStudent()
							//获取用户协议
							getStuProtocol().then(res => {
								if(res.resultCode == 1020) return
								res.signProtocolPath = "https://fawn.xuexiluxian.cn/api" + res.signProtocolPath
								this.AddSignInfo(res)
								//改变状态
								this.ChangeStatus({status: 1})
							}).catch(res => {
								
							})
							uni.showToast({
								title: "登录成功",
								icon:'none'
							})
						})
					},
					fail: () => {
						uni.showToast({
							title:"登录失败，请手动登录",
							icon: 'none'
						})
					}
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
	.my-card{
		width: 100vw;
		height: 100vh;
		background-color: #F3F4F6;
		overflow: hidden;
	}
	.my-header{
		width: 100vw;
		height: 400rpx;
		background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/header-bg.png") no-repeat center center;
	}
	.header-main{
		width: 750rpx;
		height: 162rpx;
		padding: 0 50rpx;
		position: absolute;
		top: 154rpx;
		box-sizing: border-box;
	}
	.main-content{
		display: flex;
		align-items: center;
	}
	.mian-img{
		width: 162rpx;
		height: 162rpx;
		border-radius: 50%;
	}
	.main{
		padding-left: 40rpx;
	}
	.header-name{
		height: 40rpx;
		font-size: 42rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
	}
	/* 内容区 */
	.card-content{
		width: 750rpx;
		height: 100%;
		position: relative;
		top: -60rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
	}
	.card-item{
		height: 110rpx;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
		padding-left: 37rpx;
		box-sizing: border-box;
	}
	.item-img{
		width: 36rpx;
		height: 29rpx;
	}
	.item-img1{
		width: 31rpx;
		height: 36rpx;
	}
	.item-img2{
		width: 28rpx;
		height: 36rpx;
	}
	.item-card{
		font-size: 28rpx;
		font-weight: 400;
		color: #464646;
		padding-left: 10rpx;
	}
	.finger{
		width: 50rpx;
		height: 50rpx;
		animation: fingerHandle 1s ease infinite both;
		transform: rotate(90deg);
	}
	.login{
		display: flex;
		width: 400rpx;
	}
	@keyframes fingerHandle {
		0%{
			transform: none;
		}
		70%{
			transform: scale3d(.8, .8, .8);
		}
		100%{
			transform: none;
		}
	}
	
	.mask{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 998;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.7;
		filter: alpha(opacity=70%);
	}
</style>
