(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter){

    $scope.message = "(Waiting for user input!)";

    $scope.check = function(){

        if($scope.userInput == null || $scope.userInput ==""){
            $scope.message = "Please enter data first.";
        }
        else{
            var lunchItems = $scope.userInput.split(',')

            var validLunchItems = [];

            for(var i = 0, len = lunchItems.length; i < len; i++){
                if(lunchItems[i]!=""){
                    validLunchItems.push(lunchItems[i])
                }
            }

            console.log(validLunchItems);

            if(validLunchItems.length == 0){
                $scope.message = "Please enter data first.";
            }
            else if(validLunchItems.length <= 3){
                $scope.message = "Enjoy!";
            }
            else if(validLunchItems.length > 3){
                $scope.message = "That's too much!";
            }
        }
    }
}
})();
