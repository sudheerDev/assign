!function(){"use strict";angular.module("assign",["ngSanitize","ngAria","ui.router","toastr","oc.modal"])}(),function(){"use strict";function t(t,n){t.submitAadharNumber=function(){t.aadharSubmited=!0},t.submitaadharOtp=function(){t.aadharOtpSubmited=!0,n.close()}}t.$inject=["$scope","$ocModal"],angular.module("assign").controller("registerModalController",t)}(),function(){"use strict";function t(){return{require:"ngModel",link:function(t,n,a,e){function i(t){if(t){var n=t.replace(/[^0-9]/g,"");return n!==t&&(e.$setViewValue(n),e.$render()),n}return void 0}e.$parsers.push(i)}}}angular.module("assign").directive("numbersOnly",t)}(),function(){"use strict";function t(t,n,a,e){var i=this;i.aadharSubmitted=!1,i.signing=!1,i.signed=!1,i.getNavStyle=function(t){return t>100?"pdf-controls fixed":"pdf-controls"},i.onLoad=function(){i.loading=""},i.showAModal=function(){t.open({url:"partials/modal.html",closeOnEsc:!1,controller:"registerModalController",onClose:function(){i.aadharSubmitted=!0,i.signing=!0,e(function(){i.signing=!1,i.signed=!0},3e3),a.success("Aadhar verified successfully")}})},i.showAModal()}t.$inject=["$ocModal","$log","toastr","$timeout"],angular.module("assign").controller("MainController",t)}(),function(){"use strict";function t(){var t={emailId:"",SID:null};return this.getEmailId=function(){return t.emailId},this.setEmailId=function(n){t.emailId=n},this}angular.module("assign").factory("LoginService",t)}(),function(){"use strict";function t(t,n){var a=this;a.submitLogin=function(a){t.setEmailId(a),n.go("home")}}t.$inject=["LoginService","$state"],angular.module("assign").controller("LoginController",t)}(),function(){"use strict";function t(t,n,a){n.$on("$stateChangeError",function(t,n){"/login"===n.url?a.go("home"):"/"===n.url&&a.go("login")})}t.$inject=["$log","$rootScope","$state"],angular.module("assign").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm",resolve:{loginCheck:["LoginService","$q",function(t,n){var a=n.defer();return""!==t.getEmailId()&&a.resolve(),a.reject(),a.promise}]}}).state("login",{url:"/login",templateUrl:"app/Login/login.html",controller:"LoginController",controllerAs:"Login",resolve:{loginCheck:["LoginService","$q",function(t,n){var a=n.defer();return""===t.getEmailId()&&a.resolve(),a.reject(),a.promise}]}}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("assign").config(t)}(),function(){"use strict";angular.module("assign").constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("assign").config(t)}(),angular.module("assign").run(["$templateCache",function(t){t.put("app/Login/login.html",'<div class=loginForm><h1 class=hidden>Login</h1><p>Google account? Proceed with</p><button class="button button--google">Google</button><p><strong>Tip:</strong> If using multiple Gmail accounts, select the account shown above</p><span class=login__line>Or</span><form name=loginForm><label class=hidden for=Email>Email</label><input class="email__input mt10" type=email id=Email name=email ng-model=Login.emailId placeholder=email@xyz.com required><span class=error ng-show=loginForm.email.$error.email>Not valid email!</span><p class=mt10>By continuing, I confirm to the Terms of Service and Privacy Policy of<a href=https://digio.in target=_blank>digio.in</a></p><button class="block button button--email mt10" type=submit ng-disabled=loginForm.$invalid ng-click=Login.submitLogin(Login.emailId)>Continue</button></form></div>'),t.put("app/main/main.html",'<div class=container><div ng-if=vm.aadharSubmitted><span class=docStatus ng-if=vm.signing>Signing...</span> <span class=docStatus ng-if=vm.signed>Signed</span></div><!--   <div class="wrapper">\n    <h1>{{vm.pdfName}}</h1>\n    <ng-pdf template-url="../app/main/viewer.html" canvasid="pdf-canvas" scale="page-fit" page=13></ng-pdf>\n  </div> --><embed src=assets/pdf/relativity.pdf max-width=800px height=600px width=80%><button class="button btn-default btn-reqOtop">Request OTP to Sign</button></div><script type=text/ng-template id=partials/modal.html><div class="modal-body">\n    <img class="aadhar__img" src="assets/images/aadhaar-logo.png" alt="aadhar image"/>\n    <input type="text" class="aadhar__input" id="aadharNumber" ng-model="vm.aadharNumber" name="aadharNumber" numbers-only>\n    <button type="button" class="button btn-default" ng-disabled="vm.aadharNumber.length !== 12" ng-click="submitAadharNumber(vm.aadharNumber)">Verify</button>\n    <div ng-if="aadharSubmited" class="mt10">\n      <label class="mt10 block">\n        <input type="checkbox" ng-model="checkboxModel.value2">\n        I agree to eSign this KYC document to get starte\n      </label>\n      <div class="t-center">\n        <input type="text" class="aadhar__OTP mt10" id="aadharOtp" placeholder="OTP" ng-model="vm.aadharOtp" name="aadharOtp" numbers-only>\n        <button type="button" class="button btn-default" ng-disabled="vm.aadharOtp.length !== 6 && vm.aadharOtp" ng-click="submitaadharOtp(vm.aadharOtp)">Submit</button>\n      </div>\n    </div>\n  </div></script>'),t.put("app/main/viewer.html","<nav ng-class=getNavStyle(scroll)><button ng-click=goPrevious()><span>&lt;</span></button> <button ng-click=goNext()><span>&gt;</span></button> <button ng-click=zoomIn()><span>+</span></button> <button ng-click=fit()><span>100%</span></button> <button ng-click=zoomOut()><span>-</span></button> <button ng-click=rotate()><span>90</span></button> <span>Page: </span><input type=text min=1 ng-model=vm.pageNum> <span>/ {{vm.pageCount}}</span> &nbsp;&nbsp; <span>Document URL: </span><input type=text ng-model=vm.pdfUrl></nav><hr>{{vm.loading}}<canvas id=pdf class=rotate0></canvas>"),t.put("app/components/registerModal/register.html",'<div class="modal fade"><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close ng-click=close(false) data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>Yes or No?</h4></div><div class=modal-body><p>It\'s your call...</p></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-0d08f198b1.js.map
