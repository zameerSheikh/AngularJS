"use strict"

testApp.controller('Secondctrl', secondctrl);

secondctrl.$inject = [
    '$scope',
    'MainService'
];

function secondctrl(
    $scope,
    MainService
){
    $scope.callService = function(){
        $scope.res = MainService.userData(3);
    }
}