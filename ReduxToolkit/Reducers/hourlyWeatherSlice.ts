import { API_KEY } from "@env";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; import axios from "axios";
// import { options } from "../../utils/ApiUtils";
type FuncDataType = {
    id: number,
    timezone: string
}

export const fetchHourWeather = createAsyncThunk('hourlyWeatherSlice/fetchHourWeather', async (funcData: FuncDataType) => {
    const options = {
        params: {
            alt: '0',
            tempunit: 'C',
            windunit: 'KMH',
            lang: 'en',
            tz: funcData.timezone,
            periods: 48,
            dataset: 'full',
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    try {
        const url = `https://foreca-weather.p.rapidapi.com/forecast/hourly/${funcData.id}`
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export type hourType = {
    time: string,
    temperature: number,
    symbol: string,
    symbolPhrase: string,
    windDirString: string,
    windSpeed: number
    precipProb: number
}

const hourlyWeatherSlice = createSlice({
    name: 'hourlyWeatherSlice',
    initialState: {
        loading: false,
        hourWeather: {
            forecast: [] as Array<hourType>,
        },
        error: '' as string | undefined
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHourWeather.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchHourWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.hourWeather = action.payload;
        })
        builder.addCase(fetchHourWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
}
)

export default hourlyWeatherSlice.reducer;