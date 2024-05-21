import { createAsyncThunk } from '@reduxjs/toolkit';
import { getVansApi } from 'services/campers';

export const fetchVehicles = createAsyncThunk('advert/fetchList', () =>
  getVansApi()
);
