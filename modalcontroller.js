(function(){
    "use strict";

testApp.controller('ModalController', modalController);

modalController.$inject = [
    '$scope',
    '$uibModalInstance',
    'MainService',
    '$localStorage'
];

function modalController(
    $scope,
    $uibModalInstance,
    MainService,
    $localStorage
){
    $scope.ok = function(n){
        MainService.userData(n).then(function(resp){
            $uibModalInstance.close(resp);
        }).catch();
    };

    $scope.myName = $localStorage.name;
    
    $scope.cancel = function(){
        $uibModalInstance.dismiss('clicked cancel');
    };
}
}());