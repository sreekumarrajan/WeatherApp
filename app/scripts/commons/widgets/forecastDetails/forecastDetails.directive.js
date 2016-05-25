(function() {
  'use strict';

  function ForecastDetailsController(){
    var vm = this;
    function setClass(index) {
      var forecastClass = 'forecast-box';
      if(index === vm.getForecastDayIndex()){

        forecastClass = 'forecast-box' + ' selected-forecast';
      }
      return forecastClass;
    }
    vm.setClass = setClass;
  }

  /** @ngInject */
  function forecastDetails() {
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/commons/widgets/forecastDetails/forecastDetails.html',
      scope: {
        details: '=',
        changeForecastDaySelection:'&',
        getForecastDayIndex:'&'
      },
      controller:ForecastDetailsController,
      controllerAs:'vm',
      bindToController:true
    };


    return directive;

  }
  angular
    .module('weatherApp.commons')
    .directive('forecastDetails', forecastDetails);



})();
