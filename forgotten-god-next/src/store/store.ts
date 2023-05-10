

import { createSlice, configureStore, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type UserInfo = {
  username: string,
  userId: string,
  userRole: string
}

interface IUserState {
  user: {
    error: string | null,
    userInfo: UserInfo | null
  }
}


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
      error: null,
      userInfo: null,
    }
    
  },
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<UserInfo | null>) => {
      if(!action.payload){
        state.user.userInfo = null
        state.user.error = action.payload
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


export default store