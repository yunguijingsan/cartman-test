var _cartman_test_data = [
    {
        name: "产品列表",
        dependencies: [],
        stopOnFail:true,
        urls: [
            {
                name: "全部订单",
                dependencies: [],
                path: "vipView/test/listOrders",
                method: "GET",
                cases: [
                    {
                        params:{},
                        description: "全部订单",
                        expectation: {status:1},
                        result: "",
                    }
                ]
            }
        ]
    }
];

function testDataLength(data,length,name){
	console.log(name+":"+data.data.totalCount + "    "+length)
	return data.data.totalCount == length;
};
