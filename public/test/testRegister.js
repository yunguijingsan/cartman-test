var _cartman_test_data = [
    {
        name: "登录",
        dependencies: [],
        urls: [
  /*          {
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
            } ,*/
/*            {
                "name": "获取短信验证码",
                "dependencies": [],
                "path": "user/user/sendRegisterVerifyCode.do",
                "method": "POST",
                authorities:[_cartman_test_authorizes] ,
                "cases": [
                    {
                        "params": {
                            phone:15652993914
                        },
                        "description": "获取短信验证码",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            } ,*/
          {
                "name": "注册",
                "dependencies": [],
                "path": "user/user/register.do",
                "method": "POST",
                authorities:[_cartman_test_authorizes] ,
                "cases": [
                    {
                        "params": {
                            phone:15652993914,
                            pwd:123456,
                            verifyCode:7987
                        },
                        "description": "注册",
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
