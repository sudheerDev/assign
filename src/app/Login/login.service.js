(function() {
  'use strict';

  angular
    .module('assign')
    .factory('LoginService', LoginService);

  /** @ngInject */
  function LoginService() {

    var userInfo = {
      emailId: '',
      SID: null
    };

    this.getEmailId = function() {
      return userInfo.emailId;
    };

    this.setEmailId = function(emailId) {
      userInfo.emailId = emailId;
    };

    return this;
  }
})();
