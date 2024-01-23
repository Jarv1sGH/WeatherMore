const { DateTime } = require('luxon');

// Sample array with 48 objects, each representing an hour
const dataArray = [

    {
        "time": "2024-01-22T07:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 3,
        "windGust": 6,
        "relHumidity": 91,
        "dewPoint": 11,
        "windDir": 130,
        "windDirString": "SE",
        "precipProb": 81,
        "precipAccum": 0.25,
        "snowAccum": 0,
        "cloudiness": 99,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1005.38,
        "visibility": 19701,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T08:00-08:00",
        "symbol": "d400",
        "symbolPhrase": "overcast",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 3,
        "windGust": 5,
        "relHumidity": 92,
        "dewPoint": 11,
        "windDir": 133,
        "windDirString": "SE",
        "precipProb": 70,
        "precipAccum": 0.01,
        "snowAccum": 0,
        "cloudiness": 98,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1006.05,
        "visibility": 21850,
        "solarRadiation": 6,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T09:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 87,
        "dewPoint": 12,
        "windDir": 133,
        "windDirString": "SE",
        "precipProb": 60,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 94,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1006.72,
        "visibility": 22481,
        "solarRadiation": 60,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T10:00-08:00",
        "symbol": "d400",
        "symbolPhrase": "overcast",
        "temperature": 16,
        "feelsLikeTemp": 16,
        "windSpeed": 2,
        "windGust": 3,
        "relHumidity": 84,
        "dewPoint": 12,
        "windDir": 141,
        "windDirString": "SE",
        "precipProb": 49,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 99,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1007.38,
        "visibility": 29000,
        "solarRadiation": 158,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T11:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 2,
        "windGust": 3,
        "relHumidity": 82,
        "dewPoint": 13,
        "windDir": 140,
        "windDirString": "SE",
        "precipProb": 45,
        "precipAccum": 0.1,
        "snowAccum": 0,
        "cloudiness": 88,
        "thunderProb": 11.7527,
        "uvIndex": 1,
        "pressure": 1007.2,
        "visibility": 30374,
        "solarRadiation": 172,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T12:00-08:00",
        "symbol": "d320",
        "symbolPhrase": "showers",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 82,
        "dewPoint": 13,
        "windDir": 147,
        "windDirString": "SE",
        "precipProb": 41,
        "precipAccum": 0.46,
        "snowAccum": 0,
        "cloudiness": 79,
        "thunderProb": 2.42935,
        "uvIndex": 2,
        "pressure": 1007.03,
        "visibility": 12467,
        "solarRadiation": 168,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T13:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 3,
        "windGust": 4,
        "relHumidity": 80,
        "dewPoint": 14,
        "windDir": 289,
        "windDirString": "W",
        "precipProb": 37,
        "precipAccum": 0.23,
        "snowAccum": 0,
        "cloudiness": 87,
        "thunderProb": 9.00158,
        "uvIndex": 2,
        "pressure": 1006.85,
        "visibility": 14567,
        "solarRadiation": 328,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T14:00-08:00",
        "symbol": "d320",
        "symbolPhrase": "showers",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 3,
        "windGust": 5,
        "relHumidity": 80,
        "dewPoint": 15,
        "windDir": 305,
        "windDirString": "NW",
        "precipProb": 36,
        "precipAccum": 0.59,
        "snowAccum": 0,
        "cloudiness": 77,
        "thunderProb": 0,
        "uvIndex": 1,
        "pressure": 1007.22,
        "visibility": 12643,
        "solarRadiation": 250,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T15:00-08:00",
        "symbol": "d210",
        "symbolPhrase": "light rain",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 4,
        "windGust": 6,
        "relHumidity": 82,
        "dewPoint": 15,
        "windDir": 309,
        "windDirString": "NW",
        "precipProb": 36,
        "precipAccum": 0.13,
        "snowAccum": 0,
        "cloudiness": 48,
        "thunderProb": 3.63877,
        "uvIndex": 1,
        "pressure": 1007.6,
        "visibility": 16564,
        "solarRadiation": 226,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T16:00-08:00",
        "symbol": "d220",
        "symbolPhrase": "showers",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 5,
        "windGust": 7,
        "relHumidity": 85,
        "dewPoint": 15,
        "windDir": 318,
        "windDirString": "NW",
        "precipProb": 35,
        "precipAccum": 0.34,
        "snowAccum": 0,
        "cloudiness": 65,
        "thunderProb": 1.31833,
        "uvIndex": 1,
        "pressure": 1007.97,
        "visibility": 9991,
        "solarRadiation": 162,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T17:00-08:00",
        "symbol": "d220",
        "symbolPhrase": "showers",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 4,
        "windGust": 7,
        "relHumidity": 89,
        "dewPoint": 15,
        "windDir": 315,
        "windDirString": "NW",
        "precipProb": 31,
        "precipAccum": 0.35,
        "snowAccum": 0,
        "cloudiness": 52,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1008.85,
        "visibility": 18519,
        "solarRadiation": 66,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T18:00-08:00",
        "symbol": "n200",
        "symbolPhrase": "partly cloudy",
        "temperature": 16,
        "feelsLikeTemp": 16,
        "windSpeed": 3,
        "windGust": 7,
        "relHumidity": 93,
        "dewPoint": 14,
        "windDir": 327,
        "windDirString": "NW",
        "precipProb": 27,
        "precipAccum": 0.03,
        "snowAccum": 0,
        "cloudiness": 64,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1009.72,
        "visibility": 20410,
        "solarRadiation": 2,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T19:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 15,
        "feelsLikeTemp": 15,
        "windSpeed": 2,
        "windGust": 7,
        "relHumidity": 94,
        "dewPoint": 14,
        "windDir": 318,
        "windDirString": "NW",
        "precipProb": 23,
        "precipAccum": 0.04,
        "snowAccum": 0,
        "cloudiness": 76,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1010.6,
        "visibility": 18472,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T20:00-08:00",
        "symbol": "n310",
        "symbolPhrase": "light rain",
        "temperature": 15,
        "feelsLikeTemp": 15,
        "windSpeed": 2,
        "windGust": 6,
        "relHumidity": 94,
        "dewPoint": 14,
        "windDir": 309,
        "windDirString": "NW",
        "precipProb": 22,
        "precipAccum": 0.05,
        "snowAccum": 0,
        "cloudiness": 71,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1011.13,
        "visibility": 16316,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T21:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 15,
        "feelsLikeTemp": 15,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 93,
        "dewPoint": 14,
        "windDir": 331,
        "windDirString": "NW",
        "precipProb": 21,
        "precipAccum": 0.03,
        "snowAccum": 0,
        "cloudiness": 89,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1011.67,
        "visibility": 16468,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T22:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 1,
        "windGust": 4,
        "relHumidity": 94,
        "dewPoint": 14,
        "windDir": 338,
        "windDirString": "N",
        "precipProb": 20,
        "precipAccum": 0.01,
        "snowAccum": 0,
        "cloudiness": 93,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1012.21,
        "visibility": 17245,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-22T23:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 1,
        "windGust": 4,
        "relHumidity": 92,
        "dewPoint": 13,
        "windDir": 326,
        "windDirString": "NW",
        "precipProb": 17,
        "precipAccum": 0.01,
        "snowAccum": 0,
        "cloudiness": 99,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1012.55,
        "visibility": 15390,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T00:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 91,
        "dewPoint": 13,
        "windDir": 344,
        "windDirString": "N",
        "precipProb": 13,
        "precipAccum": 0.03,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1012.89,
        "visibility": 15620,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T01:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 93,
        "dewPoint": 12,
        "windDir": 334,
        "windDirString": "NW",
        "precipProb": 10,
        "precipAccum": 0.03,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1013.23,
        "visibility": 15540,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T02:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 1,
        "windGust": 4,
        "relHumidity": 94,
        "dewPoint": 12,
        "windDir": 309,
        "windDirString": "NW",
        "precipProb": 14,
        "precipAccum": 0.07,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1013.56,
        "visibility": 13129,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T03:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 95,
        "dewPoint": 12,
        "windDir": 306,
        "windDirString": "NW",
        "precipProb": 18,
        "precipAccum": 0.12,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1013.89,
        "visibility": 12276,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T04:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 3,
        "windGust": 5,
        "relHumidity": 95,
        "dewPoint": 12,
        "windDir": 308,
        "windDirString": "NW",
        "precipProb": 22,
        "precipAccum": 0.11,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1014.23,
        "visibility": 8419,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T05:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 96,
        "dewPoint": 12,
        "windDir": 314,
        "windDirString": "NW",
        "precipProb": 20,
        "precipAccum": 0.07,
        "snowAccum": 0,
        "cloudiness": 98,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1014.74,
        "visibility": 12818,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T06:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 12,
        "feelsLikeTemp": 12,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 96,
        "dewPoint": 12,
        "windDir": 307,
        "windDirString": "NW",
        "precipProb": 19,
        "precipAccum": 0.06,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1015.25,
        "visibility": 11147,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T07:00-08:00",
        "symbol": "n410",
        "symbolPhrase": "light rain",
        "temperature": 12,
        "feelsLikeTemp": 12,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 97,
        "dewPoint": 11,
        "windDir": 299,
        "windDirString": "NW",
        "precipProb": 18,
        "precipAccum": 0.07,
        "snowAccum": 0,
        "cloudiness": 95,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1015.76,
        "visibility": 12593,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T08:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 2,
        "windGust": 5,
        "relHumidity": 96,
        "dewPoint": 12,
        "windDir": 296,
        "windDirString": "NW",
        "precipProb": 18,
        "precipAccum": 0.06,
        "snowAccum": 0,
        "cloudiness": 89,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1016.53,
        "visibility": 15397,
        "solarRadiation": 10,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T09:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 3,
        "windGust": 5,
        "relHumidity": 91,
        "dewPoint": 12,
        "windDir": 312,
        "windDirString": "NW",
        "precipProb": 18,
        "precipAccum": 0.06,
        "snowAccum": 0,
        "cloudiness": 93,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1017.31,
        "visibility": 13825,
        "solarRadiation": 67,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T10:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 15,
        "feelsLikeTemp": 15,
        "windSpeed": 3,
        "windGust": 6,
        "relHumidity": 86,
        "dewPoint": 13,
        "windDir": 322,
        "windDirString": "NW",
        "precipProb": 18,
        "precipAccum": 0.09,
        "snowAccum": 0,
        "cloudiness": 94,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1018.08,
        "visibility": 14126,
        "solarRadiation": 137,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T11:00-08:00",
        "symbol": "d310",
        "symbolPhrase": "light rain",
        "temperature": 16,
        "feelsLikeTemp": 16,
        "windSpeed": 3,
        "windGust": 6,
        "relHumidity": 81,
        "dewPoint": 13,
        "windDir": 341,
        "windDirString": "N",
        "precipProb": 19,
        "precipAccum": 0.09,
        "snowAccum": 0,
        "cloudiness": 90,
        "thunderProb": 0,
        "uvIndex": 2,
        "pressure": 1017.84,
        "visibility": 21881,
        "solarRadiation": 232,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T12:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 3,
        "windGust": 6,
        "relHumidity": 77,
        "dewPoint": 12,
        "windDir": 308,
        "windDirString": "NW",
        "precipProb": 20,
        "precipAccum": 0.02,
        "snowAccum": 0,
        "cloudiness": 69,
        "thunderProb": 0,
        "uvIndex": 2,
        "pressure": 1017.59,
        "visibility": 25041,
        "solarRadiation": 389,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T13:00-08:00",
        "symbol": "d200",
        "symbolPhrase": "partly cloudy",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 4,
        "windGust": 7,
        "relHumidity": 75,
        "dewPoint": 12,
        "windDir": 293,
        "windDirString": "NW",
        "precipProb": 21,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 47,
        "thunderProb": 0,
        "uvIndex": 2,
        "pressure": 1017.35,
        "visibility": 29888,
        "solarRadiation": 520,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T14:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 4,
        "windGust": 6,
        "relHumidity": 71,
        "dewPoint": 12,
        "windDir": 307,
        "windDirString": "NW",
        "precipProb": 14,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 82,
        "thunderProb": 0,
        "uvIndex": 1,
        "pressure": 1017.53,
        "visibility": 31923,
        "solarRadiation": 514,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T15:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 18,
        "feelsLikeTemp": 18,
        "windSpeed": 4,
        "windGust": 6,
        "relHumidity": 72,
        "dewPoint": 12,
        "windDir": 329,
        "windDirString": "NW",
        "precipProb": 8,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 82,
        "thunderProb": 0,
        "uvIndex": 1,
        "pressure": 1017.7,
        "visibility": 34859,
        "solarRadiation": 365,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T16:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 17,
        "feelsLikeTemp": 17,
        "windSpeed": 5,
        "windGust": 6,
        "relHumidity": 74,
        "dewPoint": 13,
        "windDir": 315,
        "windDirString": "NW",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 81,
        "thunderProb": 0,
        "uvIndex": 1,
        "pressure": 1017.88,
        "visibility": 34298,
        "solarRadiation": 210,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T17:00-08:00",
        "symbol": "d300",
        "symbolPhrase": "cloudy",
        "temperature": 16,
        "feelsLikeTemp": 16,
        "windSpeed": 4,
        "windGust": 5,
        "relHumidity": 86,
        "dewPoint": 13,
        "windDir": 327,
        "windDirString": "NW",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 80,
        "thunderProb": 0,
        "uvIndex": 1,
        "pressure": 1018.11,
        "visibility": 29399,
        "solarRadiation": 67,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T18:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 4,
        "windGust": 5,
        "relHumidity": 89,
        "dewPoint": 13,
        "windDir": 347,
        "windDirString": "N",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 81,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1018.34,
        "visibility": 18702,
        "solarRadiation": 3,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T19:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 14,
        "feelsLikeTemp": 14,
        "windSpeed": 3,
        "windGust": 5,
        "relHumidity": 93,
        "dewPoint": 12,
        "windDir": 38,
        "windDirString": "NE",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 79,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1018.57,
        "visibility": 28469,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T20:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 13,
        "feelsLikeTemp": 13,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 92,
        "dewPoint": 11,
        "windDir": 228,
        "windDirString": "SW",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 87,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.04,
        "visibility": 26301,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T21:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 12,
        "feelsLikeTemp": 12,
        "windSpeed": 2,
        "windGust": 3,
        "relHumidity": 95,
        "dewPoint": 10,
        "windDir": 339,
        "windDirString": "N",
        "precipProb": 2,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 84,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.5,
        "visibility": 23340,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T22:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 96,
        "dewPoint": 11,
        "windDir": 344,
        "windDirString": "N",
        "precipProb": 2,
        "precipAccum": 0.03,
        "snowAccum": 0,
        "cloudiness": 88,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.97,
        "visibility": 21133,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-23T23:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 97,
        "dewPoint": 11,
        "windDir": 163,
        "windDirString": "S",
        "precipProb": 4,
        "precipAccum": 0.04,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1020.01,
        "visibility": 21081,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T00:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 98,
        "dewPoint": 10,
        "windDir": 149,
        "windDirString": "SE",
        "precipProb": 7,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 87,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1020.04,
        "visibility": 27116,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T01:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 10,
        "feelsLikeTemp": 10,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 98,
        "dewPoint": 10,
        "windDir": 131,
        "windDirString": "SE",
        "precipProb": 10,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 80,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1020.08,
        "visibility": 27343,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T02:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 1,
        "windGust": 3,
        "relHumidity": 94,
        "dewPoint": 10,
        "windDir": 144,
        "windDirString": "SE",
        "precipProb": 15,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 99,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.79,
        "visibility": 26825,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T03:00-08:00",
        "symbol": "n300",
        "symbolPhrase": "cloudy",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 91,
        "dewPoint": 9,
        "windDir": 133,
        "windDirString": "SE",
        "precipProb": 21,
        "precipAccum": 0,
        "snowAccum": 0,
        "cloudiness": 91,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.51,
        "visibility": 26833,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T04:00-08:00",
        "symbol": "n310",
        "symbolPhrase": "light rain",
        "temperature": 10,
        "feelsLikeTemp": 10,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 87,
        "dewPoint": 9,
        "windDir": 138,
        "windDirString": "SE",
        "precipProb": 26,
        "precipAccum": 0.09,
        "snowAccum": 0,
        "cloudiness": 90,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.23,
        "visibility": 26416,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T05:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 2,
        "windGust": 4,
        "relHumidity": 82,
        "dewPoint": 9,
        "windDir": 145,
        "windDirString": "SE",
        "precipProb": 38,
        "precipAccum": 0.01,
        "snowAccum": 0,
        "cloudiness": 95,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.41,
        "visibility": 11628,
        "solarRadiation": 0,
        "precipType": "rain"
      },
      {
        "time": "2024-01-24T06:00-08:00",
        "symbol": "n400",
        "symbolPhrase": "overcast",
        "temperature": 11,
        "feelsLikeTemp": 11,
        "windSpeed": 1,
        "windGust": 4,
        "relHumidity": 84,
        "dewPoint": 9,
        "windDir": 143,
        "windDirString": "SE",
        "precipProb": 49,
        "precipAccum": 0.01,
        "snowAccum": 0,
        "cloudiness": 100,
        "thunderProb": 0,
        "uvIndex": 0,
        "pressure": 1019.59,
        "visibility": 10796,
        "solarRadiation": 0,
        "precipType": "rain"
      }
  
  // ... (other objects)
];

// Specify the desired timezone
const desiredTimeZone = 'America/Los_Angeles';

// Get the start and end times for tomorrow in the specified timezone
const tomorrowStart = DateTime.now().setZone(desiredTimeZone).plus({ days: 1 }).set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
const tomorrowEnd = tomorrowStart.plus({ days: 1 });

// Filter the array to include only the data for tomorrow
const filteredArray = dataArray.filter(item => {
  const itemDateTime = DateTime.fromISO(item.time, { zone: desiredTimeZone });
  return itemDateTime >= tomorrowStart && itemDateTime < tomorrowEnd;
});

console.log(filteredArray);
