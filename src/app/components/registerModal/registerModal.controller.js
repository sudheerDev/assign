(function() {
  'use strict';

  angular
    .module('assign')
    .controller('registerModalController', registerModalController);

  /** @ngInject */
  function registerModalController($scope, $ocModal) {

    $scope.submitAadharNumber = function() {
      $scope.aadharSubmited = true;
    }

    $scope.submitaadharOtp = function() {
      $scope.aadharOtpSubmited = true;
      $ocModal.close();
    }

	}

})();
