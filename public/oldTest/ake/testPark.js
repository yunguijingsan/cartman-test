var _cartman_test_data = [
    {
        name: "停车场相关",
        dependencies: [],
        urls: [
            {
                "name": "查询空车位数量",
                "dependencies": [],
                "path": "user/park/listRemain.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            ids: [1, 2, 3]
                        },
                        "description": "正常查询",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }]
            },
            {
                "name": "查询空车位数量",
                "dependencies": [],
                "path": "user/getOneTimeToken.do",
                "authorities": [_cartman_test_authorizes],
                success : function(data){
                    _cartman_test_authorizes.oneTimeToken = data.data.oneTimeToken;
                },
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            ids: [1, 2, 3]
                        },
                        "description": "正常查询",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }]
            },
            {
                "name": "获取停车场",
                "dependencies": [],
                "path": "user/park/listParks.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            gpsY: 23.03,
                            radius: 700
                        },
                        "description": "缺少gpsX",
                        "expectation": {"status": 2, "resultCode": 1},
                        "result": {}
                    }, {
                        "params": {
                            radius: 700,
                            gpsY: 23.03
                        },
                        "description": "缺少gpsY",
                        "expectation": {"status": 2, "resultCode": 1},
                        "result": {}
                    }, {
                        "params": {
                            radius: 700,
                            gpsY: "asd",
                            gpsX: 113.12
                        },
                        "description": "psY格式不对",
                        "expectation": {
                            "status": 2, "resultCode": 1
                        }
                        ,
                        "result": {}
                    }, {
                        "params": {
                            gpsX: 113.12,
                            gpsY: 23.03,
                            radius: 700
                        },
                        "description": "113.12-23.03-700",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }, {
                        "params": {
                            gpsX: 113.12,
                            gpsY: 23.03,
                            radius: 1000
                        },
                        "description": "113.12-23.03-1000",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }, {
                        "params": {
                            gpsX: 113.12,
                            gpsY: 23.03
                        },
                        "description": "113.12-23.03-默认",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            gpsX: 113.18,
                            gpsY: 23.03
                        },
                        "description": "113.18-23.03-默认",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            }
        ]
    }
]
