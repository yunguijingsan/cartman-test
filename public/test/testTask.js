
var _cartman_test_authorizes ={
    username : 'lcf',
    date :'2014-12-10'
}


var _cartman_test_data = [
    {
        name: "groupC",
        dependencies: [],
        stopOnFail:true,
        urls: [
            {
                "name": "添加一次性任务",
                "dependencies": [],
                "path": "/addOneTimeTask.shtml",
                "authorities":[_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params":{
                            name:"命名任务1"
                        },
                        "description": "命名任务1",
                        "expectation": "",
                        "result": {
                            name:"命名任务1"
                        }
                    },
                    {
                        "params":{
                            name:"命名任务2"
                        },
                        "description": "命名任务2",
                        "expectation": "",
                        "result":{
                            name:"命名任务2"
                        }
                    }
                ]
            },
            {
                "name": "添加一次性任务",
                "dependencies": [],
                "path": "/addOneTimeTask.shtml",
                "authorities":[_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params":"",
                        "description": "一次性默认名称任务",
                        "expectation": "",
                        "result": ""
                    },
                    {
                        "params":"",
                        "description": "一次性默认名称任务",
                        "expectation": "",
                        "result": ""
                    },
                    {
                        "params":"",
                        "description": "一次性默认名称任务",
                        "expectation": "",
                        "result": ""
                    },
                    {
                        "params":"",
                        "description": "一次性默认名称任务",
                        "expectation": "",
                        "result": ""
                    },
                ]
            },
            {
                "name": "添加表达式任务",
                "dependencies": [],
                "path": "/addCronTask.shtml",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "description": "每分钟第三秒执行的任务",
                        "expectation":{
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "result": ""
                    },
                ]
            },
            {
                "name": "添加命名表达式任务",
                "dependencies": [],
                "path": "/addNameCronTask.shtml",
                "method": "POST",
                "cases": [
                    {
                        "params": {
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "description": "每分钟第三秒执行的任务",
                        "expectation":{
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "result": ""
                    },
                    {
                        "params": {
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "description": "每分钟第三秒执行的任务",
                        "expectation": {
                            "name" : "cron1",
                            "cron":'3 * * * * ?'
                        },
                        "result": ""
                    },
                    {
                        "params": {
                            "name" : "cron2",
                            "cron":'3 * * * * ?'
                        },
                        "description": "每分钟第三秒执行的任务2",
                        "expectation": {
                            "name" : "cron2",
                            "cron":'3 * * * * ?'
                        },
                        "result": ""
                    },
                ]
            },
            {
                "name": "任务列表",
                "dependencies": [],
                "path": "/task-list.shtml",
                "authorities":[_cartman_test_authorizes],
                "method": "POST",
                "cases": [
                    {
                        "params":"",
                        "description": "任务列表",
                        "expectation": "",
                        "result": ""
                    },
                ]
            },
        ]
    }
]