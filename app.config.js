"use strict"

testApp.config(appConfig);

appConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];

function appConfig(
    $stateProvider,
    $urlRouterProvider
){
    $urlRouterProvider.otherwise('/login');

    $stateProvider

    .state('login', {
        url          : '/login',
        templateUrl  : 'loginPage.html',
        controller   : 'LoginCtrl'
    })

    .state('first',{
        url          : '/firstPage',
        templateUrl  : 'firstPage.html',
        controller   : 'Firstctrl'
    });
}