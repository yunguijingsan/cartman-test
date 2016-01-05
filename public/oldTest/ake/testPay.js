
var _cartman_test_data = [
    {
        name: "支付相关",
        dependencies: [],
        urls: [
            //{
            //    "name": "获取token",
            //    "dependencies": [],
            //    "path": "user/getToken.do",
            //    success : function(data){
            //        _cartman_test_authorizes.token = data.data.token;
            //    },
            //    "method": "POST",
            //    "cases": [
            //        {
            //            "params": {
            //                sn:-1,
            //                imei:-1,
            //                os:-1,
            //                uuid:-1
            //            },
            //            "description": "获取token",
            //            "expectation": {"status": 1, "resultCode": 0},
            //            "result": {}
            //        }
            //    ]
            //} ,
            //{
            //    "name": "xmlPost测试",
            //    "dependencies": [],
            //    "path": "user/pay/wxNotifyUrl.do",
            //    "method": "POST",
            //    "cases": [
            //        {
            //            "params": "sfjdklsjdafoiwehfalksdjfsid",
            //            "description": "xmlPost测试",
            //            "expectation": {"status": 1, "resultCode": 0},
            //            "result": {}
            //        }
            //    ]
            //},
            //{
            //    "name": "微信预付测试",
            //    "dependencies": [],
            //    "path": "user/pay/prePayOrder.do",
            //    "method": "POST",
            //    "cases": [
            //        {
            //            "params": {
            //                payType:"WX_APP",
            //                body:'body',
            //                detail:'det ail',
            //                totalFee:1,
            //                ip:'8.8.8.8',
            //                attach:'attach',
            //                chargeType:'PAY_PARK_FEE',
            //                userId:'154'
            //            } ,
            //            "description": "微信预付测试",
            //            "expectation": {"status": 1, "resultCode": 0},
            //            "result": {}
            //        }
            //    ]
            //} ,
         /*   {
                "name": "支付宝预支付",
                "dependencies": [],
                "path": "user/pay/prePayOrder.do",
                "method": "GET",
                "cases": [
                    {
                        "params": {
                            payType:"ALI_APP",
                            body:'body',
                            detail:'detail',
                            totalFee:1,
                            attach:'attach',
                            chargeType:'PAY_PARK_FEE',
                            userId:'154'
                        } ,
                        "description": "微信预付测试",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },
            {
                "name": "支付宝wap支付",
                "dependencies": [],
                "path": "user/pay/prePayOrderAliWap.do",
                "method": "GET",
                "cases": [
                    {
                        "params": {
                            payType:"ALI_APP",
                            body:'body',
                            detail:'detail',
                            totalFee:1,
                            attach:'attach',
                            chargeType:'PAY_PARK_FEE',
                            userId:'154'
                        } ,
                        "description": "微信预付测试",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },*/{
                "name": "支付宝通知测试",
                "dependencies": [],
                "path": "user/pay/aliNotifyUrl.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {},
                        "description": "支付宝通知测试",
                        "expectation": null,
                        "result": {}
                    }
                ]
            }
        ]
    }
]
