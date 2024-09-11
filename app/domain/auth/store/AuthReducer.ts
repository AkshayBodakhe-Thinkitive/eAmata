import { createSlice } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "../../../store/constants/StoreConstants";

const initialState = {
  isLoggedIn : false,
  loading : false
}

const AuthReducer = createSlice({
    name : AUTH_REDUCER,
    initialState ,
    reducers : {
      login : (state,action) => {
        state.isLoggedIn = action.payload
      }
    },
    extraReducers : () => {}
})

export default AuthReducer.reducer