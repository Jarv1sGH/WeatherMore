import { API_KEY } from "@env";
import { DailyObjType } from "../ReduxToolkit/Reducers/dailyWeatherSlice";



export const options = {
    params: {
        alt: '0',
        tempunit: 'C',
        windunit: 'KMH',
        lang: 'en',
        periods: 12,
        dataset: 'full'
    },
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
};

export const createWeatherObj = (dailyData: DailyObjType) => {
    return {
        time: dailyData.date,
        temperature: dailyData.maxTemp,
        symbol: dailyData.symbol,
        symbolPhrase: dailyData.symbolPhrase,
        uvIndex: dailyData.uvIndex,
        dewPoint: dailyData.maxDewPoint,
        feelsLikeTemp: dailyData.maxFeelsLikeTemp,
        precipProb: dailyData.precipProb,
        pressure: dailyData.pressure,
        windSpeed: dailyData.maxWindSpeed,
        relHumidity: dailyData.maxRelHumidity,
        sunrise: dailyData.sunrise,
        sunset: dailyData.sunset,
    };
};