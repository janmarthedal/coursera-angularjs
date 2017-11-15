(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
    var reg = this;

    reg.user = {
        firstname: '',
        lastname: '',
        email: '',
        fav: ''
    };
    reg.message = '';

    reg.submit = function() {
        reg.message = 'Your information has been saved';
    };
}

})();
    