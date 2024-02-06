import { API_KEY } from "@env";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'
import { FuncDataType, weatherObjType } from "../../utils/Types";


interface currentWeatherType {
    current: weatherObjType
}
export const fetchCurrentWeather = createAsyncThunk('currentWeatherSlice/fetchCurrentWeather', async (funcData: FuncDataType) => {
    const options = {
        params: {
            alt: '0',
            tempunit: 'C',
            windunit: 'MS',
            tz: funcData.timezone,
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    const url = `https://foreca-weather.p.rapidapi.com/current/${funcData.id}`
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