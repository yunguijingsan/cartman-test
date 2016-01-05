var _cartman_test_data = [
    {
        name: "停车场相关",
        dependencies: [],
        urls: [
            {
                "name": "同步数据",
                "dependencies": [],
                "path": "office/synch/check.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                             ids: [1, 2, 3]
                        },
                        "description": " ",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }]

            }
        ]
    }
]
