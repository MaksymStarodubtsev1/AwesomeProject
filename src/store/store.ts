import { combineReducers, configureStore } from "@reduxjs/toolkit";
import colorSlice from "./color/colorSlice";


const rootReducer = combineReducers({
  theme: colorSlice.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
