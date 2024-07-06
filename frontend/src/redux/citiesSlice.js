import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postCityDB, editCityDB, deleteCityDB } from "../services/servicesCity";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: [],
  },
  reducers: {
    setCities: (state, action) => {
      state.list = action.payload;
    },
    addCity: (state, action) => {
      postCityDB(action.payload);
    },
    editCity: (state, action) => {
      const data = {
        name: action.payload.name,
        country: action.payload.country,
      };
      editCityDB(action.payload._id, data);
    },

    deleteCity: (state, action) => {
      const index = state.list.find((city) => city._id === action.payload);
      state.list.splice(state.list.indexOf(index), 1);
      deleteCityDB(action.payload);
    },
  },
});

export const { setCities, addCity, deleteCity, editCity } = citiesSlice.actions;
export default citiesSlice.reducer;
