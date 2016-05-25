(function() {
  'use strict';


  /** @ngInject */
  function search() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/commons/widgets/search/search.html',
      scope: {
        selectedCity: '=',
        onSearch:'&'
      }
    };

    return directive;

  }
  angular
    .module('weatherApp.commons')
    .directive('search', search);



})();
