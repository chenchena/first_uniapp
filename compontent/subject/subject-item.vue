<template>
	<view class="subject-item">
		<view class="item-title">
			<text>{{num+1}} {{item.title}}</text>
			<view class="" v-if="item.content">
				<CmderMDParserHighlight :resource="item.content"></CmderMDParserHighlight>
			</view>
		</view>
		<view class="item-content">
			<view class="item-result" v-if="item.answer">
				<image class="item-img" src="../../static/imgs/result.png" mode=""></image>
				<view class="result">结果：</view>
			</view>
			<view class="">
				<CmderMDParserHighlight :resource="item.answer" class="answer"></CmderMDParserHighlight>
			</view>
			<view class="item-result" v-if="item.parsing">
				<image class="item-img" src="../../static/imgs/explain.png" mode=""></image>
				<view class="result">解释：</view>
			</view>
			<view class="parsing">
				<CmderMDParserHighlight :resource="item.parsing" class="answer"></CmderMDParserHighlight>
			</view>
		</view>
	</view>
</template>

<script>
	import CmderMDParserHighlight from '@/components/cmder-MDParserHighlight/index.vue'
	export default {
		components:{CmderMDParserHighlight, },
		props: {
			item: {
				type: Object,
				default:{}
			},
			num: {
				type: Number,
				default: 0
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
.subject-item{
	margin-top: 60rpx;
	margin-bottom: 100rpx;
}
.item-title{
	width: 100%;
	height: 100%;
	font-size: 30rpx;
	font-weight: normal;
	padding: 0 20rpx;
	color: #344356;
	box-sizing: border-box;
}
.item-content{
	padding: 0 20rpx;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
}
.item-result{
	display: flex;
}
.item-img{
	width: 45rpx;
	height: 44rpx;
}
.result{
	width: 576rpx;
	font-size: 32rpx;
	font-weight: 400;
	color: #333333;
	padding-left: 10rpx;
}
.answer{
	box-sizing: border-box;
	border: 2rpx solid transparent;
}
.parsing{
	box-sizing: border-box;
}
</style>
