angular.module('orderCloud')
    .controller('AppCtrl', AppController)
;

function AppController($state, $ocMedia, LoginService, appname, ocStateLoading, ocIsTouchDevice, ocRoles) {
    var vm = this;
    vm.name = appname;
    vm.$state = $state;
    vm.$ocMedia = $ocMedia;
    vm.isTouchDevice = ocIsTouchDevice;
    vm.stateLoading = ocStateLoading.Watch;
    vm.logout = LoginService.Logout;
    vm.userIsAuthorized = ocRoles.UserIsAuthorized;
}