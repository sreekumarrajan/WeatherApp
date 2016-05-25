(function() {
  'use strict';

  /** @ngInject */
  function WeatherService($http, BaseUrl, APPID, WeatherDataService) { //eslint-disable-line
    var service = {}; //eslint-disable-line

    function getForecastWeatherData(city) {
      var url = BaseUrl.forecastWeatherRoot;
      return $http.get(url, {
          params: {
            q: city,
            mode: 'json',
            APPID: APPID,
            type: 'like',
            units: WeatherDataService.getSelectedUnit()
          }
        })
        .then(function(response) {
          WeatherDataService.setForecastWeatherData(response.data);
        });

    }

    function getCurrentWeatherData(city) {
      WeatherDataService.setSelectedCity(city);
      var url = BaseUrl.currentWeatherRoot;
      return $http.get(url, {
          params: {
            q: city,
            mode: 'json',
            APPID: APPID,
            type: 'like',
            units: WeatherDataService.getSelectedUnit()
          }
        })
        .then(function(response) {
          WeatherDataService.setCurrentWeatherData(response.data);
        });

    }

    service.getCurrentWeatherData = getCurrentWeatherData;
    service.getForecastWeatherData = getForecastWeatherData;
    return service;
  }

  angular
    .module('weatherApp.commons')
    .factory('WeatherService', WeatherService);

})();
