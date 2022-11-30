<template>
	<view class="manage">
		<myHeader className="档案管理"></myHeader>
		<view class="manage-form">
			<view class="manage-item clear-line">
				<view class="item-title">姓名</view>
				<view class="item-main">{{form.name}}</view>
			</view>
			<view class="manage-item">
				<view class="item-title"></view>
				<view class="item-main sex-item">
					<label class="radio">
						<radio value="r1" :checked="form.gender == '1'" color="#0066FF" />女士
					</label>
					<label class="radio">
						<radio value="r2" :checked="form.gender == '2'" color="#0066FF" />男士
					</label>
				</view>
			</view>
			<!-- 入学码 -->
			<view class="manage-item">
				<view class="item-title">入学码</view>
				<view class="item-main">{{form.admissionCode}}</view>
			</view>
			<!-- 身份证 -->
			<view class="manage-item">
				<view class="item-title">身份证号码</view>
				<view class="item-main">{{form.idCard}}</view>
			</view>
			<!-- 手机号 -->
			<view class="manage-item">
				<view class="item-title">手机号码</view>
				<view class="item-main">{{form.phone}}</view>
			</view>
			<!-- 前端阶段 -->
			<view class="manage-item">
				<view class="item-title">前端阶段</view>
				<view class="item-main">{{form.frontStage}}</view>
			</view>
			<!-- 家庭地址 -->
			<view class="manage-item address">
				<view class="address-title">
					<view class="item-title">家庭地址</view>
				</view>
				<view class="address-main">{{form.addressInfo}}</view>
			</view>
			<!-- 出生日期 -->
			<view class="manage-item">
				<view class="item-title">出生日期</view>
				<view class="item-main">{{form.birthDate}}</view>
			</view>
			<!-- 学历 -->
			<view class="manage-item">
				<view class="item-title">学历</view>
				<view class="item-main">{{form.education}}</view>
			</view>
			<!-- 专业 -->
			<view class="manage-item">
				<view class="item-title">专业</view>
				<view class="item-main">{{form.major}}</view>
			</view>
			<!-- 微信号 -->
			<view class="manage-item">
				<view class="item-title">微信号</view>
				<view class="item-main">{{form.wechat}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,} from 'vuex'
	
	import myHeader from '@/common/my-header/my-header.vue'
	export default {
		computed: {
			...mapState({
				userList: state => state.user.userList,
				classInfo: state => state.classes.classInfo
			})
		},
		data() {
			return {
				form: {}
			}
		},
		onLoad(options) {
			this.classId = parseInt(options.classId)
			if(this.classId == this.classInfo.classId){
				this.form = this.classInfo
			}
		},
		methods: {
			
		},
		components: {myHeader}
	}
</script>

<style scoped>
	.manage-form{
		background-color: #FFFFFF;
		box-sizing: border-box;
	}
	.manage-item{
		width: 100vw;
		border-bottom: 2rpx solid #F3F4F6;
		display: flex;
		align-items: center;
		padding: 32rpx 42rpx;
		box-sizing: border-box;
	}
	.address{
		display: block;
		height: 200rpx;
	}
	.address-title{
		display: flex;
		align-items: center;
		color: #999999;
	}
	.address-main{
		width: 671rpx;
		padding-top: 40rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
		line-height: 88rpx;
		opacity: 0.8;
	}
	.clear-line{
		border: none;
	}
	.item-title{
		width: 200rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #333333;
		line-height: 16rpx;
	}
	.item-local{
		font-size: 28rpx;
	}
	.item-main{
		flex: 1;
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
		padding-left: 20rpx;
		opacity: 0.8;
	}
	.sex-item{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>
