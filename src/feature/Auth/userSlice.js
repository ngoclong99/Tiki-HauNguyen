import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "../../api/userApi"
import StorageKeys from "../../constants/storage-keys"

export const register = createAsyncThunk("users/register", async (payload) => {
  const data = await userApi.register(payload)

  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})
export const login = createAsyncThunk("users/login", async (payload) => {
  const data = await userApi.login(payload)

  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
    setting: {},
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem(StorageKeys.TOKEN)
      localStorage.removeItem(StorageKeys.USER)
      state.current = {}
    },
  },
  extraReducers: {
    // action.payload === data.user
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    },
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
