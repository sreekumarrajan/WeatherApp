(function() {
  'use strict';

  var forecastWeatherData = {
    "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
        "lon": -0.12574,
        "lat": 51.50853
      },
      "country": "GB",
      "population": 0,
      "sys": {
        "population": 0
      }
    },
    "cod": "200",
    "message": 0.0039,
    "cnt": 39,
    "list": [{
      "dt": 1464069600,
      "main": {
        "temp": 7.56,
        "temp_min": 7.56,
        "temp_max": 8.77,
        "pressure": 1025.16,
        "sea_level": 1035.33,
        "grnd_level": 1025.16,
        "humidity": 72,
        "temp_kf": -1.21
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.3,
        "deg": 38.0029
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-24 06:00:00"
    }, {
      "dt": 1464080400,
      "main": {
        "temp": 12.44,
        "temp_min": 12.44,
        "temp_max": 13.59,
        "pressure": 1025.05,
        "sea_level": 1034.94,
        "grnd_level": 1025.05,
        "humidity": 75,
        "temp_kf": -1.14
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.96,
        "deg": 39.5008
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-24 09:00:00"
    }, {
      "dt": 1464091200,
      "main": {
        "temp": 15.23,
        "temp_min": 15.23,
        "temp_max": 16.31,
        "pressure": 1023.67,
        "sea_level": 1033.62,
        "grnd_level": 1023.67,
        "humidity": 69,
        "temp_kf": -1.08
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.88,
        "deg": 35.5
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-24 12:00:00"
    }, {
      "dt": 1464102000,
      "main": {
        "temp": 15.77,
        "temp_min": 15.77,
        "temp_max": 16.78,
        "pressure": 1022.48,
        "sea_level": 1032.23,
        "grnd_level": 1022.48,
        "humidity": 58,
        "temp_kf": -1.02
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 6.02,
        "deg": 40
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-24 15:00:00"
    }, {
      "dt": 1464112800,
      "main": {
        "temp": 14.04,
        "temp_min": 14.04,
        "temp_max": 15,
        "pressure": 1021.69,
        "sea_level": 1031.54,
        "grnd_level": 1021.69,
        "humidity": 49,
        "temp_kf": -0.95
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.38,
        "deg": 36.5045
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-24 18:00:00"
    }, {
      "dt": 1464123600,
      "main": {
        "temp": 9.6,
        "temp_min": 9.6,
        "temp_max": 10.49,
        "pressure": 1022.41,
        "sea_level": 1032.37,
        "grnd_level": 1022.41,
        "humidity": 49,
        "temp_kf": -0.89
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.6,
        "deg": 34.0013
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-24 21:00:00"
    }, {
      "dt": 1464134400,
      "main": {
        "temp": 6.56,
        "temp_min": 6.56,
        "temp_max": 7.39,
        "pressure": 1022.03,
        "sea_level": 1032.09,
        "grnd_level": 1022.03,
        "humidity": 75,
        "temp_kf": -0.82
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.04,
        "deg": 29.5037
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-25 00:00:00"
    }, {
      "dt": 1464145200,
      "main": {
        "temp": 4.93,
        "temp_min": 4.93,
        "temp_max": 5.7,
        "pressure": 1020.71,
        "sea_level": 1030.85,
        "grnd_level": 1020.71,
        "humidity": 91,
        "temp_kf": -0.76
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.1,
        "deg": 7.00345
      },
      "rain": {
        "3h": 0.015
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-25 03:00:00"
    }, {
      "dt": 1464156000,
      "main": {
        "temp": 7.02,
        "temp_min": 7.02,
        "temp_max": 7.72,
        "pressure": 1019.94,
        "sea_level": 1030.08,
        "grnd_level": 1019.94,
        "humidity": 85,
        "temp_kf": -0.7
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 2.91,
        "deg": 355.504
      },
      "rain": {
        "3h": 0.085
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-25 06:00:00"
    }, {
      "dt": 1464166800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 11.55,
        "pressure": 1019.09,
        "sea_level": 1029.08,
        "grnd_level": 1019.09,
        "humidity": 74,
        "temp_kf": -0.63
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 3.82,
        "deg": 16.5005
      },
      "rain": {
        "3h": 0.055
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-25 09:00:00"
    }, {
      "dt": 1464177600,
      "main": {
        "temp": 13.91,
        "temp_min": 13.91,
        "temp_max": 14.48,
        "pressure": 1018.12,
        "sea_level": 1027.96,
        "grnd_level": 1018.12,
        "humidity": 75,
        "temp_kf": -0.57
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.86,
        "deg": 12.5033
      },
      "rain": {
        "3h": 0.005
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-25 12:00:00"
    }, {
      "dt": 1464188400,
      "main": {
        "temp": 15.22,
        "temp_min": 15.22,
        "temp_max": 15.73,
        "pressure": 1017.33,
        "sea_level": 1027.09,
        "grnd_level": 1017.33,
        "humidity": 66,
        "temp_kf": -0.51
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.72,
        "deg": 358.502
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-25 15:00:00"
    }, {
      "dt": 1464199200,
      "main": {
        "temp": 14.16,
        "temp_min": 14.16,
        "temp_max": 14.61,
        "pressure": 1016.68,
        "sea_level": 1026.59,
        "grnd_level": 1016.68,
        "humidity": 59,
        "temp_kf": -0.44
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 4.16,
        "deg": 346.502
      },
      "rain": {
        "3h": 0.005
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-25 18:00:00"
    }, {
      "dt": 1464210000,
      "main": {
        "temp": 11.86,
        "temp_min": 11.86,
        "temp_max": 12.24,
        "pressure": 1017.53,
        "sea_level": 1027.43,
        "grnd_level": 1017.53,
        "humidity": 69,
        "temp_kf": -0.38
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 2.98,
        "deg": 334.506
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-25 21:00:00"
    }, {
      "dt": 1464220800,
      "main": {
        "temp": 9.87,
        "temp_min": 9.87,
        "temp_max": 10.19,
        "pressure": 1017.63,
        "sea_level": 1027.61,
        "grnd_level": 1017.63,
        "humidity": 87,
        "temp_kf": -0.32
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.41,
        "deg": 316.007
      },
      "rain": {
        "3h": 0.01
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-26 00:00:00"
    }, {
      "dt": 1464231600,
      "main": {
        "temp": 8.45,
        "temp_min": 8.45,
        "temp_max": 8.71,
        "pressure": 1017.18,
        "sea_level": 1027.26,
        "grnd_level": 1017.18,
        "humidity": 96,
        "temp_kf": -0.25
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.3,
        "deg": 307.507
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-26 03:00:00"
    }, {
      "dt": 1464242400,
      "main": {
        "temp": 9.97,
        "temp_min": 9.97,
        "temp_max": 10.16,
        "pressure": 1017.67,
        "sea_level": 1027.62,
        "grnd_level": 1017.67,
        "humidity": 89,
        "temp_kf": -0.19
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 2.57,
        "deg": 289
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-26 06:00:00"
    }, {
      "dt": 1464253200,
      "main": {
        "temp": 13.37,
        "temp_min": 13.37,
        "temp_max": 13.49,
        "pressure": 1018.19,
        "sea_level": 1028.04,
        "grnd_level": 1018.19,
        "humidity": 76,
        "temp_kf": -0.13
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 3.03,
        "deg": 288.005
      },
      "rain": {
        "3h": 0.02
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-26 09:00:00"
    }, {
      "dt": 1464264000,
      "main": {
        "temp": 15.25,
        "temp_min": 15.25,
        "temp_max": 15.32,
        "pressure": 1018.48,
        "sea_level": 1028.33,
        "grnd_level": 1018.48,
        "humidity": 77,
        "temp_kf": -0.06
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 3.23,
        "deg": 295.001
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-26 12:00:00"
    }, {
      "dt": 1464274800,
      "main": {
        "temp": 16.26,
        "temp_min": 16.26,
        "temp_max": 16.26,
        "pressure": 1018.7,
        "sea_level": 1028.54,
        "grnd_level": 1018.7,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 3.16,
        "deg": 295.501
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-26 15:00:00"
    }, {
      "dt": 1464285600,
      "main": {
        "temp": 15.75,
        "temp_min": 15.75,
        "temp_max": 15.75,
        "pressure": 1019.32,
        "sea_level": 1029.1,
        "grnd_level": 1019.32,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.79,
        "deg": 303.004
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-26 18:00:00"
    }, {
      "dt": 1464296400,
      "main": {
        "temp": 14.03,
        "temp_min": 14.03,
        "temp_max": 14.03,
        "pressure": 1020.28,
        "sea_level": 1030.12,
        "grnd_level": 1020.28,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 1.66,
        "deg": 311.501
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-26 21:00:00"
    }, {
      "dt": 1464307200,
      "main": {
        "temp": 11.61,
        "temp_min": 11.61,
        "temp_max": 11.61,
        "pressure": 1020.9,
        "sea_level": 1030.87,
        "grnd_level": 1020.9,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 1.9,
        "deg": 334.003
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-27 00:00:00"
    }, {
      "dt": 1464318000,
      "main": {
        "temp": 9.53,
        "temp_min": 9.53,
        "temp_max": 9.53,
        "pressure": 1021.1,
        "sea_level": 1031.13,
        "grnd_level": 1021.1,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 1.34,
        "deg": 339.001
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-27 03:00:00"
    }, {
      "dt": 1464328800,
      "main": {
        "temp": 10.6,
        "temp_min": 10.6,
        "temp_max": 10.6,
        "pressure": 1021.66,
        "sea_level": 1031.69,
        "grnd_level": 1021.66,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.97,
        "deg": 349.504
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-27 06:00:00"
    }, {
      "dt": 1464339600,
      "main": {
        "temp": 15.41,
        "temp_min": 15.41,
        "temp_max": 15.41,
        "pressure": 1021.94,
        "sea_level": 1031.81,
        "grnd_level": 1021.94,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.97,
        "deg": 259.506
      },
      "rain": {
        "3h": 0.01
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-27 09:00:00"
    }, {
      "dt": 1464350400,
      "main": {
        "temp": 18.06,
        "temp_min": 18.06,
        "temp_max": 18.06,
        "pressure": 1021.64,
        "sea_level": 1031.45,
        "grnd_level": 1021.64,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.01,
        "deg": 248.502
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-27 12:00:00"
    }, {
      "dt": 1464361200,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 1020.86,
        "sea_level": 1030.67,
        "grnd_level": 1020.86,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 1.89,
        "deg": 291.003
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-27 15:00:00"
    }, {
      "dt": 1464372000,
      "main": {
        "temp": 18.96,
        "temp_min": 18.96,
        "temp_max": 18.96,
        "pressure": 1020.48,
        "sea_level": 1030.3,
        "grnd_level": 1020.48,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 1.82,
        "deg": 357.503
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-27 18:00:00"
    }, {
      "dt": 1464382800,
      "main": {
        "temp": 16.72,
        "temp_min": 16.72,
        "temp_max": 16.72,
        "pressure": 1021.15,
        "sea_level": 1031.02,
        "grnd_level": 1021.15,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 1.21,
        "deg": 49.5026
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-27 21:00:00"
    }, {
      "dt": 1464393600,
      "main": {
        "temp": 14.72,
        "temp_min": 14.72,
        "temp_max": 14.72,
        "pressure": 1020.9,
        "sea_level": 1030.81,
        "grnd_level": 1020.9,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 2.28,
        "deg": 72.5029
      },
      "rain": {
        "3h": 0.16
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-28 00:00:00"
    }, {
      "dt": 1464404400,
      "main": {
        "temp": 12.93,
        "temp_min": 12.93,
        "temp_max": 12.93,
        "pressure": 1020.44,
        "sea_level": 1030.4,
        "grnd_level": 1020.44,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.48,
        "deg": 88.0012
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-28 03:00:00"
    }, {
      "dt": 1464415200,
      "main": {
        "temp": 12.74,
        "temp_min": 12.74,
        "temp_max": 12.74,
        "pressure": 1020.62,
        "sea_level": 1030.54,
        "grnd_level": 1020.62,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.51,
        "deg": 89.0007
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-28 06:00:00"
    }, {
      "dt": 1464426000,
      "main": {
        "temp": 16.98,
        "temp_min": 16.98,
        "temp_max": 16.98,
        "pressure": 1020.04,
        "sea_level": 1029.8,
        "grnd_level": 1020.04,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 49.5031
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-28 09:00:00"
    }, {
      "dt": 1464436800,
      "main": {
        "temp": 19.54,
        "temp_min": 19.54,
        "temp_max": 19.54,
        "pressure": 1018.97,
        "sea_level": 1028.58,
        "grnd_level": 1018.97,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.51,
        "deg": 29.5
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-28 12:00:00"
    }, {
      "dt": 1464447600,
      "main": {
        "temp": 20.84,
        "temp_min": 20.84,
        "temp_max": 20.84,
        "pressure": 1017.26,
        "sea_level": 1026.95,
        "grnd_level": 1017.26,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.82,
        "deg": 22.5006
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-28 15:00:00"
    }, {
      "dt": 1464458400,
      "main": {
        "temp": 20.14,
        "temp_min": 20.14,
        "temp_max": 20.14,
        "pressure": 1016.32,
        "sea_level": 1026.15,
        "grnd_level": 1016.32,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 3.3,
        "deg": 18.0002
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-28 18:00:00"
    }, {
      "dt": 1464469200,
      "main": {
        "temp": 16.68,
        "temp_min": 16.68,
        "temp_max": 16.68,
        "pressure": 1016.86,
        "sea_level": 1026.6,
        "grnd_level": 1016.86,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.28,
        "deg": 23.5052
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-28 21:00:00"
    }, {
      "dt": 1464480000,
      "main": {
        "temp": 12.86,
        "temp_min": 12.86,
        "temp_max": 12.86,
        "pressure": 1016.88,
        "sea_level": 1026.69,
        "grnd_level": 1016.88,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.74,
        "deg": 22.5039
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-29 00:00:00"
    }]
  };

  var currentWeatherData = {
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [{
      "id": 701,
      "main": "Mist",
      "description": "mist",
      "icon": "50n"
    }, {
      "id": 741,
      "main": "Fog",
      "description": "fog",
      "icon": "50n"
    }],
    "base": "cmc stations",
    "main": {
      "temp": 7.42,
      "pressure": 1022,
      "humidity": 81,
      "temp_min": 5.56,
      "temp_max": 10.2
    },
    "wind": {
      "speed": 2.1,
      "deg": 40
    },
    "clouds": {
      "all": 0
    },
    "dt": 1464060312,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0098,
      "country": "GB",
      "sunrise": 1464062175,
      "sunset": 1464119963
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
  };


  describe('Service: WeatherService', function() {

    // load the controller's module
    beforeEach(function() {
      module('weatherApp.commons');

      module(function($provide) {
        $provide.constant('APPID', '8caa3a62ba1f3b52d931888f38d1bc75');
        $provide.factory('WeatherDataService', function() {
          var selectedUnit = 'metric';
          var currentWeatherData = '';
          var forecastWeatherData = '';
          var setSelectedCity = jasmine.createSpy('setSelectedCity').and.callFake(function() {
            //a fake implementation
          });

          var getSelectedUnit = jasmine.createSpy('getSelectedUnit').and.callFake(function() {
            return selectedUnit;
          });

          var setForecastWeatherData = jasmine.createSpy('setForecastWeatherData').and.callFake(function(result) {
            //a fake implementation
            forecastWeatherData = result;
          });

          var setCurrentWeatherData = jasmine.createSpy('getWeatherDetails').and.callFake(function(result) {
            //a fake implementation
            currentWeatherData = result;
          });


          return {
            setSelectedCity: setSelectedCity,
            getSelectedUnit: getSelectedUnit,
            setForecastWeatherData: setForecastWeatherData,
            setCurrentWeatherData: setCurrentWeatherData,
            currentWeatherData:currentWeatherData,
            forecastWeatherData:forecastWeatherData
          };

        });

        $provide.factory('BaseUrl', function() {
          var service = {};
          service.forecastWeatherRoot = 'http://api.openweathermap.org/data/2.5/forecast';
          service.currentWeatherRoot = 'http://api.openweathermap.org/data/2.5/weather';
          return service;
        });


      });

    });

    // beforeEach(inject(function(WeatherService, WeatherDataService) {
    //
    // }));

    var weatherDataService, httpMock, weatherService, baseUrl;

    // Initialize the services
    beforeEach(inject(function(WeatherDataService, BaseUrl, APPID, $httpBackend, WeatherService) {
      weatherService = WeatherService;
      baseUrl = BaseUrl;
      weatherDataService = WeatherDataService;
      httpMock = $httpBackend;

      httpMock.when('GET',
        "http://api.openweathermap.org/data/2.5/weather?APPID=8caa3a62ba1f3b52d931888f38d1bc75&mode=json&q=London&type=like&units=metric").respond({
        'data': currentWeatherData
      });

    }));

    it('should get the currentweatherdata', function() {
      console.log('Baseurl.currentweatherdata ', baseUrl.currentWeatherRoot);
      weatherService.getCurrentWeatherData('London');
      httpMock.flush();

      var data = weatherDataService.currentWeatherData;

      expect(data).toBeDefined();
    });

  });

})();
