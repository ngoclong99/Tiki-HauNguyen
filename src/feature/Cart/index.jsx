import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { cartTotalPriceSelector } from './cartSelecter'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart, removeFormCart } from './cartSlice'

CartFilter.propTypes = {}

function CartFilter(props) {
  const listItems = useSelector((state) => state.cart.CartItems)
  const total = useSelector(cartTotalPriceSelector)
  const dispatch = useDispatch()

  const handleAddProduct = (id) => {
    dispatch(addToCart(id))
  }
  const handleRemoveProduct = (id) => {
    dispatch(removeToCart(id))
  }
  const handleRemoveFormProduct = (id) => {
    dispatch(removeFormCart(id))
  }

  return (
    <div>
      <Typography>Total: {total}</Typography>
      <p>List Products:</p>
      <div>
        {listItems.map((item) => (
          <Card key={item.id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                {item.product.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                {item.quantity}
              </Typography>
              <Button variant="outlined" size="small" onClick={() => handleAddProduct(item.product.id)}>
                +
              </Button>
              <Button variant="outlined" size="small" onClick={() => handleRemoveProduct(item.product.id)}>
                -
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleRemoveFormProduct(item.product.id)}
              >
                Xóa
              </Button>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CartFilter
