var _cartman_test_data = [ {
	name : '支付',
	dependencies : [],
	urls : [ {
		name : '支付',
		dependencies : [],
		path : 'vipView/resources/eih/pay/pay',
		method : 'GET',
		cases : [ {
			params:{
				saleId:399,
				orderNumber:'ON399',
				totalPrice:929.70,
				payMethod :'WX'
			},
			description : '微信支付',
			expectation : {
				status : 1
			},
			result : '',
		} , {
			params:{
				saleId:399,
				orderNumber:'ON399',
				totalPrice:929.70,
				payMethod :'ALI'
			},
			description : '阿里支付',
			expectation : {
				status : 1
			},
			result : '',
		}]
	}, {
		name : '查询订单支付状态',
		dependencies : [],
		path : 'vipView/resources/eih/pay/orderStatus',
		method : 'GET',
		cases : [ {
			params : {
				orderNumber : 'ON399'
			},
			description : 'ON399支付状态',
			expectation : {
				status : 1
			},
			result : '',
		} ]
	} ]
} ];