(function() {
  "use strict";

  angular
    .module("Shared")
    .controller("AppCtrl", ["$scope", "$rootScope", "$state", AppCtrl])
    .controller("DashboardCtrl", [
      "$scope",
      "$state",
      "$rootScope",
      "toastr",
      "dialogs",
      DashboardCtrl
    ])
    .controller("EditDialogCtrl", [
      "$scope",
      "$uibModalInstance",
      "data",
      EditDialogCtrl
    ]);

  function AppCtrl($scope, $rootScope, $state) {
    console.log("Hey");

    $rootScope.showSideBar = false;
    $rootScope.showFooter = true;

    $scope.goToPage = function(page) {
      console.log("Hey");
      $state.go(page);
    };
  } //AppCtrl

  function DashboardCtrl($scope, $state, $rootScope, toastr, dialogs) {
    $rootScope.showSideBar = false;

    $scope.showToast = showToast;
    $scope.showAlert = showAlert;
    $scope.showLoading = showLoading;
    $scope.showError = showError;
    $scope.showCustomDialog = showCustomDialog;

    function showToast() {
      toastr.success("Hello world!", "Toastr fun!");
    }

    function showAlert() {
      dialogs.notify(
        "Something Happened",
        "Something happened at this point in the application that I wish to let you know about",
        {
          size: "sm"
        }
      );
    }

    function showLoading() {
      dialogs.wait(
        "Creating User",
        'Please wait while we attempt to create user "Michael Conroy."<br><br>This should only take a moment.',
        50
      );
    }

    function showError() {
      dialogs.error("Error", "Something went wrong", {
        size: "sm"
      });
    } //showError

    function showCustomDialog() {
      var modalData = {
        name: "Tosin",
        designation: "Frontend"
      };

      dialogs.create(
        "./app/shared/views/modals/edit.modal.html",
        "EditDialogCtrl",
        modalData,
        { size: "md", keyboard: true }
      );
    } //showCustomDialog
  } //DashboardCtrl

  function EditDialogCtrl($scope, $uibModalInstance, data) {
    $scope.user = data;
    $scope.closeModal = closeModal;

    function closeModal() {
      $uibModalInstance.dismiss("Canceled");
    }
  }
})();
