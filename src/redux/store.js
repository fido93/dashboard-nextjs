import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
