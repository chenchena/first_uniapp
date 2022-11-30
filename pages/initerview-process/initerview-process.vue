<template>
	<view class="initerview-process">
		<myheader :isBack="false" className="面试求职流程"></myheader>
		<view class="process">
			<view class="process-content">
				<ProcessItem :processList="processList"></ProcessItem>
			</view>
		</view>
		<MyTabbar :selected='selected'></MyTabbar>
	</view>
</template>

<script>
	import {
		getProcessList,
	} from '@/services/process.js'
	
	import Myheader from '@/common/my-header/my-header.vue'
	import ProcessItem from '@/compontent/process/process-item.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		data() {
			return {
				selected:2,
				processList: [],
				
			}
		},
		computed:{
			changeList(){
				this.processList.map(item => {
					item.interviewProcessAttrs.map(tem => {
						if(tem.objType === 2){
							item.isVedio = true
						}else{
							item.isVedio = false
						}
					})
				})
			}
		},
		onLoad() {
			this._getProcessList()
		},
		methods: {
			async _getProcessList(){
				let res = await getProcessList()
				console.log("面试流程", res)
				this.processList = res
			}
		},
		components:{
			Myheader,
			ProcessItem,
			MyTabbar
		}
	}
</script>

<style scoped>
	.process{
		width: 750rpx;
		padding-top: 20rpx;
		padding-bottom: 120rpx;
		background-image: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png");
		background-size: cover;
		background-position: center center;
		box-sizing: border-box;
		position: relative;
	}
	.process-content{
		width: 750rpx;
		height: 100%;
		position: relative;
		top: 0;
		left: 10rpx;
		padding-bottom: 40rpx;
	}
</style>
