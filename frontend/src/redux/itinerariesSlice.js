import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItinerariesByCity } from "../services/servicesItinerary";

// Fetch itineraries by city
export const fetchItineraries = createAsyncThunk(
  "itineraries/fetchByCity",
  async (cityName, { rejectWithValue }) => {
    try {
      const data = await fetchItinerariesByCity(cityName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const itinerariesSlice = createSlice({
  name: "itineraries",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default itinerariesSlice.reducer;
