
var _cartman_test_data = [
    {
        name: "用户消息测试",
        dependencies: [],
        urls: [
          /*  {
                "name": "添加消息",
                "dependencies": [],
                "path": "user/test/addMessage.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {},
                        "description": "添加消息",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            }, */{
                "name": "获取用户信息",
                "dependencies": [],
                "path": "user/user/getUserInfo.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": { },
                        "description": "APP",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            }, {
                "name": "消息推送设置",
                "dependencies": [],
                "path": "user/user/isAutoPushMessage.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            type :'APP',
                            isAuto:true
                        },
                        "description": "APP",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            type :'WEIXIN',
                            isAuto:true
                        },
                        "description": "WEIXIN",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },{
                "name": "自动扣费设置",
                "dependencies": [],
                "path": "user/user/isAutoPay.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            isAuto:true
                        },
                        "description": "APP",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },{
                "name": "读取消息",
                "dependencies": [],
                "path": "user/message/updateUserMessage.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            id:12,
                            type:1
                        },
                        "description": "读取消息",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            }, {
                "name": "删除消息",
                "dependencies": [],
                "path": "user/message/updateUserMessage.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            id:12,
                            type:2
                        },
                        "description": "删除消息",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },{
                "name": "查询消息列表",
                "dependencies": [],
                "path": "user/message/listUserMessages.do",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                        },
                        "description": "消息列表",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                ]
            }
        ]
    }
]
