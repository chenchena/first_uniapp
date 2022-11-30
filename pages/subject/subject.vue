<template>
	<view class="subject">
		<MyHeader className="刷题"></MyHeader>
		<view class="subject-content">
			<view class="subject-common">
				<!-- 定义计数器 -->
				<view class="dots">
					<text>{{current+1}}/{{num}}</text>
				</view>
				<!-- 中间滑动内容 -->
				<swiper class="subject-swiper" :style="'height: '+clientHeight+'px;'" :current="current" @change="swiperChange">
					<swiper-item v-for="(item, index) in subjectItemList" :key="item.id">
						<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
							<!-- 每道题组件 -->
							<SubjectItem :item=item :num="current"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 底部 上下题切换 -->
		<view class="subject-check">
			<view class="check-btn" @click="beforSubject">上一题</view>
			<view class="check-btn" @click="afterSubject">下一题</view>
		</view>
	</view>
</template>

<script>
	import{
		selQuestionNum,
		 getQuestionsDetailList
	} from '@/services/subject.js'
	
	import MyHeader from '@/common/my-header/my-header.vue'
	import SubjectItem from '@/compontent/subject/subject-item.vue'
	export default {
		components: {MyHeader, SubjectItem},
		data() {
			return {
				clientHeight: null,
				subjectItemList: [],
				current:0,
				num:0,
			}
		},
		onLoad(options) {
			this._selQuestionNum(options.typeId)
			this._getQuestionsDetailList(options.typeId)
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight - this.getStatusHight()
					let dots = uni.createSelectorQuery().in(this).select(".dots")
					dots.boundingClientRect((data)=>{
						// data包含元素的高度信息
						// data.height  
						this.clientHeight = this.clientHeight - data.height
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
					let check = uni.createSelectorQuery().in(this).select(".subject-check")
					check.boundingClientRect((data)=>{
						this.clientHeight = this.clientHeight - data.height -10
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
				}
			})
		},
		methods: {
			getStatusHight(){
				let res = uni.getSystemInfoSync();
				return res.statusBarHeight
			},
			//获取题数
			async _selQuestionNum(id){
				let res = await selQuestionNum(id)
				console.log("题数", res)
				this.num = res.questionNum; 
			},
			//获取面试题
			async _getQuestionsDetailList(id){
				let res = await getQuestionsDetailList({
					typeId: id
				});
				// console.log("面试题", res)
				this.subjectItemList = res;
			},
			//轮播图切换
			swiperChange(e) {
				this.current = e.detail.current;
				// console.log("当前页",e.detail, this.current)
			},
			//上一题
			beforSubject(){
				this.current = this.current-1;
				if(this.current < 0){
					this.current = 0;
					uni.showToast({
						title: '当前为第一页',
						icon: 'none',
						duration: 1000,
						mask: true
					});
				}
			},
			//下一题
			afterSubject(){
				this.current = this.current+1;
				if(this.current > this.num -1){
					this.current = this.num-1;
					uni.showToast({
						title: '等待更新！！',
						icon: 'none',
						duration: 1000,
						mask: true
					});
				}
			}
		}
	}
</script>

<style scoped>
    /* 消除滚动条 */
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.subject-swiper{
		height: auto;
	}
	.subject{
		position: relative;
		width: 100vw;
		background-color: #f0f3f7;
		box-sizing: border-box;
	}
	.subject-content{
		width: 100%;
		padding: 0 37rpx;
		box-sizing: border-box;
	}
	.dots{
		height: 30rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #344356;
	}
	.subject-common{
		padding-bottom: 50rpx;
	}
	.subject-check{
		position: fixed;
		bottom: 10rpx;
		left: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.check-btn{
		width: 311rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		color: #FFFFFF;
		background-color: rgb(90, 103, 247);
		margin-left: 55rpx;
		text-align: center;
	}
	.next{
		background-color: rgb(90, 139, 245);
	}
</style>
