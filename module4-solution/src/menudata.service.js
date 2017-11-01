(function() {
    'use strict';

    var rootUrl = 'https://davids-restaurant.herokuapp.com';

    angular.module('data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function() {
            return $http.get(rootUrl + '/categories.json')
                .then(function(result) {
                    return result.data;
                });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http.get(rootUrl + '/menu_items.json', {
                params: {'category': categoryShortName}
            }).then(function(result) {
                return result.data;
            });
        };
    }

})();