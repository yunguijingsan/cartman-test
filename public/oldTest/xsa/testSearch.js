var _cartman_test_data = [ {
	name : '列表查询',
	dependencies : [],
	urls : [ {
		name : '查询用户',
		dependencies : [],
		path : 'xsaView/resources/xsa/user/search',
		method : 'GET',
		cases : [ {
			params : {},
			description : '查询用户',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	},{
		name : '查询消息',
		dependencies : [],
		path : 'xsaView/resources/xsa/message/getNewMessage',
		method : 'GET',
		cases : [ {
			params : {},
			description : '查询消息',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	},{
		name : '查询角色',
		dependencies : [],
		path : 'xsaView/resources/xsa/role/searchHasRoles',
		method : 'GET',
		cases : [ {
			params : {},
			description : '查询角色',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	},{
		name : '查询菜单',
		dependencies : [],
		path : 'xsaView/resources/xsa/menu/search',
		method : 'GET',
		cases : [ {
			params : {},
			description : '查询菜单',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	} ,{
		name : '查询功能',
		dependencies : [],
		path : 'xsaView/resources/xsa/function/search',
		method : 'GET',
		cases : [ {
			params : {},
			description : '查询功能',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	}]
} ];