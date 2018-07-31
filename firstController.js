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
    console.log(window.angular);
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

    $scope.tempRecords = [34,45,56,67,78,'dfdf','sdfsdfsd',44,22,11,'zameer','iviswa','anas',
                        'asiyah',
                        'asim',
                        'some',
                        'other',
                        43,32,21,76, 34,45,56,67,78,'dfdf','sdfsdfsd',44,22,11,'zameer','iviswa','anas',
                        'asiyah',
                        'asim',
                        'some',
                        'other',

                    ];

    $scope.records = $scope.tempRecords.slice(0,6);

    $scope.pageChanged = function(pageNum){
        console.log('pageNum: ', pageNum);
        var start = (pageNum-1) * 6;
        var end   = start + 6;
        $scope.records = $scope.tempRecords.slice(start,end);
    };
}