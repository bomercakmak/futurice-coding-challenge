import { configureStore } from "@reduxjs/toolkit";
import { earthquakesSlice } from "./slices/earthquakesSlice";
export const store = configureStore({
  reducer: {
    earthquakes: earthquakesSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectEarthquakes = (state: RootState) =>
  state.earthquakes.earthquakes;
