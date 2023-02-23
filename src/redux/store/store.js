import { configureStore } from "@reduxjs/toolkit";
import dataVehicleReducer from "../slices/dataVehicleSlice";
export default configureStore({
  reducer: { dataVehicle: dataVehicleReducer },
});
