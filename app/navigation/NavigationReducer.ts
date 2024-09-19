import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showQuickAccess: false,
  showDrawer: false,
};

const NavReducer = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    showQuickAccess: (state, action) => {
      state.showQuickAccess = !state.showQuickAccess;
    },
    openDrawer: (state) => {
     state.showDrawer = !state.showDrawer
    },
  },
  extraReducers: () => {},
});

export const {showQuickAccess, openDrawer} = NavReducer.actions;

export default NavReducer.reducer;
