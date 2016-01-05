var _cartman_test_data = [
    {
        name: "邀请注册信息",
        dependencies: [],
        urls: [
            {
                "name": "分享",
                "dependencies": [],
                "path": "user/user/invitedDetail.do",
                "method": "POST",
                authorities:[_cartman_test_authorizes]   ,
                "cases": [
                    {
                        "params": {
                            content: "内容",
                            invitedType: "WB"
                        },
                        "description": "微博分享",
                        "expectation": {},
                        "result": {"status": 1, "resultCode": 0}
                    } ,
                    {
                        "params": {
                            content: "微信分享",
                            invitedType: "WX"
                        },
                        "description": "微信分享",
                        "expectation": null,
                        "result": {"status": 1, "resultCode": 0}
                    }
                ]
            }
        ]
    }
]
