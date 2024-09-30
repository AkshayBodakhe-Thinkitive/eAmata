import { createSlice } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "../../../store/constants/StoreConstants";

const initialState = {
  isLoggedIn : false,
  loading : false,
  isOnboarded : false
}

const AuthReducer = createSlice({
    name : AUTH_REDUCER,
    initialState ,
    reducers : {
      login : (state,action) => {
        state.isLoggedIn = action.payload
      },
      makeOnboard : (state,action) => {
        state.isOnboarded = action.payload
      }
    },
    extraReducers : () => {}
})

export const {login,makeOnboard} = AuthReducer.actions

export default AuthReducer.reducer