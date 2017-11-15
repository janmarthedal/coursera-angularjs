(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
function MyInfoController(UserInfoService, ApiPath) {
    var reg = this;

    reg.basePath = ApiPath;
    reg.user = UserInfoService.getUserInfo();
}

})();
    