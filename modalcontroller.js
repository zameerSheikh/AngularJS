"use strict"

testApp.controller('ModalController', modalController);

modalController.$inject = [
    '$scope',
    '$uibModalInstance'
];

function modalController(
    $scope,
    $uibModalInstance
){
    $scope.ok = function(){
        $uibModalInstance.close('clicked OK');
    };

    $scope.cancel = function(){
        $uibModalInstance.dismiss('clicked cancel');
    }
}