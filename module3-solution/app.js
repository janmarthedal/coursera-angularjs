(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.term = '';
        ctrl.found = [];
        ctrl.emptySearch = false;
        ctrl.doSearch = function() {
            ctrl.found = [];
            if (ctrl.term === '') {
                ctrl.emptySearch = true;
            } else {
                ctrl.emptySearch = false;
                MenuSearchService.getMatchedMenuItems(ctrl.term)
                    .then(function(foundItems) {
                        ctrl.found = foundItems;
                        ctrl.emptySearch = !foundItems.length;
                    });
            }
        };
        ctrl.remove = function(index) {
            ctrl.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                var foundItems = result.data.menu_items
                    .filter(function(item) {
                        return item.description.indexOf(searchTerm) >= 0;
                    });

                return foundItems;
            });
        };
    }

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }

})();