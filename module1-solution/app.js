(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.menu = '';
        $scope.message = '';
        
        $scope.checkIfTooMuch = function() {
            var dishCount = countDishes($scope.menu);
            if (dishCount === 0)
                $scope.message = 'Please enter data first';
            else if (dishCount <= 3)
                $scope.message = 'Enjoy!';
            else
                $scope.message = 'Too much!';            
        };
    }

    function countDishes(dishString) {
        if (dishString === '')
            return 0;
        return dishString.split(',').length;
    }
})();