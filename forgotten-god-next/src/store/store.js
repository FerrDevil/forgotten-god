import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUser = createAsyncThunk(
  'getUser',
  async (_, {rejectWithValue}) => {
    try {
      await fetch('http://localhost:5000/auth/refresh', {method: "POST", credentials: "include"})
      const response = await fetch('http://localhost:5000/auth/getUser', { credentials: "include"})
      
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
      isLoading: false,
      userInfo: null,
    }
    
  },
  reducers: {
    setUser: (state) => {
        
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.user.userInfo = null
      state.user.isLoading = true
      state.user.error = null
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user.userInfo = action.payload
      state.user.isLoading = false
      state.user.error = null
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user.userInfo = null
      state.user.isLoading = false
      state.user.error = action.payload
    })
  },
})


const store = configureStore({
  reducer: userStoreSlice.reducer
})


export default store