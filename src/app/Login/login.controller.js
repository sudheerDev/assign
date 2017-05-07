(function() {
  'use strict';

  angular
    .module('assign')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(LoginService, $state) {
    var vm = this;

    vm.submitLogin = function(mailId) {
      LoginService.setEmailId(mailId);
      $state.go('home');
    }


  }
})();
