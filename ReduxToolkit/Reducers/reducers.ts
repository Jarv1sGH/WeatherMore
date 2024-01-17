// reducers/counter.js
import { createSlice } from '@reduxjs/toolkit';

// export interface SelectedComponentState {
//   selectedForecast: string;
// }

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
