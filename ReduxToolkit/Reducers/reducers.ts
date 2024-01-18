import { createSlice } from '@reduxjs/toolkit';
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
    searchClicked: false,
  },
  reducers: {
    setSelectedForecast: (state, action) => {
      state.selectedForecast = action.payload;
    },
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
  },
});

export const { setSelectedForecast, setSearchClicked } = componentSlice.actions;
export default componentSlice.reducer;
