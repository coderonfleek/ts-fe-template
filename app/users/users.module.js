(function() {
  angular.module("Users", []).config(function($stateProvider) {
    $stateProvider.state("allusers", {
      url: "/allusers",
      templateUrl: "./app/users/views/allusers.html"
    });
    // .state({
    //     name: 'edituser',
    //     url: '/edituser',
    //     templateUrl: './views/edituser.html'
    // })
    // .state({
    //     name: 'promoteuser',
    //     url: '/promoteuser',
    //     templateUrl: './views/promoteuser.html'
    // })
  });
})();
