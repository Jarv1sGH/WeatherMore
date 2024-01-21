import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'
import { options } from "../../utils/ApiUtils";




export interface weatherObjType {
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

interface currentWeatherType {
    current: weatherObjType
}
export const fetchCurrentWeather = createAsyncThunk('currentWeatherSlice/fetchCurrentWeather', async (id: number) => {

    const url = `https://foreca-weather.p.rapidapi.com/current/${id}`
    try {
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.error(error);
        throw (error)
    }

})

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState: {
        loading: false,
        currentWeather: {} as currentWeatherType,
        error: '' as string | undefined
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.loading = false

        })
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.loading = true
            state.currentWeather = action.payload

        })
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message;


        })
    }
})

export default currentWeatherSlice.reducer;