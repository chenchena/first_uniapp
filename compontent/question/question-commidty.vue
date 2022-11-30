<template>
	<view class="question-commidty">
		<block v-for="item in questionList" :key="item.id">
			<!-- 分类组件 -->
			<QuestionItem :item="item"></QuestionItem>
		</block>
	</view>
</template>

<script>
	import QuestionItem from './question-item.vue'
	export default {
		components:{QuestionItem, },
		props:{
			questionList: {
				type: Array,
				default:[]
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
.question-commidty{
	padding-bottom: 40rpx;
	box-sizing: border-box;
}
</style>
