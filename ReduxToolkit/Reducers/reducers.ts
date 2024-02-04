import { createSlice } from '@reduxjs/toolkit';

type locationCoordsType = {
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
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
    searchClicked: false,
    locationCoords: {} as locationCoordsType,
    lastFetchTime: 0,
    colorPalette: {} as colorPaletteType
  },
  reducers: {
    setSelectedForecast: (state, action) => {
      state.selectedForecast = action.payload;
    },
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    setLocationCoords: (state, action) => {
      state.locationCoords = action.payload;
    },
    setLastFetchTime: (state, action) => {
      state.lastFetchTime = action.payload;
    },
    setColorPalette: (state, action) => {
      state.colorPalette = action.payload;
    },
  },
});

export const { setSelectedForecast, setSearchClicked, setLocationCoords, setLastFetchTime, setColorPalette } = componentSlice.actions;
export default componentSlice.reducer;
