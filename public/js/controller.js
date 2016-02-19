/**
 * Created by lcf on 2014/12/4.
 */
function TestAllCrl($http, $scope) {
    $scope.groups = [];
    $scope.runStepCount = 10;
    $scope.stepCount = 0;
    $scope.testFiles =[];
    $scope.servers=_cartman_test_servers;
    $scope.authorities=authorizes;
    $scope.isAsync = true;
    $scope.selectedServer = _cartman_test_servers[0];
    $http.get("/cartman_test_file").success(function(data){
        $scope.testFiles = data;
        if(data.length>0){
            cartman.executeFile($scope,data[0],init);
        }
    });
    $("#start").click(function(){
        var fileName = $("#testFile").val();
        cartman.executeFile($scope,fileName,init);
    });
}
$(function () {
     init();
});

function init() {
    $("#testServer").change(function(){
        _cartman_test_authorizes._cartman_test_server = $(this).val().trim();
    });
    _cartman_test_authorizes._cartman_test_server =    $("#testServer").val().trim();
    $("#testAuthorizes").change(function(){
        for(var i=0;i<authorizes.length;i++){
            var authority = authorizes[i];
              if(authority.name == $(this).val().trim()){
                  authority._cartman_test_server = _cartman_test_authorizes._cartman_test_server;
                  _cartman_test_authorizes = authority.authority;
                  _cartman_test_authorizes._cartman_test_server = authority._cartman_test_server;
                  console.log(_cartman_test_authorizes);
                  break;
              }
        }
        console.log(_cartman_test_authorizes);
        return false;
    });
//    $(".collapse").collapse("show");
//    var isToggle = false;
    $("button[name='group']").click(function () {
        $(".collapse").collapse("toggle");
//       isToggle =  changeStatus(isToggle,function(){
//           $("button[name='group']").text("全部展开")
//            $(".collapse").collapse("toggle");
//        },function(){
//           $("button[name='group']").text("全部收起")
//            $(".collapse").collapse("toggle");
//        })
    });
    var isOnlyDanger = false;
    $("button[name='success']").click(function () {
        isOnlyDanger = changeStatus(isOnlyDanger,function(){
            $("button[name='success']").text("隐藏成功");
            $("#accordion .panel-success").show();
        },function(){
            $("button[name='success']").text("显示成功");
            $("#accordion .panel-success").hide();
        });
    });
    var changeStatus = function (flag, trueFun,falseFun) {
        if (flag) {
            trueFun();
        } else {
            falseFun();
        }
        return !flag;
    };

    $(".a-ul").click(function(){
        $(".a-ul").parent().removeClass("active");
        $(".a-ul").next().removeClass("active");
        $(this).next().addClass("active");
        $(this).parent().addClass("active");
    });
    $(".a-ul").parent().removeClass("active");
    $(".a-ul").next().removeClass("active");

    $(".a-li").click(function(){
        $(".a-li").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
    $(".a-li").parent().removeClass("active");
}


