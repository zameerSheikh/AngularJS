"use strict"

testApp.factory('MainService', mainservice);

mainservice.$inject = [
    '$rootScope',
    '$q',
    '$http',
    '$timeout'
];

function mainservice(
    $rootScope,
    $q,
    $http,
    $timeout
){
    return{
        userData: userData,
        getDetails: getDetails,
        getWeather: getWeather
    };

    function userData(num){
        return new Promise(function(resolve, reject){
            $timeout(function(){
                resolve(num*3);
            },2000);
        });
    };

    function getDetails(){
        return
    };
    
    function getWeather(location){
        // var q = $q.defer();
        // var request = $http({
        //     url: 'https://api.openweathermap.org/data/2.5/weather?q='+ location + '&units=metric&APPID=7def8a09921c79c4e299403b906fd961',
        //     method: 'GET'
        // });

        // request.then(getWeatherSuccess).catch(getWeatherError);

        // function getWeatherSuccess(response){
        //     console.log(response,'response');
        //     q.resolve(response);
        // };

        // function getWeatherError(reason){
        //     console.log(reason,'reason');
        //     q.reject(reason);
        // };

        // return q.promise;

        return new Promise(function(resolve, reject){
            var request = $http({
                    url: 'https://api.openweathermap.org/data/2.5/weather?q='+ location + '&units=metric&APPID=7def8a09921c79c4e299403b906fd961',
                    method: 'GET'
                });

                request.then(getWeatherSuccess).catch(getWeatherError);

                function getWeatherSuccess(response){
                    console.log(response,'response');
                    resolve(response);
                };

                function getWeatherError(reason){
                    console.log(reason,'reason');
                    reject(reason);
                };
        });
    };
}