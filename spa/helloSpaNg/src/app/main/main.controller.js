(function() {
  'use strict';

  angular
    .module('helloSpaNg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $log, $window) {
    var vm = this;

    var $SPA = $window.$SPA;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1441588902321;
    vm.showToastr = showToastr;

    toastr.success('Hello SpaNG!');
    $log.debug('hello spang');

    vm.imgPath = $SPA.staticPath + '/assets/images/';

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
