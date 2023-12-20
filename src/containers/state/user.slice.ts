import { IUser } from '@/interfaces/user/user.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  account: IUser | null;
  token: string | null;
}

const initialState: UserState = {
  account: null,
  token: null,
};

export default createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAccount(state, action: PayloadAction<IUser>) {
      state.account = action.payload;
    },
    setUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});
