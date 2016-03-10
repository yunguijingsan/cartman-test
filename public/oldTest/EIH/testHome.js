var _cartman_test_data = [ {
	name : '主页',
	dependencies : [],
	urls : [ {
		name : 'Banner',
		dependencies : [],
		path : 'vipView/resources/eih/index/getIndexBanner',
		method : 'GET',
		cases : [ {
			description : '获取主页Banner',
			expectation : {
				status : 1
			},
			result : '',
		} ]
	}, {
		name : '产品列表',
		dependencies : [],
		path : 'vipView/resources/eih/product/listProductsJson',
		method : 'GET',
		cases : [ {
			params:{
				category:'PCK',
				spreadFlag:'Y',
				rows:3
			},
			description : '住材包.套餐',
			expectation : {
				status : 1
			},
			result : '',
		} , {
			params:{
				spreadFlag:'Y',
				rows:8
			},
			description : '极致单品',
			expectation : {
				status : 1
			},
			result : '',
		}, {
			params:{
				brand:'PBA',
				spreadFlag:'Y',
				rows:8
			},
			description : '按品牌搜索产品',
			expectation : {
				status : 1
			},
			result : '',
		}]
	} , {
		name : '品牌列表',
		dependencies : [],
		path : 'vipView/resources/eih/product/listBrands',
		method : 'GET',
		cases : [ {
			description : '获取品牌列表',
			expectation : {
				status : 1
			},
			result : '',
		} ]
	}, {
		name : '获取首页案例',
		dependencies : [],
		path : 'vipView/resources/eih/index/getIndexCase',
		method : 'GET',
		cases : [ {
			description : '获取首页案例',
			expectation : {
				status : 1
			},
			result : '',
		} ]
	}]
} ];