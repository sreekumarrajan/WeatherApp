(function() {
  'use strict';

  /** @ngInject */
  function GeneralDescriptionController($log) {
    var vm = this;
    $log.debug('came here in general description');
  }

  /** @ngInject */
  function generalDescription() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/commons/widgets/generalDescription/generalDescription.html',
      scope: {
        weatherData: '='
      },
      controller: GeneralDescriptionController,
      controllerAs: 'vm',
      bindToController:true
    };

    return directive;

  }
  angular
    .module('weatherApp.commons')
    .directive('generalDescription', generalDescription);



})();
