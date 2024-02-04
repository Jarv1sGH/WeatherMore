import { DailyObjType } from "./Types";

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