var _cartman_test_authorizes = {
    username: 'lcf',
    date: '2014-12-10'
}


var _cartman_test_data = [
    {
        name: "groupC",
        dependencies: [],
        urls: [
            {
                "name": "test-rq",
                "dependencies": [],
                "path": "tuan/test-rq.shtml",
                "authorities": [_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            searchProductRQ: {}
                        },
                        "description": "空",
                        "expectation": "",
                        "result": {}
                    },
                    {
                        "params": {
                            searchProductRQ: {
                                "keyword": null,
                                "priceRange": {
                                    "minPrice":3,
                                    "maxPrice":4
                                },
                                "dateRange": null,
                                "positon": null,
                                "cityID": null,
                                "itemType": 0,
                                "currentPageIndex": 0,
                                "topcount": 0,
                                "sortType": 5,
                                "pageSize": 0
                            }
                        },
                        "description": "空对象",
                        "expectation": "",
                        "result": {}
                    }
                ]
            }
        ]
    }
]