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
				validateCode:"7wqh",
				token:"aae1ab03541e1b0a1c4d889e7ebc4098"
			},
			description : '正确的用户名密码登录',
			expectation : {
				status : 1
			},
			result : '',
		}]
	},{
		name : '获取验证码',
		dependencies : [],
		path : 'xsaView/resources/xsa/login',
		method : "GET",
		cases : [ {
			params:{},
			description : '获取验证码',
			expectation : {
				status : 1
			},
			result : '',
		}]
	},{
		name : '获取token',
		dependencies : [],
		path : 'xsaView/resources/xsa/login/token',
		method : "GET",
		cases : [ {
			params:{},
			description : '获取token',
			expectation : {
				status : 1
			},
			result : '',
		}]
	},{
		name : '退出',
		dependencies : [],
		path : 'xsaView/resources/xsa/login',
		method : "PUT",
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