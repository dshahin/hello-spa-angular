(function() {
  'use strict';

  angular
    .module('helloSpaNg')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, jsrMocksProvider,$compileProvider,
                $logProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
    jsrMocksProvider.setMocks(window.$SPA.mocks);
    //performance booster
    $compileProvider.debugInfoEnabled(false);

    //conditional debug logging via $log.debug()
    $logProvider.debugEnabled(false);
  }

})();
