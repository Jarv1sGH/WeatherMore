import { createSlice } from '@reduxjs/toolkit';
import { colorPaletteType, locationCoordsType } from '../../utils/Types';
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
