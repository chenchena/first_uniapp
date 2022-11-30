<template>
	<view class="notice-content">
		<myHeader :className="className"></myHeader>
		<view class="title">
			亲爱的学员们：
		</view>
		<rich-text :nodes="content"></rich-text>
		<view class="rightBox athor">
			{{remark}}
		</view>
		<view class="rightBox time">{{updateTime}}</view>
	</view>
</template>

<script>
	import {
		getNoticeList,
	} from '@/services/start-school.js'
	
	import myHeader from '../../common/my-header/my-header.vue'
	export default {
		components:{myHeader, },
		data() {
			return {
				className: "",
				content:"",
				index: 0,
				updateTime: "",
				remark:""
			}
		},
		onLoad(options){
			this.index = options.index
			this._getNoticeList()
			
		},
		methods: {
			//公告详情
			async _getNoticeList() {
				let res = await getNoticeList()
				res = res[this.index]
				this.className = res.noticeTitle
				this.content = res.noticeContent
				this.remark = res.remark
				this.updateTime = res.updateTime
			},
		}
	}
</script>

<style scoped>
.title{
	margin-bottom: 20rpx;
}
.rightBox{
	text-align: right;
}
.athor{
	margin-top: 50rpx;
	margin-bottom: 15rpx;
}
</style>
