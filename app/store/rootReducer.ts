import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { AppState } from "./interfaces/AppState";
import AuthReducer from "../domain/auth/store/AuthReducer";
import NavigationReducer from "../navigation/NavigationReducer";


export const rootReducer : Reducer<AppState> = combineReducers({
    auth : AuthReducer,
    nav : NavigationReducer
})