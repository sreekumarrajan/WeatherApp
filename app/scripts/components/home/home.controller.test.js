(function() {
  'use strict';

  describe('Controller: HomeController', function() {

    //Getting reference of the mocked service
    var mockWeatherService;
    var mockWeatherDataService;

    // load the controller's module
    beforeEach(function() {
      module('weatherApp');
    //  angular.module('weatherApp.commons',[]);

      module(function($provide) {
        $provide.factory('WeatherService', function($q) {

          var getCurrentWeatherData = jasmine.createSpy('getCurrentWeatherData').and.callFake(function() {
            //a fake implementation
            return $q.when({
              'name': 'Toronto',
              'weather': {
                'description': 'Clear Sky'
              }
            });
          });
          var getForecastWeatherData = jasmine.createSpy('getForecastWeatherData').and.callFake(function() {
            //a fake implementation
            return $q.when({
              'city': {
                'name': 'Toronto',
                'list': [{
                  'temp_max': '20',
                  'temp_min': '22'
                }, {

                }]
              }
            });
          });

          return {
            getCurrentWeatherData: getCurrentWeatherData,
            getForecastWeatherData: getForecastWeatherData
          };
        });
        //next service
        $provide.factory('WeatherDataService', function() {
          var getSelectedCity = jasmine.createSpy('getSelectedCity').and.callFake(function() {
            //a fake implementation
            return 'Toronto111';
          });

          var getGeneralDescription = jasmine.createSpy('getGeneralDescription').and.callFake(function() {
            //a fake implementation
            return {
              'cityName': 'Toronto, CA'
            };
          });

          var getWeatherDetails = jasmine.createSpy('getWeatherDetails').and.callFake(function() {
            //a fake implementation
            return {
              'temperature': '20'
            };
          });

          var getForecastDetails = jasmine.createSpy('getForecastDetails').and.callFake(function() {
            //a fake implementation
            return {
              'details': [{
                'temp_max': '20',
                'temp_min': '15'
              }, {
                'temp_max': '24',
                'temp_min': '13'
              }]
            };
          });

          return {
            getSelectedCity: getSelectedCity,
            getGeneralDescription: getGeneralDescription,
            getWeatherDetails: getWeatherDetails,
            getForecastDetails: getForecastDetails
          };

        });
      });


    });

    // beforeEach(inject(function(WeatherService, WeatherDataService) {
    //
    // }));

    var HomeController,
      scope;

    // Initialize the controller
    beforeEach(inject(function($rootScope, $controller,WeatherService, WeatherDataService) {
      scope = $rootScope.$new();
      mockWeatherService = WeatherService;
      mockWeatherDataService = WeatherDataService;

      //spyOn(mockWeatherService,'getCurrentWeatherData').and.callThrough();

      HomeController = $controller('HomeController', {
          WeatherService:mockWeatherService,
          WeatherDataService:mockWeatherDataService
          // place here mocked dependencies
      });
    }));

    it('refresh should be defined ', function() {
      expect(HomeController.refresh).toBeDefined();
    });

    it('refresh should populate general description ', function() {
      HomeController.refresh();
      scope.$digest();
      expect(mockWeatherService.getCurrentWeatherData).toHaveBeenCalled();
      expect(mockWeatherService.getForecastWeatherData).toHaveBeenCalled();
      expect(mockWeatherDataService.getSelectedCity).toHaveBeenCalled();

      expect(HomeController.generalDescription).toBeDefined();
      expect(HomeController.generalDescription).toEqual({
        'cityName': 'Toronto, CA'
      });

      expect(HomeController.weatherDetails).toBeDefined();
      expect(HomeController.weatherDetails).toEqual({
        'temperature': '20'
      });

      expect(HomeController.forecastDetails).toBeDefined();
      expect(HomeController.forecastDetails).toEqual({
        'details': [{
          'temp_max': '20',
          'temp_min': '15'
        }, {
          'temp_max': '24',
          'temp_min': '13'
        }]
      });

    });
  });

})();
