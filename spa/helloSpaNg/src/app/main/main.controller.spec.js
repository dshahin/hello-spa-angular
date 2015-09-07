(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('helloSpaNg'));

    it('should define more than 2 users', inject(function($controller) {
      
      var vm = $controller('MainController');

      expect(angular.isArray(vm.users)).toBeTruthy();
      expect(vm.users.length > 2).toBeTruthy();
    }));
  });
})();
