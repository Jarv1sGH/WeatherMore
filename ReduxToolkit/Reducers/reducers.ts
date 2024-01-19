import { createSlice } from '@reduxjs/toolkit';
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
    searchClicked: false,
    locationData: {
    },
  },
  reducers: {
    setSelectedForecast: (state, action) => {
      state.selectedForecast = action.payload;
    },
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    setLocationData: (state, action) => {
      state.locationData = action.payload;
    },
  },
});

export const { setSelectedForecast, setSearchClicked, setLocationData } = componentSlice.actions;
export default componentSlice.reducer;
