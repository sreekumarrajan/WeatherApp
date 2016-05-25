(function() {
  'use strict';

  /** @ngInject */
  function HomeController(WeatherService, WeatherDataService) { // esline-disable-line
    var vm = this;
    //by default - selectedCity is Toronto
    vm.selectedCity = WeatherDataService.getSelectedCity();

    function refresh() {
      WeatherService.getCurrentWeatherData(WeatherDataService.getSelectedCity())
        .then(function() {
          vm.generalDescription = WeatherDataService.getGeneralDescription();
          vm.weatherDetails = WeatherDataService.getWeatherDetails();
        }, function(error) {
        //error-handling
        })
        .then(function() {
          return WeatherService.getForecastWeatherData(WeatherDataService.getSelectedCity());
        }, function(error) {
        //error-handling
        })
        .then(function() {
          vm.forecastDetails = WeatherDataService.getForecastDetails();
        });
    }

    function search(newCity) {
      WeatherDataService.setSelectedCity(newCity);
      refresh();
    }

    function unitSelectionChanged(newUnit) {
      var oldUnit = WeatherDataService.getSelectedUnit();
      if (oldUnit !== newUnit) {
        WeatherDataService.setSelectedUnit(newUnit);
        refresh();
      }
    }

    function forecastDaySelectionChanged(day) {
      WeatherDataService.setSelectedForecastDay(day);
      vm.generalDescription = WeatherDataService.getGeneralDescription(day);
      vm.weatherDetails = WeatherDataService.getWeatherDetails(day);
    }

    function getForecastDayIndex() {
      return WeatherDataService.getSelectedForecastDay();
    }

    vm.search = search;
    vm.unitSelectionChanged = unitSelectionChanged;
    vm.forecastDaySelectionChanged = forecastDaySelectionChanged;
    vm.getForecastDayIndex = getForecastDayIndex;
    vm.refresh = refresh;
    //call refresh to populate the weather information
    refresh();
  }

  angular
    .module('weatherApp')
    .controller('HomeController', HomeController);

})();
