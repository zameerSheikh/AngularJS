"use strict"

testApp.config(appConfig);

appConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$urlMatcherFactoryProvider'
];

function appConfig(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $urlMatcherFactoryProvider
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
    })

    .state('second',{
        url          : '/secondPage',
        templateUrl  : 'secondPage.html',
        controller   : 'SecondCtrl'
    })

    .state('third',{
        url          : '/thirdPage',
        templateUrl  : 'thirdPage.html',
        controller   : 'ThirdCtrl'
    });

    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.strictMode(false);
}