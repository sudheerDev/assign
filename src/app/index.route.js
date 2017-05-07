(function() {
  'use strict';

  angular
    .module('assign')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
          loginCheck: function(LoginService, $q) {
            var deferred = $q.defer();
            if (LoginService.getEmailId() !== '') {
              deferred.resolve();
            }
            deferred.reject();
            return deferred.promise;
          }
        }
      })
       .state('login', {
        url: '/login',
        templateUrl: 'app/Login/login.html',
        controller: 'LoginController',
        controllerAs: 'Login',
        resolve: {
          loginCheck: function(LoginService, $q) {
            var deferred = $q.defer();
            if (LoginService.getEmailId() === '') {
              deferred.resolve();
            }
            deferred.reject();
            return deferred.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
