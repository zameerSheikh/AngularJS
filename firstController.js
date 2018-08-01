"use strict"

testApp.controller('Firstctrl', firstctrl);

firstctrl.$inject = [
    '$scope',
    'MainService',
    '$uibModal',
    '$localStorage',
    '$state',
    'someData'
];

function firstctrl(
    $scope,
    MainService,
    $uibModal,
    $localStorage,
    $state,
    someData
){
    //console.log(window.angular);
    if(!localStorage.password){
        console.log('not logged in');
        $state.go('login');
    }
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
    };

    $scope.weather = {};
    $scope.fetchWeather = function(place){
        MainService.getWeather(place).then(function(weatherData){
            console.log(weatherData);
            $scope.weather.humidity = weatherData.data.main.humidity;
            $scope.weather.temp = weatherData.data.main.temp;
        }).catch(function(err){
            console.log(err);
        });
    };

    $scope.tempRecords = someData;

    $scope.records = $scope.tempRecords.slice(0,6);

    $scope.pageChanged = function(pageNum){
       // console.log('pageNum: ', pageNum);
        var start = (pageNum-1) * 6;
        var end   = start + 6;
        $scope.records = $scope.tempRecords.slice(start,end);
    };

    $scope.logOut = function(){
        localStorage.clear();
        $state.go('login');
    }
}