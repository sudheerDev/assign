(function() {
  'use strict';

  angular
    .module('assign')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($ocModal, $log, toastr, $timeout) {
    var vm = this;

    // vm.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
    // vm.pdfUrl = 'assets/pdf/relativity.pdf';
    // vm.pdfPassword = 'test';
    // vm.scroll = 0;
    // vm.loading = 'loading';
    vm.aadharSubmitted = false;
    vm.signing = false;
    vm.signed = false;

    vm.getNavStyle = function(scroll) {
      if(scroll > 100) return 'pdf-controls fixed';
      else return 'pdf-controls';
    }

    vm.onLoad = function() {
      vm.loading = '';
    }

    vm.showAModal = function() {

      $ocModal.open({
        url: 'partials/modal.html',
        closeOnEsc: false,
        controller: 'registerModalController',
        onClose: function() {
          vm.aadharSubmitted = true;
          vm.signing = true;
          $timeout(function(){
            vm.signing = false;
            vm.signed = true;
          }, 3000);
          toastr.success('Aadhar verified successfully');
        }
      });
    };



    vm.showAModal();
  }
})();
