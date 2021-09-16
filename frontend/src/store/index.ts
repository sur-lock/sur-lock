import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import authReducer, { setUser } from "./authSlice";

const reducers = combineReducers({
	auth: authReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
export { setUser };

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
