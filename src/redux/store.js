import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";
import { reqresApi } from "./api/resApi";
import searchReducer from "./features/getUserSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  userlist: searchReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
    search: searchReducer,
    reqresApi: reqresApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(reqresApi.middleware);
  },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
