(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

//UserInfoService.$inject = [];
function UserInfoService() {
    var service = this;

    /*service.user = {
        firstname: '',
        lastname: '',
        email: '',
        fav: ''
    };*/
    service.user = {
        firstname: 'Svend',
        lastname: 'Dellepude',
        email: 's@d',
        fav: 'A1'
    };

    service.getUserInfo = function() {
        return {
            firstname: service.user.firstname,
            lastname: service.user.lastname,
            email: service.user.email,
            fav: service.user.fav
        };
    };

    service.setUserInfo = function(userInfo) {
        service.user = userInfo;
    };
}

})();    