import { createSlice } from "@reduxjs/toolkit";

export const dataVehicleSlice = createSlice({
  name: "dataVehicle",
  initialState: {
    value: [],
  },
  reducers: {
    setDataVehicle2: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataVehicle2 } = dataVehicleSlice.actions;

export default dataVehicleSlice.reducer;
