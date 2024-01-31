import { createSlice } from '@reduxjs/toolkit';

type locationCoordsType = {
  lat: number,
  long: number
}
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
    searchClicked: false,
    locationCoords: {} as locationCoordsType,
    lastFetchTime: 0
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
  },
});

export const { setSelectedForecast, setSearchClicked, setLocationCoords, setLastFetchTime } = componentSlice.actions;
export default componentSlice.reducer;
