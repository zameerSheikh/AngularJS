(function(){
    "use strict";

testApp.controller('ThirdCtrl', thirdCtrl);

thirdCtrl.$inject = [
    '$scope',
    '$stateParams'
];

function thirdCtrl(
    $scope,
    $stateParams
){
    $scope.firstParam = $stateParams.a;
    $scope.secondParam = $stateParams.b;
}
}());