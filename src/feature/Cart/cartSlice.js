import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    CartItems: []
  },
  reducers: {
    showMiniCart: (state) => {
      state.showMiniCart = true
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false
    },

    setToCart: (state, action) => {
      const newItem = action.payload
      const index = state.CartItems.findIndex((item) => item.id === newItem.id)
      if (index >= 0) {
        state.CartItems[index].quantity += newItem.quantity
      } else {
        state.CartItems.push(newItem)
      }
    },
    removeToCart: (state, action) => {
      const id = action.payload
      const index = state.CartItems.findIndex((item) => item.product.id === id)
      if (index >= 0) {
        state.CartItems[index].quantity -= 1
      }
    },
    addToCart: (state, action) => {
      const id = action.payload
      const index = state.CartItems.findIndex((item) => item.product.id === id)
      if (index >= 0) {
        state.CartItems[index].quantity += 1
      }
    },

    removeFormCart: (state, action) => {
      const id = action.payload
      state.CartItems = state.CartItems.filter((item) => Number.parseInt(item.id) !== id)
    }
  }
})

export const { showMiniCart, hideMiniCart, addToCart, removeToCart, setToCart, removeFormCart } =
  cartSlice.actions

export default cartSlice.reducer
