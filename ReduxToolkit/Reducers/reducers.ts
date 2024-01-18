import { createSlice } from '@reduxjs/toolkit';
const componentSlice = createSlice({
  name: 'setComponent',
  initialState: {
    selectedForecast: 'today',
  },
  reducers: {
    setSelectedForecast: (state, action) => {
      state.selectedForecast = action.payload;
    },
  },
});

export const { setSelectedForecast } = componentSlice.actions;
export default componentSlice.reducer;
