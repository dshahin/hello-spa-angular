(function() {
  'use strict';

  angular
    .module('helloSpaNg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
