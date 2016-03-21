var _cartman_test_data = [{
    name: '功能测试',
    dependencies: [],
    urls: [{
        name: '添加功能',
        dependencies: [],
        path: 'xsaView/resources/xsa/function',
        method: "POST",
        contentType: "application/json",
        cases: [{
            params: {
                functionDescription: "搜索应用列表",
                functionName: "搜索应用列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "POST",
                urlPath: "",
                userFunctionName: "应用列表"
            },
            description: '1.应用列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改应用",
                functionName: "修改应用",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改应用"
            },
            description: '2.修改应用',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加应用",
                functionName: "添加应用",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加应用"
            },
            description: '3.添加应用',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据ID查询菜单",
                functionName: "根据ID查询菜单",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据ID查询菜单"
            },
            description: '4.根据ID查询菜单',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单修改",
                functionName: "菜单修改",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu",
                type: "PUT",
                urlPath: "",
                userFunctionName: "菜单修改"
            },
            description: '5.菜单修改',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单列表查询",
                functionName: "菜单列表查询",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu/searchMenus",
                type: "GET",
                urlPath: "",
                userFunctionName: "菜单列表查询"
            },
            description: '6.菜单列表查询',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单拥有功能列表",
                functionName: "菜单拥有功能列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu/searchFunctions",
                type: "GET",
                urlPath: "",
                userFunctionName: "菜单拥有功能列表"
            },
            description: '7.菜单拥有功能列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单拥有子菜单列表",
                functionName: "菜单拥有子菜单列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu/searchSubMenus",
                type: "GET",
                urlPath: "",
                userFunctionName: "菜单拥有子菜单列表"
            },
            description: '8.菜单拥有子菜单列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单未拥有子菜单列表",
                functionName: "菜单未拥有子菜单列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu/searchNoSubMenus",
                type: "GET",
                urlPath: "",
                userFunctionName: "菜单未拥有子菜单列表"
            },
            description: '9.菜单未拥有子菜单列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单未拥有功能列表",
                functionName: "菜单未拥有功能列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu/searchNoFunctions",
                type: "GET",
                urlPath: "",
                userFunctionName: "菜单未拥有功能列表"
            },
            description: '10.菜单未拥有功能列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "菜单添加",
                functionName: "菜单添加",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/menu",
                type: "POST",
                urlPath: "",
                userFunctionName: "菜单添加"
            },
            description: '11.菜单添加',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据ID查询用户",
                functionName: "根据ID查询用户",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/user",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据ID查询用户"
            },
            description: '12.根据ID查询用户',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改用户",
                functionName: "修改用户",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/user",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改用户"
            },
            description: '13.修改用户',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "用户列表查询",
                functionName: "用户列表查询",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/user/searchUsers",
                type: "GET",
                urlPath: "",
                userFunctionName: "用户列表查询"
            },
            description: '14.用户列表查询',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加用户",
                functionName: "添加用户",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/user",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加用户"
            },
            description: '15.添加用户',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改角色",
                functionName: "修改角色",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改角色"
            },
            description: '16.修改角色',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "按应用ID和角色ID查询",
                functionName: "按应用ID和角色ID查询",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role",
                type: "GET",
                urlPath: "",
                userFunctionName: "按应用ID和角色ID查询"
            },
            description: '17.按应用ID和角色ID查询',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询所有角色列表",
                functionName: "查询所有角色列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role/searchRoles",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询所有角色列表"
            },
            description: '18.查询所有角色列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询用户已经分配的角色",
                functionName: "查询用户已经分配的角色",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role/searchHasRoles",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询用户已经分配的角色"
            },
            description: '19.查询用户已经分配的角色',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询用户没有的角色",
                functionName: "查询用户没有的角色",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role/searchNoRoles",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询用户没有的角色"
            },
            description: '20.查询用户没有的角色',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加角色",
                functionName: "添加角色",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/role",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加角色"
            },
            description: '21.添加角色',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据ID查找功能",
                functionName: "根据ID查找功能",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据ID查找功能"
            },
            description: '22.根据ID查找功能',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "功能修改",
                functionName: "功能修改",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "PUT",
                urlPath: "",
                userFunctionName: "功能修改"
            },
            description: '23.功能修改',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "功能添加",
                functionName: "功能添加",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function",
                type: "POST",
                urlPath: "",
                userFunctionName: "功能添加"
            },
            description: '24.功能添加',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "功能列表",
                functionName: "功能列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function/searchFunctions",
                type: "GET",
                urlPath: "",
                userFunctionName: "功能列表"
            },
            description: '25.功能列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询应用下功能列表",
                functionName: "查询应用下功能列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/function/searchApplictionFunctions",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询应用下功能列表"
            },
            description: '26.查询应用下功能列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "配置文件添加",
                functionName: "配置文件添加",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/profile",
                type: "POST",
                urlPath: "",
                userFunctionName: "配置文件添加"
            },
            description: '27.配置文件添加',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "配置文件修改",
                functionName: "配置文件修改",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/profile",
                type: "PUT",
                urlPath: "",
                userFunctionName: "配置文件修改"
            },
            description: '28.配置文件修改',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "配置文件搜索",
                functionName: "配置文件搜索",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/profile/search",
                type: "GET",
                urlPath: "",
                userFunctionName: "配置文件搜索"
            },
            description: '29.配置文件搜索',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "配置文件搜索通过Key",
                functionName: "配置文件搜索通过Key",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/profile",
                type: "GET",
                urlPath: "",
                userFunctionName: "配置文件搜索通过Key"
            },
            description: '30.配置文件搜索通过Key',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改消息",
                functionName: "修改消息",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改消息"
            },
            description: '31.修改消息',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "删除消息",
                functionName: "删除消息",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message",
                type: "DELETE",
                urlPath: "",
                userFunctionName: "删除消息"
            },
            description: '32.删除消息',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "主键查询消息",
                functionName: "主键查询消息",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message",
                type: "GET",
                urlPath: "",
                userFunctionName: "主键查询消息"
            },
            description: '33.主键查询消息',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询主键是否存在",
                functionName: "查询主键是否存在",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message/searchNewMessageIsNotExistsByID",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询主键是否存在"
            },
            description: '34.查询主键是否存在',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询消息列表",
                functionName: "查询消息列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message/getNewMessage",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询消息列表"
            },
            description: '35.查询消息列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加消息",
                functionName: "添加消息",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/message",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加消息"
            },
            description: '36.添加消息',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "删除快码",
                functionName: "删除快码",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupTypes",
                type: "DELETE",
                urlPath: "",
                userFunctionName: "删除快码"
            },
            description: '37.删除快码',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改快码",
                functionName: "修改快码",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupTypes",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改快码"
            },
            description: '38.修改快码',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询快码列表",
                functionName: "查询快码列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/searchLookupTypes",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询快码列表"
            },
            description: '39.查询快码列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询快码类型是否存在",
                functionName: "查询快码类型是否存在",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/searchLookupTypesIsNotExist",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询快码类型是否存在"
            },
            description: '40.查询快码类型是否存在',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据主键查询快码",
                functionName: "根据主键查询快码",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupTypes",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据主键查询快码"
            },
            description: '41.根据主键查询快码',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加快码",
                functionName: "添加快码",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupTypes",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加快码"
            },
            description: '42.添加快码',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "删除快码值",
                functionName: "删除快码值",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupValues",
                type: "DELETE",
                urlPath: "",
                userFunctionName: "删除快码值"
            },
            description: '43.删除快码值',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "修改快码值",
                functionName: "修改快码值",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupValues",
                type: "PUT",
                urlPath: "",
                userFunctionName: "修改快码值"
            },
            description: '44.修改快码值',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "批量修改快码值",
                functionName: "批量修改快码值",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/batchLookupValues",
                type: "PUT",
                urlPath: "",
                userFunctionName: "批量修改快码值"
            },
            description: '45.批量修改快码值',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询快码值主键是否存在",
                functionName: "查询快码值主键是否存在",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/searchLookupValuesIsNotExist",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询快码值主键是否存在"
            },
            description: '46.查询快码值主键是否存在',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "查询快码值列表",
                functionName: "查询快码值列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/searchLookupValues",
                type: "GET",
                urlPath: "",
                userFunctionName: "查询快码值列表"
            },
            description: '47.查询快码值列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据主键查询快码值",
                functionName: "根据主键查询快码值",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupValues",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据主键查询快码值"
            },
            description: '48.根据主键查询快码值',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "根据是否启用状态查询快码值列表",
                functionName: "根据是否启用状态查询快码值列表",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/searchLookupValuesByEnableFlag",
                type: "GET",
                urlPath: "",
                userFunctionName: "根据是否启用状态查询快码值列表"
            },
            description: '49.根据是否启用状态查询快码值列表',
            expectation: {
                status: 1
            },
            result: '',
        }, {
            params: {
                functionDescription: "添加快码值",
                functionName: "添加快码值",
                parameters: "{}",
                restPath: "xsaView/resources/xsa/lookup/LookupValues",
                type: "POST",
                urlPath: "",
                userFunctionName: "添加快码值"
            },
            description: '50.添加快码值',
            expectation: {
                status: 1
            },
            result: '',
        }
        ]
    }]
}];