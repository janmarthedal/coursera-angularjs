(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'MenuService', 'ApiPath'];
function MyInfoController(UserInfoService, MenuService, ApiPath) {
    var reg = this;

    reg.basePath = ApiPath;
    reg.user = UserInfoService.getUserInfo();
    reg.favTitle = '';
    reg.favDescription = '';

    if (reg.user.fav) {
        MenuService.getMenuItem(reg.user.fav).then(function(data) {
            reg.favTitle = data.name;
            reg.favDescription = data.description;
        });
    }
}

})();
    