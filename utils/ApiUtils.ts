import { API_KEY } from "@env";



export const options = {
    params: {
        alt: '0',
        tempunit: 'C',
        windunit: 'MS',
        lang: 'en',
        periods: 12
    },
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
};