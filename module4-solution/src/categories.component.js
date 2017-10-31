(function() {

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/categories.component.html',
            bindings: {
                items: '<'
            }
        });

})();