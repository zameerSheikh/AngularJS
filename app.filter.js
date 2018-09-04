(function(){
    "use strict";

testApp.filter('ordinal', ordinal);

function ordinal(){
    return function(inputNumber){
        if(isNaN(inputNumber)){
            return inputNumber;
        }else{
            var lastDigit = inputNumber%10;

            if(lastDigit == 1){
                return inputNumber + 'st';
            }else if(lastDigit == 2){
                return inputNumber + 'nd';
            }else if(lastDigit == 3){
                return inputNumber + 'rd';
            }else if(lastDigit > 3){
                return inputNumber + 'th';
            }
        }
    };
}
}());