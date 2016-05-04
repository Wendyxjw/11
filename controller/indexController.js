var myApp = angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.data={a:"cc"};
        $scope.aa="xjw";
        $scope.todos = [
            {action: "a", complete: true},
            {action: "b", complete: true},
            {action: "c", complete: false},
            {action: "d", complete: true}
        ];
        $scope.viewFile=function(){
            return $scope.showList?"view/list.html":"view/table.html";
        };
        $scope.buttonName=["Red","Green","Blue"];
        $scope.settings={
            Rows:"Red",
            Columns:"Green"
        };
        $scope.clickAlert=function(e){
            console.log("event type:"+ e.type);
        }
    });