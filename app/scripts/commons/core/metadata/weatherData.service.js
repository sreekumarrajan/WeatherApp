(function() {
  'use strict';

  /** @ngInject */
  function WeatherDataService() { //eslint-disable-line
    var service = {}; //eslint-disable-line
    var currentWeatherData = {};
    var forecastWeatherData = {};
    var selectedCity = 'Toronto';
    var selectedUnit = 'metric';
    var selectedForecastDay = 0;


    //this is to get the day of the week for display in weather info
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    function getSelectedCity() {
      return selectedCity;
    }

    function setSelectedCity(city) {
      selectedCity = city;
    }

    function getSelectedUnit() {
      return selectedUnit;
    }

    function setSelectedUnit(unit) {
      selectedUnit = unit;
    }

    function setCurrentWeatherData(data) {
      currentWeatherData = data;
    }

    function getCurrentWeatherData() {
      return currentWeatherData;
    }

    function setForecastWeatherData(data) {
      forecastWeatherData = data;
    }

    function getForecastWeatherData() {
      return forecastWeatherData;
    }

    function getSelectedForecastDay() {
      return selectedForecastDay;
    }

    function setSelectedForecastDay(day) {
      selectedForecastDay = day;
    }

    function getForecastListItem(day) {
      var listItem = {};
      if (day === 0) {
        //return the 3rd item in list as weather starts from 6 a.m. for starting
        //day
        listItem = forecastWeatherData.list[2];
      } else {
        //calculate 6 index for day 0 and 8 for rest of the days unitl final day
        //for final day , take the 5th entry , i.e 4th index
        var index = 6 + (day - 1) * 8 + 4;
        listItem = forecastWeatherData.list[index];
      }
      return listItem;
    }

    function getGeneralDescription(day) {
      var generalDescription = {};
      var d = new Date();
      console.log('day is',day);
      if (day !== undefined) {
        if (forecastWeatherData) {
          generalDescription.cityName = forecastWeatherData.city.name + ', ' + forecastWeatherData.city.country;
          var dayIndex = (d.getDay() + day) % 7;
          generalDescription.day = weekday[dayIndex];
          var listItem = getForecastListItem(day);
          generalDescription.briefDescription = listItem.weather[0].description;
        }
      } else {
        if (currentWeatherData) {
          generalDescription.cityName = currentWeatherData.name + ', ' + currentWeatherData.sys.country;
          generalDescription.day = weekday[d.getDay()];
          generalDescription.briefDescription = currentWeatherData.weather[0].description;
        }
      }
      return generalDescription;
    }

    function getWindSpeed(speed) {
      var windSpeed = '';

      if (selectedUnit === 'metric') {
        windSpeed = Math.round(speed * 3.6) + ' Km/hr';
      } else {
        windSpeed = Math.round(speed * 1.6) + ' Km/hr';
      }
      return windSpeed;
    }

    function getWeatherDetails(day) {
      var weatherDetails = {};
      if (day !== undefined) {
        if (forecastWeatherData) {
          var listItem = getForecastListItem(day);
          weatherDetails.imageName = listItem.weather[0].icon + '.png';
          weatherDetails.temperature = Math.round(listItem.main.temp);
          weatherDetails.precipitation = "0%";
          if (listItem.rain && listItem.rain["1h"]) {
            var percentage = listItem.rain["1h"] * 100;
            weatherDetails.precipitation = percentage + '%';
          }
          weatherDetails.humidity = listItem.main.humidity + '%';
          weatherDetails.wind = getWindSpeed(listItem.wind.speed);
        }

      } else {
        if (currentWeatherData) {
          weatherDetails.imageName = currentWeatherData.weather[0].icon + '.png';
          weatherDetails.temperature = Math.round(currentWeatherData.main.temp);
          weatherDetails.precipitation = "0%";
          if (currentWeatherData.rain && currentWeatherData.rain["1h"]) {
            var percentage = currentWeatherData.rain["1h"] * 100;
            weatherDetails.precipitation = percentage + '%';
          }
          weatherDetails.humidity = currentWeatherData.main.humidity + '%';
          weatherDetails.wind = getWindSpeed(currentWeatherData.wind.speed);
        }
      }

      return weatherDetails;
    }

    //ToDo: ideally, should be able to get an average prediction of
    //day's weather from api - as it is not present, taking the prediction of
    //at 12:00 p.m. as the average
    function getImageName(index) {
      var listItem = getForecastListItem(index);
      var imageName = '';
      if (JSON.stringify(listItem) !== '{}') {
        imageName = listItem.weather[0].icon + '.png';
      }
      return imageName;
    }

    //ToDo: ideally, should be able to get an average prediction of
    //day's weather from api - as it is not present, taking the prediction of
    //at 12:00 p.m. as the average
    function getTemperatureRange(index) {
      var listItem = getForecastListItem(index);
      var temperatureRange = '';
      if (JSON.stringify(listItem) !== '{}') {
        temperatureRange = Math.round(listItem.main.temp_max) + '°' + ' ' + Math.round(listItem.main.temp_min) + '°';
      }
      return temperatureRange;
    }

    function getForecastDetails() {
      var forecastDetails = [];
      var d = new Date();
      var dayIndex = d.getDay();
      var i = 0;
      if (forecastWeatherData) {
        for (i; i <= 4; i++) {
          var data = {};
          data.day = weekday[dayIndex].substring(0, 3);
          data.imageName = getImageName(i);
          data.temperatureRange = getTemperatureRange(i);
          forecastDetails.push(data);
          dayIndex = (dayIndex + 1) % 7;
        }
      }
      return forecastDetails;
    }



    service.setCurrentWeatherData = setCurrentWeatherData;
    service.getCurrentWeatherData = getCurrentWeatherData;
    service.setForecastWeatherData = setForecastWeatherData;
    service.getForecastWeatherData = getForecastWeatherData;

    service.getGeneralDescription = getGeneralDescription;
    service.getWeatherDetails = getWeatherDetails;
    service.getForecastDetails = getForecastDetails;

    service.getSelectedCity = getSelectedCity;
    service.setSelectedCity = setSelectedCity;
    service.getSelectedUnit = getSelectedUnit;
    service.setSelectedUnit = setSelectedUnit;

    service.getSelectedForecastDay = getSelectedForecastDay;
    service.setSelectedForecastDay = setSelectedForecastDay;

    return service;
  }

  angular
    .module('weatherApp.commons')
    .factory('WeatherDataService', WeatherDataService);

})();
