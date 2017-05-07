(function() {
  'use strict';

  angular
    .module('assign')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {

		$rootScope.$on('$stateChangeError', function(event, toState) { 
			// console.log(event, toState, toParams, fromState, fromParams);
			if (toState.url === '/login') {
				$state.go('home');
			} else if (toState.url === '/') {
				$state.go('login')
			}
		});
  }

})();
