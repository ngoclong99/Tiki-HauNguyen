import { createSelector } from 'reselect'

const cartItemSelector = (state) => state.cart.CartItems

const cartQuantitySelector = createSelector(cartItemSelector, (cartItems) => {
  return cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
})

const cartTotalPriceSelector = createSelector(cartItemSelector, (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.product.salePrice, 0)
})

export { cartQuantitySelector, cartTotalPriceSelector }
