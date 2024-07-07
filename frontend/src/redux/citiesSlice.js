import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllCities,
  postCityDB,
  editCityDB,
  deleteCityDB,
} from "../services/servicesCity";

// Fetch all cities
export const fetchCities = createAsyncThunk(
  "cities/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllCities();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add a new city
export const addCityAsync = createAsyncThunk(
  "cities/addCity",
  async (city, { rejectWithValue }) => {
    try {
      const newCity = await postCityDB(city);
      return newCity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Edit an existing city
export const editCityAsync = createAsyncThunk(
  "cities/editCity",
  async (city, { rejectWithValue }) => {
    try {
      const updatedCity = await editCityDB(city);
      return updatedCity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a city
export const deleteCityAsync = createAsyncThunk(
  "cities/deleteCity",
  async (cityId, { rejectWithValue }) => {
    try {
      await deleteCityDB(cityId);
      return cityId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCities: (state, action) => {
      state.list = action.payload;
    },
    addCity: (state, action) => {
      state.list.push(action.payload);
    },
    editCity: (state, action) => {
      const index = state.list.findIndex(
        (city) => city._id === action.payload._id
      );
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    deleteCity: (state, action) => {
      state.list = state.list.filter((city) => city._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cities
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add City
      .addCase(addCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit City
      .addCase(editCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.list.findIndex(
          (city) => city._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = { ...state.list[index], ...action.payload };
        }
      })
      .addCase(editCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete City
      .addCase(deleteCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((city) => city._id !== action.payload);
      })
      .addCase(deleteCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCities, addCity, deleteCity, editCity } = citiesSlice.actions;
export default citiesSlice.reducer;

/*
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postCityDB,
  editCityDB,
  deleteCityDB,
  fetchAllCities,
} from "../services/servicesCity";

export const fetchCities = createAsyncThunk(
  "cities/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllCities();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCityAsync = createAsyncThunk(
  "cities/addCity",
  async (city, { rejectWithValue }) => {
    try {
      const newCity = await postCityDB(city);
      return newCity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCityAsync = createAsyncThunk(
  "cities/editCity",
  async (city, { rejectWithValue }) => {
    try {
      const updatedCity = await editCityDB(city);
      return updatedCity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCityAsync = createAsyncThunk(
  "cities/deleteCity",
  async (cityId, { rejectWithValue }) => {
    try {
      await deleteCityDB(cityId);
      return cityId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCities: (state, action) => {
      state.list = action.payload;
    },
    addCity: (state, action) => {
      state.list.push(action.payload);
    },
    editCity: (state, action) => {
      const index = state.list.findIndex(
        (city) => city._id === action.payload._id
      );
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    deleteCity: (state, action) => {
      state.list = state.list.filter((city) => city._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.list.findIndex(
          (city) => city._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = { ...state.list[index], ...action.payload };
        }
      })
      .addCase(editCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCityAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((city) => city._id !== action.payload);
      })
      .addCase(deleteCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCities, addCity, deleteCity, editCity } = citiesSlice.actions;
export default citiesSlice.reducer;

*/
