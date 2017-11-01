(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories.template.html',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller: 'CategoriesController as ctrl'
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/items.template.html',
                resolve: {
                    data: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                },
                controller: 'ItemsController as ctrl'
            });
    }
                
})();