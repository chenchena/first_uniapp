<template>
	<view class="question">
		<!-- <view class="initerview-top">
			<view class="status-bar"></view>
			<view class="initerview-title">刷题</view>
		</view> -->
		<myHeader :isBack="isBack" className="刷题"></myHeader>
		<view class="question-content">
			<!-- 搜索框 -->
			<view class="question-header">
				<input class="header-input" type="text" value="" placeholder="请输入搜索的关键字"/>
				<image class="question-search" src="../../static/imgs/search.png" mode=""></image>
			</view>
			<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
				<view class="commidty" :style="'height: '+clientHeight+'px;'">
					<!-- 面试题板块 -->
					<QuestionCommidty :questionList="questionList"></QuestionCommidty>
				</view>
			</scroll-view>
		</view>
		
		<MyTabbar :selected='selected'></MyTabbar>
	</view>
</template>

<script>
	import {
		getQuestionsList,
	} from '@/services/interview-question.js'
	
	import myHeader from '@/common/my-header/my-header.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	import QuestionCommidty from '@/compontent/question/question-commidty.vue'
	export default {
		data() {
			return {
				selected:1,
				isBack: false,
				clientHeight: null,
				questionList: [], 
			}
		},
		onLoad() {
			this._getQuestionsList()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部的高度  select里面的参数就比如css选择器一样选择元素
					let info = uni.createSelectorQuery().in(this).select(".question-header")
					info.boundingClientRect((data)=>{
						// data包含元素的高度信息
						// data.height  头部的高度  68是tabbar的高度
						console.log( data )
						this.clientHeight = res.windowHeight - data.height - 68 -60
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
				}
			})
		},
		methods: {
			async _getQuestionsList(){
				let res = await getQuestionsList();
				console.log("面试列表", res)
				this.questionList = res
			}
		},
		components:{
			myHeader,
			MyTabbar,
			QuestionCommidty
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
	.initerview-top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 115rpx;
	}
	.status-bar{
		width: 100vw;
		height: 64rpx;
	}
	.initerview-title{
		width: 100vw;
		height: 51rpx;
		text-align: center;
		line-height: 51rpx;
	}
	.question{
		width: 100vw;
		height: 100vh;
		background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png");
	}
	.question-content{
		padding: 0 35rpx;
	}
	.question-header{
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-bottom: 30rpx;
		background-color: #FFFFFF;
		border-radius: 45rpx;
		position: relative;
		margin-top: 20rpx;
	}
	.question-header input{
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		font-weight: 400;
		text-align: center;
	}
	.question-search{
		width: 36rpx;
		height: 38rpx;
		position: absolute;
		top: 20rpx;
		right: 30rpx;
	}
</style>
