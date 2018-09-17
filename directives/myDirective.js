(function(){

    "use strict";

    var firstDirective = function (){
        return {
            restrict: 'EA',
            scope: {
                data: '=',
                func: '&'
            },
            template: `<h3>From a custom directive..{{second.name}}</h3>
                        <span>{{data}}</span>
                        <button ng-click="addData()">Add Data</button>`,
            link: function($scope){
                console.log('$scope: ', $scope);
                $scope.addData = function(){
                    console.log('added new data');
                    $scope.func()('CD');
                }
            }
        }
    };
    
    testApp.directive('firstDirective', firstDirective);
    
}());