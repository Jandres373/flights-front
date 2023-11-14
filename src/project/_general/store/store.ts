import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userState from '@/project/users/store/userSlice';
import loginState from '../../login/store/loginSlice';

const store = configureStore({
  reducer: {
    userState,
    loginState
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;