import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; import axios from "axios";
import { options } from "../../utils/ApiUtils";

export const fetchDailyWeather = createAsyncThunk('dailyWeatherSlice/fetchDailyWeather', async (id: number) => {

    try {
        const url = `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

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

const daillyWeatherSlice = createSlice({
    name: 'daillyWeatherSlice',
    initialState: {
        loading: false,
        dailyWeather: {
            forecast: [] as Array<DailyObjType>,
        },
        error: '' as string | undefined
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDailyWeather.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchDailyWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.dailyWeather = action.payload;
        })
        builder.addCase(fetchDailyWeather.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        })
    }
}
)

export default daillyWeatherSlice.reducer;