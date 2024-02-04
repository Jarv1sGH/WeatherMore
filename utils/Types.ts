import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type RangeIndicatorProps = {
    minValue: number;
    maxValue: number;
    time: string;
};

export type WeatherDetailCardProps = {
    icon: IconProp;
    name: string;
    value: string;
}

export type weatherDataType = {
    name: string;
    value: string;
    icon: IconProp;
};

export type FuncDataType = {
    id: number,
    timezone: string
}


export type weatherObjType = {
    time: string,
    temperature: number,
    symbol: string,
    symbolPhrase: string,
    sunrise?: string,
    sunset?: string,
    uvIndex: number,
    dewPoint: number,
    feelsLikeTemp: number,
    precipProb: number,
    pressure: number,
    thunderProb?: number,
    windSpeed: number,
    windDirString?: string,
    relHumidity: number,
}

export type DailyObjType = {
    date: string,
    minTemp: number,
    maxTemp: number,
    symbol: string,
    symbolPhrase: string,
    maxWindSpeed: number,
    sunrise: string,
    sunset: string,
    uvIndex: number,
    maxRelHumidity: number,
    maxFeelsLikeTemp: number,
    maxDewPoint: number,
    precipProb: number,
    pressure: number,
}

export type hourType = {
    time: string,
    temperature: number,
    symbol: string,
    symbolPhrase: string,
    windDirString: string,
    windSpeed: number
    precipProb: number
}
export type coordinatesType = {
    lat: number,
    long: number
}

export type GeoApiResType = {
    city: string,
    countryCode: string,
    locality: string,
    countryName: string,
    principalSubdivision: string,
}
export type locationDataType = {
    city: string,
    countryCode?: string,
    locality?: string,
    countryName: string,
    principalSubdivision?: string,
    id: number | null,
    timezone: string
}
export type locationCoordsType = {
    lat: number,
    long: number
}
export type colorPaletteType = {
    gradientColor1: string,
    gradientColor2: string,
    headerColor: string,
    offset1: string,
    offset2: string,
}

export type LocationObjType = {
    id: number
    name: string
    country: string
    timezone: string
    language: string
    adminArea: string
    lon: number
    lat: number
}
