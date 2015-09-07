(function() {
  'use strict';

  angular
    .module('helloSpaNg')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $log, $window, jsr) {
    var vm = this;

    var $SPA = $window.$SPA;

    vm.classAnimation = '';
    vm.creationDate = 1441588902321;
    vm.users = [];
    vm.imgPath = $SPA.staticPath + '/assets/images/';

    activate();

    function activate() {
      getUsers();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      
    }

    //call a jsr method that returns a promise
    function getUsers(){
      jsr({
        method: $SPA.jsr.getUsers
      }).then(function(users){
        toastr.success('We got the users');
        $log.log(users);
        vm.users = users;
      }).catch(function(exception){
        toastr.error('Error getting users');
        $log.error(exception);
      });
    }


    
  }
})();
