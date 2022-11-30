export default {
	common: {
		baseUrl: "https://fawn.xuexiluxian.cn",
		data: {},
		header: {
			"Content-Type": "application/json",
			// "Content-Type": "application/x-www-form-urlencoded",
		},
		method: "Get",
		dataType: 'json'
	},
	
	request(options = {}){
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.dataType = options.dataType || this.common.dataType;
		options.method = options.method || this.common.method;
		
		return new Promise((res, rej) => {
			uni.showLoading({
				title:"加载中..."
			})
			
			uni.request({
				...options,
				success: (result) => {
					if(result.data.resultCode != 200){
						setTimeout(function(){
							uni.hideLoading()
						}, 300)
						uni.showToast({
							title: result.message || '请求出错,稍后重试',
							icon: 'none',
							duration: 1000,
							mask: true
						});
					}
					
					setTimeout(function(){
						uni.hideLoading()
					}, 300)
					
					let data = result.data.data
					if(data){
						res(data)
					}else{
						res(result.data)
					}
				}
			})
		})
	}
}