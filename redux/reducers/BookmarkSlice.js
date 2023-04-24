import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: { value: [] },
  reducers: {
    addBm: (state, action) => {
      if (!state.value.includes(action.payload))
        state.value.push(action.payload);
    },
    removeBm: (state, action) => {
      let array = [...state.value]
      const index = array.indexOf(action.payload);
      if (index > -1) {
        array.splice(index, 1);
        state.value = array;
      }
    },
  },
});

export const { addBm, removeBm } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
