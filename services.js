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
        getDetails: getDetails
    }

    function userData(num){
        return new Promise(function(resolve, reject){
            $timeout(function(){
                resolve(num*3);
            },2000);
        });
    }

    function getDetails(){
        return
    }
}