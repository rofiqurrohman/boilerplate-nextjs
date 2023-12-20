import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RootState {
  isOnline: boolean;
  isLoggedIn: boolean;
  isWindowVisible: boolean;
}

const initialState: RootState = {
  isOnline: false,
  isLoggedIn: false,
  isWindowVisible: false,
};

export default createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsOnline(state, action: PayloadAction<boolean>) {
      state.isOnline = action.payload;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setWindowVisible(state, action: PayloadAction<boolean>) {
      state.isWindowVisible = action.payload;
    },
  },
});
