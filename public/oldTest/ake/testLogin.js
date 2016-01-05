var _cartman_test_data = [
    {
        name: "登录",
        dependencies: [],
        urls: [
            {
                "name": "获取token",
                "dependencies": [],
                "path": "user/getToken.do",
                success : function(data){
                    _cartman_test_authorizes.token = data.data.token;
                },
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            sn:-1,
                            imei:-1,
                            os:-1,
                            uuid:-1
                        },
                        "description": "获取token",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            } ,
          {
                "name": "登录",
                "dependencies": [],
                "path": "user/user/login.do",
                "method": "POST",
                authorities:[_cartman_test_authorizes] ,
                "cases": [
                    {
                        "params": {
                            //phone:18820408616,
                            phone:15652993914,
                            //phone:13927273224,
                            //phone:18664283021,
                            //phone:13144772861,
                            pwd:123456,
                            terminal:2,
                            terminalCode:"1234234234"
                        },
                        "description": "登录",
                        "expectation": null,
                        "result": {"status": 1, "resultCode": 0}
                    }

                ]
            } ,{
                "name": "登录",
                "dependencies": [],
                "path": "user/user/verifyLoginStatus.do",
                "method": "POST",
                authorities:[_cartman_test_authorizes] ,
                "cases": [
                    {
                        "params": {
                        },
                        "description": "登录检查",
                        "expectation":  {"status": 1, "resultCode": 0},
                        "result":  null
                    }

                ]
            }
        ]
    }
]
