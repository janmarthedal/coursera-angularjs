(function () {
"use strict";

angular.module('public')
.directive('menuitemfield', MenuItemField);

MenuItemField.$inject = ['MenuService', '$q'];
function MenuItemField(MenuService, $q) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, el, attrs, ctrl) {
            ctrl.$asyncValidators.menuitemfield = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue))
                    return $q.resolve();
                return MenuService.getMenuItem(modelValue);
            };
        }
    };

}

})();
    