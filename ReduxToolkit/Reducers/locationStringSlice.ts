import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY } from '@env';
import axios, { AxiosResponse } from 'axios'

type coordinatesType = {
    lat: number,
    long: number
}

type GeoApiResType = {
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

export const fetchLocationString = createAsyncThunk('locationStringSlice/fetchLocationString', async (coordinates: coordinatesType): Promise<object> => {

    try {
        const { data }: AxiosResponse<GeoApiResType> =
            await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.long}&localityLanguage=en`)


        const { city, countryCode, locality, countryName, principalSubdivision } = data;

        const options = {
            method: 'GET',
            url: `https://foreca-weather.p.rapidapi.com/location/search/${encodeURIComponent(city)}`,
            params: {
                lang: 'en',
                country: `${countryCode}`
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
            }
        };
        const response = await axios.request(options)
        return {
            id: response.data?.locations[0]?.id,
            timezone: response.data?.locations[0]?.timezone,
            locality: locality,
            city: city,
            country: countryName,
            subDivision: principalSubdivision
        }

    } catch (error) {
        console.error(error);
        throw (error)
    }
})

const locationStringSlice = createSlice({
    name: 'locationStringSlice',
    initialState: {
        loading: false,
        locationData: {} as locationDataType,
        error: '' as string | undefined,
    },
    reducers: {
        setLocationData: (state, action) => {
            state.locationData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLocationString.pending, (state) => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchLocationString.fulfilled, (state, action) => {
            state.loading = false
            state.locationData = action.payload as locationDataType
        })
        builder.addCase(fetchLocationString.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export const { setLocationData } = locationStringSlice.actions;

export default locationStringSlice.reducer;