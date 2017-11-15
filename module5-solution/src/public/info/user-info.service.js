(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

//UserInfoService.$inject = [];
function UserInfoService() {
    var service = this;

    service.user = {
        firstname: '',
        lastname: '',
        email: '',
        fav: ''
    };

    service.getUserInfo = function() {
        return {
            firstname: service.user.firstname,
            lastname: service.user.lastname,
            email: service.user.email,
            phone: service.user.phone,
            fav: service.user.fav
        };
    };

    service.setUserInfo = function(userInfo) {
        service.user = userInfo;
    };
}

})();    