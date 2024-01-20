import { createSlice } from '@reduxjs/toolkit';
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
    searchClicked: false,
    locationCoords: {},
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
  },
});

export const { setSelectedForecast, setSearchClicked, setLocationCoords } = componentSlice.actions;
export default componentSlice.reducer;
