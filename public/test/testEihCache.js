var _cartman_test_data = [ {
	name : '缓存测试',
	dependencies : [],
	urls : [ {
		name : '获取所有缓存key',
		dependencies : [],
		path : 'eihView/resources/xsa/cache/listKeys',
		method : 'GET',
		cases : [ {
			params : {},
			description : '获取所有缓存key',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	}, {
		name : '获取所有的缓存值',
		dependencies : [],
		path : 'eihView/resources/xsa/cache/listValues',
		method : 'GET',
		cases : [ {
			params : {
				key : 'a'
			},
			description : '获取所有的缓存值',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	}, {
		name : '根据key获取值',
		dependencies : [],
		path : 'eihView/resources/xsa/cache/get',
		method : 'GET',
		cases : [ {
			params : {
				key : 'a'
			},
			description : '根据key获取值',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	}, {
		name : '设置缓存key-value',
		dependencies : [],
		path : 'eihView/resources/xsa/cache/set',
		method : 'GET',
		cases : [ {
			params : {
				key : 'a',
				value :'4'
			},
			description : '设置缓存 a=4',
			expectation : {
				status : 1
			},
			result : '',

		} ]
	} ]
} ];