

import { createSlice, configureStore, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { IUserState, UserInfo } from "./types"
import { useSelector } from 'react-redux'


export const fetchUser = createAsyncThunk(
  'getUser',
  async (_: any, {rejectWithValue}: any) => {
    try {
      await fetch('https://forgotten-god.onrender.com/auth/refresh', {method: "POST", credentials: "include"})
      const response = await fetch('https://forgotten-god.onrender.com/auth/getUser', { credentials: "include"})
      
      if (!response.ok){
        rejectWithValue({user: "Unauthorized"})
      }
          
      const userData = await response.json()
      return userData
  }
  catch(error){
      /* console.log(error) */
  }
  }
)

const userStoreSlice = createSlice({
  name: 'userStore',
  initialState: {
    user:{
      error: false,
      userInfo: null,
    }
    
  },
  reducers: {
    setUser: (state: IUserState, action: PayloadAction< UserInfo | null>) => {
      if(!action.payload){
        state.user.userInfo = null
        state.user.error = true
        return
      }
      state.user.userInfo = action.payload
      state.user.error = null
    },
    deleteUser: (state: IUserState) => {
      state.user.userInfo = null
      state.user.error = null
    }
  },
})
export const {setUser, deleteUser} = userStoreSlice.actions

const store = configureStore({
  reducer: userStoreSlice.reducer
})

export const useUserSelector = () => (useSelector((state : IUserState) => state.user))


export default store