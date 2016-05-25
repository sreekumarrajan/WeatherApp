(function() {
  'use strict';

  /** @ngInject */
  function weatherDetails() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/commons/widgets/weatherDetails/weatherDetails.html',
      scope: {
        details: '=',
        unitSelectionChanged:'&'
      }
    };

    return directive;

  }
  angular
    .module('weatherApp.commons')
    .directive('weatherDetails', weatherDetails);



})();
