(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function(index) {
            ShoppingListCheckOffService.markAsBought(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuy = [
            {name: 'cookies', quantity: 10},
            {name: 'bread', quantity: 2},
            {name: 'fruit', quantity: 8},
            {name: 'cereal', quantity: 1},
            {name: 'milk', quantity: 3}
        ];
        var bought = [];

        service.markAsBought = function(index) {
            var item = toBuy.splice(index, 1)[0];
            bought.push(item);
        };

        service.getToBuyItems = function() {
            return toBuy;
        };

        service.getBoughtItems = function() {
            return bought;
        };
    }

})();