(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserInfoService'];
function SignUpController(MenuService, UserInfoService) {
    var reg = this;

    reg.user = UserInfoService.getUserInfo();
    reg.message = '';

    reg.submit = function() {
        UserInfoService.setUserInfo(reg.user);
        reg.message = 'Your information has been saved';
    };
}

})();
    