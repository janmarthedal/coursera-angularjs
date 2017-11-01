(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['data'];
    function ItemsController(data) {
        this.category = data.category.name;
        this.instructions = data.category.special_instructions;
        this.items = data.menu_items;
    }

})();