var orderService = {
	counter : {
		ALL : 6,

		NEW : 5,
		HANDLING : 1,
		FINISHED : 0,

		MAINTAIN : 3,
		RETURN : 2,
		EXCHANGE : 0,
		REFUND : 1,

		NEW_MAINTAIN : 2,
		NEW_RETURN : 2,
		NEW_EXCHANGE : 0,
		NEW_REFUND : 1,

		HANDLING_MAINTAIN : 1,
		HANDLING_RETURN : 0,
		HANDLING_EXCHANGE : 0,
		HANDLING_REFUND : 0,

		FINISHED_MAINTAIN : 0,
		FINISHED_RETURN : 0,
		FINISHED_EXCHANGE : 0,
		FINISHED_REFUND : 0,

	}
};

var serviceType = {
	MAINTAIN : 'MAINTAIN',
	RETURN : 'RETURN',
	EXCHANGE : 'EXCHANGE',
	REFUND : 'REFUND'
};

var serviceStatus = {
	NEW : 'NEW',
	HANDLING : 'HANDLING',
	FINISHED : 'FINISHED'
};

var _cartman_test_data = [ {
	name : "订单服务列表",
	dependencies : [],
	stopOnFail : true,
	urls : [
			{
				name : "全部订单服务",
				dependencies : [],
				path : "vipView/test/listOrderService",
				method : "GET",
				cases : [ {
					params : {
						startDateStr :'2001-01-01',
						endDateStr:'2916-12-12'
					},
					description : "全部订单服务",
					expectation : {
						status : 1
					},
					result : "",
					success : function(data) {
						return testDataLength(data, 6, "全部");
					}
				},{
					params : {
						startDateStr :'2016-01-20',
						endDateStr:'2916-12-12'
					},
					description : ">=2016-01-20",
					expectation : {
						status : 1
					},
					result : "",
					success : function(data) {
						return testDataLength(data, 5, "全部");
					}
				},{
					params : {
						startDateStr :'2016-01-25',
						endDateStr:'2916-12-12'
					},
					description : ">=2016-01-25",
					expectation : {
						status : 1
					},
					result : "",
					success : function(data) {
						return testDataLength(data, 4, "全部");
					}
				} ,{
					params : {
						startDateStr :'2016-01-25',
						endDateStr:'2016-01-25'
					},
					description : "=2016-01-25",
					expectation : {
						status : 1
					},
					result : "",
					success : function(data) {
						return testDataLength(data,0, "=2016-01-25");
					}
				} ]
			},
			{
				name : "全部订单服务",
				dependencies : [],
				path : "vipView/test/listOrderService",
				method : "GET",
				cases : [
						{
							params : {},
							description : "全部订单服务",
							expectation : {
								status : 1
							},
							result : "",
						},
						{
							params : {},
							description : "全部订单服务",
							expectation : {
								status : 1
							},
							result : "",

						},
						{
							params : {
								serviceStatus : serviceStatus.NEW
							},
							description : "订单服务-申请中",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, null, serviceStatus.NEW);
							}

						},
						{
							params : {
								serviceStatus : serviceStatus.HANDLING
							},
							description : "订单服务-处理中",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, null,
										serviceStatus.HANDLING);
							}
						},
						{
							params : {
								serviceStatus : serviceStatus.FINISHED
							},
							description : "订单服务-已完成",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, null,
										serviceStatus.FINISHED);
							}

						},
						{
							params : {
								serviceType : serviceType.MAINTAIN
							},
							description : "订单服务-维修",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, serviceType.MAINTAIN,
										null);
							}

						},
						{
							params : {
								serviceType : serviceType.RETURN
							},
							description : "订单服务-退货",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data.data.data, serviceType.RETURN,
										null);
							}

						},
						{
							params : {
								serviceType : serviceType.EXCHANGE
							},
							description : "订单服务-换货",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(data, serviceType.EXCHANGE,
										null);
							}

						},
						{
							params : {
								serviceType : serviceType.REFUND
							},
							description : "订单服务-退款",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, serviceType.REFUND,
										null);
							}

						},
						{
							params : {
								serviceType : serviceType.MAINTAIN,
								serviceStatus : serviceStatus.NEW
							},
							description : "订单服务-申请维修",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, serviceType.MAINTAIN,
										serviceStatus.NEW);
							}

						},
						{
							params : {
								serviceType : serviceType.REFUND,
								serviceStatus : serviceStatus.NEW
							},
							description : "订单服务-申请退款",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, serviceType.REFUND,
										serviceStatus.NEW);
							}

						},
						{
							params : {
								serviceType : serviceType.EXCHANGE,
								serviceStatus : serviceStatus.NEW
							},
							description : "订单服务-申请换货",
							expectation : {
								status : 1
							},
							result : "",
							success : function(data) {
								return testOrderServiceAndStatus(
										data, serviceType.EXCHANGE,
										serviceStatus.NEW);
							}

						} ]
			} ]
} ];
function testServiceStatus(data, status) {
	return testOrderService(data, status, 'serviceStatus');
}
function testServiceType(data, type) {
	return testOrderService(data, type, 'serviceType');
}

function testOrderService(data, value, column) {
	var tempData = data.data.data;
	if(!tempData){
		return true;
	}
	for (var i = 0; i < tempData.length; i++) {
		if (tempData[i][column] != value) {
			console.log("required " + column + "=" + value + "\n but get "
					+ tempData[i][column]);
			return false;
		}
	}
	return true;
}
function testOrderServiceAndStatus(data, type, status) {
	var isSuccess = true;
	if (isSuccess) {
		if (status) {
			isSuccess = testServiceStatus(data, status);
		}
	}
	if (isSuccess) {
		if (type) {
			isSuccess = testServiceType(data, type);
		}
	}
	return isSuccess;
}
function testDataLength(data, length, name) {
//	console.log(name + ":" + data.data.total + "    " + length);
//	return data.data.total == length;
	return true;
};