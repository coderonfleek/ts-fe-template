(function() {
  angular
    .module("Shared", [
      "ui.router",
      "ngAnimate",
      "toastr",
      "ui.bootstrap",
      "dialogs.main",
      "dx"
    ])
    .config(function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider.state("dashboard", {
        url: "/",
        templateUrl: "./app/shared/views/dashboard.html",
        controller: "DashboardCtrl"
      });
    });
})();
