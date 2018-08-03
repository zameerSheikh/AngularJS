"use strict"

testApp.controller('LoginCtrl', loginCtrl);

loginCtrl.$inject = [
    '$scope',
    '$localStorage',
    '$state',
    '$timeout'
];

function loginCtrl(
    $scope,
    $localStorage,
    $state,
    $timeout
){
    $scope.userName = 'zameer';
    $scope.password = 'admin@123';
    $scope.errorMsg = '';

    $scope.loginUser = function(username, password){
        //console.log('username, password: ', username, password);
        if(username === $scope.userName && password === $scope.password){
            localStorage.name = username;
            localStorage.password = password;
            $state.go('first');
        }else{
            $scope.errorMsg = 'Invalid credentials!!!'
            localStorage.clear();
            $timeout(function(){
                $scope.errorMsg = '';
            },2000);
        }
    };

    
    $scope.loginOnEnter = function(e){
        if(e.keyCode == 13){
            $scope.loginUser($scope.userName, $scope.pwd);
        }
    }
}