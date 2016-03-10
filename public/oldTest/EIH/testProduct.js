var _cartman_test_data = [
//		{
//			name : "CreatePool",
//			dependencies : [],
//			stopOnFail : true,
//			urls : [ {
//				name : 'Banner',
//				dependencies : [],
//				path : 'vipView/test/createPool',
//				method : 'GET',
//				cases : [ {
//					description : 'createPoolTest',
//					expectation : {
//						status : 5
//					},
//					result : '',
//				} ]
//			} ]
//		},
		{
			name : "产品列表",
			dependencies : [],
			stopOnFail : true,
			urls : [
					{
						name : "189产品上下架",
						dependencies : [],
						path : "vipView/resources/eih/product/changeStatus/189",
						method : "GET",
						cases : [ {
							params : {},
							description : "产品上下架",
							expectation : {
								status : 1
							},
							result : "",
						} ]
					},
//					{
//						name : "删除产品属性",
//						dependencies : [],
//						path : "vipView/resources/eih/product/deleteProductLine",
//						method : "GET",
//						cases : [ {
//							params : {
//								productHeaderId : 189,
//							},
//							description : "删除产品属性 189",
//							expectation : {
//								status : 1
//							},
//							result : "",
//						} ]
//					},
					{
						name : "增加浏览次数189",
						dependencies : [],
						path : "vipView/resources/eih/product/addProductBrowseCount",
						method : "GET",
						cases : [ {
							params : {
								productHeaderId : 189
							},
							description : "浏览一次数189",
							expectation : {
								status : 1
							},
							result : "",
						} ]
					},{
						name : "增加浏览次数189",
						dependencies : [],
						path : "vipView/resources/eih/product/addProductBrowseCount",
						method : "GET",
						cases : [ {
							params : {
								productHeaderId : 189
							},
							description : "浏览一次数189",
							expectation : {
								status : 1
							},
							result : "",
						} ]
					},{
						name : "增加浏览次数189",
						dependencies : [],
						path : "vipView/resources/eih/product/addProductBrowseCount",
						method : "GET",
						cases : [ {
							params : {
								productHeaderId : 189
							},
							description : "浏览一次数189",
							expectation : {
								status : 1
							},
							result : "",
						} ]
					},
					{
						name : "全部产品列表",
						dependencies : [],
						path : "vipView/resources/eih/product/listProducts",
						method : "GET",
						cases : [
								{
									params : {},
									description : "全部产品",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data);
									}
								},
								{
									params : {
										exchangeFlag : 'Y'
									},
									description : "全部产品 兑换",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'exchangeFlag', 'Y');
									}
								},
								{
									params : {
										spreadFlag : 'Y'
									},
									description : "全部产品 推荐标志Y",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'spreadFlag', 'Y');
									}
								},
								{
									params : {
										spreadFlag : 'N'
									},
									description : "全部产品 推荐标志N",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'spreadFlag', 'N');
									}
								},
								{
									params : {
										effective : true
									},
									description : "全部产品 有效记录Y",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data);
									}
								}

						]
					},
					{
						name : "按品牌列表2",
						dependencies : [],
						path : "vipView/resources/eih/product/listProducts",
						method : "GET",
						cases : [
								{
									params : {
										brand : 'PBA'
									},
									description : "PBA长度  12",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'brand', 'PBA');
									}
								},
								{
									params : {
										brand : 'PBB'
									},
									description : "PBB长度 2",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'brand', 'PBB');
									}
								} ]
					} ]
		},
		{
			name : "产品搜索",
			dependencies : "",
			stopOnFail : true,
			urls : [
					{
						name : "全部产品列表",
						dependencies : [],
						path : "vipView/resources/eih/product/listProducts",
						method : "GET",
						cases : [
								{
									params : {
										key : ""
									},
									description : "全部产品14",
									expectation : {
										status : 1
									},
									result : "",

								},
								{
									params : {},
									description : "全部产品14",
									expectation : {
										status : 1
									},
									result : "",
								},
								{
									params : {
										exchangeFlag : 'Y'
									},
									description : "全部产品 超级兑换",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isColumnEqualValue(
												data.data.data, 'exchangeFlag',
												'Y');
									}
								}

						]
					},
					{
						name : "按品牌列表",
						dependencies : [],
						path : "vipView/resources/eih/product/listProducts",
						method : "GET",
						cases : [
								{
									params : {
										brand : 'PBA'
									},
									description : "PBA长度  12",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'brand', 'PBA');
									}
								},
								{
									params : {
										brand : 'PBB'
									},
									description : "PBB长度 12",
									expectation : {
										status : 1
									},
									result : "",
									success : function(data) {
										return isProductEffective(data.data.data)
												&& isColumnEqualValue(
														data.data.data,
														'brand', 'PBB');
									}
								} ]
					} ]
		} ];
function isColumnEqualValue(data, column, value) {
	if (!data) {
		return true;
	}
	for (var i = 0; i < data.length; i++) {
		var obj = data[i];
		if (obj[column] && obj[column] != value) {
			return false;
		}
	}
	return true;
}

function isProductEffective(data) {
	if (!data) {
		return true;
	}
	for (var i = 0; i < data.length; i++) {
		var obj = data[i];
		if (obj['effectiveStart'] != null
				&& obj['effectiveStart'] > Date.now()
				&& (obj['effectiveEnd'] != null || Date.now() > obj['effectiveEnd'])) {
			return false;
		}
	}
	return true;
}
function testDataLength(data, length, name) {
	console.log(name + ":" + data.data.totalCount + "    " + length);
	return data.data.totalCount == length;
}
