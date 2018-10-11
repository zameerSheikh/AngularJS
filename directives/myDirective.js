(function(){

    "use strict";

    var firstDirective = function (){
        return {
            restrict: 'EA',
            scope: {
                data: '=',
                func: '&'
            },
            template: `<h3>From a custom directive..</h3>
                        <span>{{data}}</span>
                        <button ng-click="func({da: 'From Directive'})">Add Data</button>`,
            link: function(scope, elem, attrs){
                console.log('$scope: ', scope, elem);
                // elem.css("background-color", "lightyellow");
            }
        }
    };
    
    testApp.directive('firstDirective', firstDirective);
    
}());