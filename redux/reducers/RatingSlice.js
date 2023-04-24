import { createSlice } from '@reduxjs/toolkit';

const ratingSlice = createSlice({
  name: 'rating',
  initialState: { value:[] },
  reducers: {
    addRating: (state, action) => {
      state.value.push(action.payload);
    },
    removeRating: (state, action) => {
      let array = [...state.value]
      const index = array.indexOf(action.payload.name);
      if (index > -1) {
        array.splice(index, 1);
        state.value = array;
      }
    },
  },
});

export const { addRating, removeRating } = ratingSlice.actions;
export default ratingSlice.reducer;
