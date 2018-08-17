"use strict"

testApp.controller('SecondCtrl', secondCtrl);

secondCtrl.$inject = [
    '$scope',
    'someData'
];

function secondCtrl(
    $scope,
    someData
){

    $scope.second = {
        name: 'Addy Osmani',
        data: someData,
        pushData: pushData,
        localData: []
    };

        function pushData(name){
        console.log('innn');
        $scope.second.localData.push('pushed from:' + name)
    }
}