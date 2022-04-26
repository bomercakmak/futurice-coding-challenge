import { createSlice } from "@reduxjs/toolkit";
import { EarthquakesState } from "../storeModel";

const initialState: EarthquakesState = {
  earthquakes: [],
};

export const earthquakesSlice = createSlice({
  name: "earthquakes",
  initialState,
  reducers: {
    setEarthquakes: (state, action) => {
      state.earthquakes = action.payload;
    },
    sortEarthquakes: (state, action) => {
      switch (action.payload) {
        case "Date":
          state.earthquakes = state.earthquakes.sort(
            (a, b) => b.properties.time - a.properties.time
          );
          break;
        case "Gap":
          state.earthquakes = state.earthquakes.sort(
            (a, b) => b.properties.gap - a.properties.gap
          );
          break;
        case "Sig":
          state.earthquakes = state.earthquakes.sort(
            (a, b) => b.properties.sig - a.properties.sig
          );
          break;
        default:
      }
    },
  },
});

export const { setEarthquakes, sortEarthquakes } = earthquakesSlice.actions;

export default earthquakesSlice.reducer;
