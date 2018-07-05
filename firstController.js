"use strict"

testApp.controller('Firstctrl', firstctrl);

firstctrl.$inject = [
    '$scope',
    'MainService',
    '$uibModal',
    '$localStorage'
];

function firstctrl(
    $scope,
    MainService,
    $uibModal,
    $localStorage
){
    $scope.callService = function(){
        MainService.userData(3).then(function(resp){
            console.log(resp,'resp');
            
            $scope.res = resp;
            $scope.$digest();
        });
        $localStorage.name = 'From localStorage';
    }

    $scope.openModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'modalTemplate.html',
            controller: 'ModalController'
        });

        modalInstance.result.then(function(result){
            console.log(result,'result');
        }, function(err){
            console.log(err,'error');
        });
    }
}