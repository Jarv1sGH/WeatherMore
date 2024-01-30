import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; import axios from "axios";

import { API_KEY } from "@env";



export const searchLocation = createAsyncThunk('searchLocationSlice/searchLocation', async (searchQuery: string) => {
    const options = {
        params: {
            lang: 'en',
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    try {
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        const url = `https://foreca-weather.p.rapidapi.com/location/search/${encodedSearchQuery}`
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

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

const searchLocationSlice = createSlice({
    name: 'daillyWeatherSlice',
    initialState: {
        loading: false,
        locations: {
            locations: [] as Array<LocationObjType>
        },
        error: '' as string | undefined
    },
        reducers: {
            clearSearchData: (state) => {
                state.locations = {
                    locations: []
                };
            },
        },
    extraReducers: (builder) => {
        builder.addCase(searchLocation.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(searchLocation.fulfilled, (state, action) => {
            state.loading = false;
            state.locations = action.payload;
        })
        builder.addCase(searchLocation.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        })
    }
}
)

export const { clearSearchData } = searchLocationSlice.actions;

export default searchLocationSlice.reducer;