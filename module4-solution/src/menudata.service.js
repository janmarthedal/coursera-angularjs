(function() {

    var rootUrl = 'https://davids-restaurant.herokuapp.com';

    angular.module('data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http', '$q'];
    function MenuDataService($http, $q) {
        var service = this;

        service.getAllCategories = function() {
            //return $http.get(rootUrl + '/categories.json');
            var deferred = $q.defer();
            setTimeout(function() {
                deferred.resolve([
                    {short_name: 'A', name: 'Category A'},
                    {short_name: 'B', name: 'Category B'},
                    {short_name: 'C', name: 'Category C'}
                ]);
            }, 1000);
            return deferred.promise;
        };

        service.getItemsForCategory = function(categoryShortName) {
            /*return $http.get(rootUrl + '/menu_items.json', {
                params: {'category': categoryShortName}
            });*/
            var deferred = $q.defer();
            setTimeout(function() {
                deferred.resolve([
                    {name: categoryShortName + '. Menu Item 1'},
                    {name: categoryShortName + '. Menu Item 2'},
                    {name: categoryShortName + '. Menu Item 3'}
                ]);
            }, 1000);
            return deferred.promise;
        };
    }

})();