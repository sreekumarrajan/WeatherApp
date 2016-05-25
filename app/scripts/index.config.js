(function() {
  'use strict';
  /** @ngInject */
  function config($logProvider, BaseUrlProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // BaseUrl
    BaseUrlProvider.setOptions({
      forecastWeatherRoot: 'http://api.openweathermap.org/data/2.5/forecast',
      currentWeatherRoot:'http://api.openweathermap.org/data/2.5/weather'
    });
  }

  angular
    .module('weatherApp')
    .config(config);

})();
