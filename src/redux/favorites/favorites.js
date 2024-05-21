import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites(state, { payload }) {
      const isAvailable = state.find(({ _id }) => _id === payload._id);
      if (!isAvailable) {
        state.push(payload);
      } else {
        return state.filter(({ _id }) => _id !== payload._id);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
