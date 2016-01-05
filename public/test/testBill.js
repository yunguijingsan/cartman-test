var _cartman_test_data = [
    {
        name: "券测试",
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
            {
                "name": "获取用户的通用券",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "user/bill/listUserCoupon.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            couponType:'COMMON',
                            pageSize:'100',
                            pageNumber:'1'
                        },
                        "description": "第一页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },  {
                "name": "获取用户可用的券",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "user/bill/listCouponToUse.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'1'
                        },
                        "description": "第1页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'2'
                        },
                        "description": "第2页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'3'
                        },
                        "description": "第3页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'4'
                        },
                        "description": "第4页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'5'
                        },
                        "description": "第5页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'6'
                        },
                        "description": "第6页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },    {
                "name": "获取用户账单",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "user/bill/listUserBillRecord.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'1'
                        },
                        "description": "第1页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'2'
                        },
                        "description": "第2页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'3'
                        },
                        "description": "第3页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'4'
                        },
                        "description": "第4页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'5'
                        },
                        "description": "第5页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'6'
                        },
                        "description": "第6页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },  {
                "name": "获取用户充值记录",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "user/bill/listUserChargeRecord.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'1'
                        },
                        "description": "第1页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'2'
                        },
                        "description": "第2页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'3'
                        },
                        "description": "第3页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'4'
                        },
                        "description": "第4页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    } ,
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'5'
                        },
                        "description": "第5页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    },
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'6'
                        },
                        "description": "第6页",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },  {
                "name": "APP停车支付记录",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "user/bill/listParkRecord.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'1'
                        },
                        "description": "正确性测试",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            },  {
                "name": "WEIXIN停车支付记录",
                "dependencies": [],
                authorities:[_cartman_test_authorizes]   ,
                "path": "weixin/bill/listParkRecord.do",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            pageSize:'10',
                            pageNumber:'1'
                        },
                        "description": "正确性测试",
                        "expectation": {"status": 1, "resultCode": 0},
                        "result": {}
                    }
                ]
            }
        ]
    }
]
