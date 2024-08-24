import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";
import authReducer from "./authSlice";
import itinerariesReducer from "./itinerariesSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    auth: authReducer,
    itineraries: itinerariesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
