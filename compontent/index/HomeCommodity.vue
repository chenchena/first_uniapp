<template>
	<view class="home-main">
		<block v-for="(item,index) in homeDate" :key='index'>
			<HomeItem :item='item'></HomeItem>
		</block>
	</view>
</template>

<script>	
	import HomeItem from '@/compontent/index/HomeItem.vue'
	export default{
		props:{
			homeDate:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
			}
		},
		components:{
			HomeItem
		},
		onLoad() {
		},
		methods:{
		}
	}
</script>

<style scoped>
	.home-main{
		width: 676rpx;
		margin: 20rpx 0 0 36rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
