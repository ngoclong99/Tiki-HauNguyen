import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../feature/Counter/counterSlice"
import userReducer from "../feature/Auth/userSlice"
import cartReducer from "../feature/Cart/cartSlice"

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store
