(function() {
  angular
    .module("Users")
    .controller("AllUsersCtrl", ["$scope", "$rootScope", AllUsersCtrl]);

  function AllUsersCtrl($scope, $rootScope) {
    $rootScope.showSideBar = true;
  } //AllUsersCtrl
})();
