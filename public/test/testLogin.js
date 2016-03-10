var _cartman_test_data = [ {
	name : '登录测试',
	dependencies : [],
	urls : [ {
		name : '登录',
		dependencies : [],
		path : 'xsaView/resources/xsa/login',
		method : "POST",
		contentType:"application/json",
		cases : [ {
			params:{
				userName:"E100462",
				password:"123456",
			},
			description : '正确的用户名密码登录',
			expectation : {
				status : 1
			},
			result : '',
		}]
	}]
}];