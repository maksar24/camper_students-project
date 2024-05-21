import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicles } from './operations';
import { handlePending, handleRejected } from './helper';

const initialState = {
  vehiclesList: [],
  filteredVehicles: [],
  isLoading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    filterVehicles(state, { payload }) {
      state.filteredVehicles = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVehicles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.vehiclesList = payload;
      state.filteredVehicles = payload;
      state.error = null;
    });
    builder.addCase(fetchVehicles.pending, handlePending);
    builder.addCase(fetchVehicles.rejected, handleRejected);
  },
});

export const { filterVehicles } = vehiclesSlice.actions;

export const vehiclesReducer = vehiclesSlice.reducer;
