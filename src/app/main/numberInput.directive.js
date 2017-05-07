(function() {
  'use strict';

  angular
    .module('assign')
    .directive('numbersOnly', numbersOnly);

  /** @ngInject */
  function numbersOnly() {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ngModelCtrl) {
        function fromUser(text) {
          if (text) {
            var transformedInput = text.replace(/[^0-9]/g, '');

            if (transformedInput !== text) {
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
            }
            return transformedInput;
          }
          return undefined;
        }            
        ngModelCtrl.$parsers.push(fromUser);
        }
    };
  }

})();
