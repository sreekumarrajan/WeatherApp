(function() {
  'use strict';

  /** @ngInject */
  function BaseUrlProvider() {

    //the urloptions will be populated in app config
    var BaseUrlOptions = {
      forecastWeatherRoot: '',
      currentWeatherRoot: ''
    };

    /** @ngInject */
    function BaseUrlFactory() {

      var base = {
        forecastWeatherRoot: BaseUrlOptions.forecastWeatherRoot,
        currentWeatherRoot: BaseUrlOptions.currentWeatherRoot
      };

      return base;

    }

    this.$get = BaseUrlFactory;

    this.setOptions = function(options) {
      angular.extend(BaseUrlOptions, options);
      return this;
    };


  }

  angular
    .module('weatherApp.commons')
    .provider('BaseUrl', BaseUrlProvider);


})();
