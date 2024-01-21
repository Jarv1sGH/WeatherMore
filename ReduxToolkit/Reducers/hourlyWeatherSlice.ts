import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; import axios from "axios";
import { options } from "../../utils/ApiUtils";

export const fetchHourWeather = createAsyncThunk('hourlyWeatherSlice/fetchHourWeather', async (id: number) => {

    try {
        const url = `https://foreca-weather.p.rapidapi.com/forecast/hourly/${id}`
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

type hourType = {
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
            state.loading = true;
            state.error = action.error.message;
        })
    }
}
)

export default hourlyWeatherSlice.reducer;