(function() {
  'use strict';

  angular
    .module('helloSpaNg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $log, $window, jsr) {
    var vm = this;

    var $SPA = $window.$SPA;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1441588902321;
    vm.showToastr = showToastr;
    vm.users = [];

    toastr.success('Hello SpaNG!');
    $log.debug('hello spang');

    vm.imgPath = $SPA.staticPath + '/assets/images/';

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      getUsers();
    }

    function getUsers(){
      jsr({
        method: $SPA.jsr.getUsers
      }).then(function(users){
        $log.log(users);
        vm.users = users;
      });
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
