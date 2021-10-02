import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Paper } from '@material-ui/core'
import ProductThumbnail from './../components/ProductThumbnail'
import { useRouteMatch } from 'react-router'
import useProductDetail from '../../../hook/useProductDetail'
import ProductInfo from './../components/ProductInfo'
import AddtoCart from '../components/AddtoCart'
import ProductMenu from '../components/ProductMenu'
import { Route, Switch } from 'react-router-dom'
import ProductDescription from './../components/ProductDescription'
import ProductAddtinal from './../components/ProductAddtinal'
import ProductReviews from '../components/ProductReviews'
import { useDispatch } from 'react-redux'
import { addToCart, setToCart } from '../../Cart/cartSlice'

DetailPage.propTypes = {}

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '350px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },
  right: {
    flex: '1',
    padding: theme.spacing(1.5)
  }
}))

function DetailPage(props) {
  const classes = useStyles()
  const { url } = useRouteMatch()
  const dispatch = useDispatch()

  const {
    params: { productId }
  } = useRouteMatch()

  const { product, loading } = useProductDetail(productId)

  if (loading) {
    return <Box>Loading</Box>
  }

  const handleAddToCart = (values) => {
    const newValues = {
      ...values,
      id: productId,
      product
    }
    dispatch(setToCart(newValues))
  }

  return (
    <Box>
      <Container>
        <Paper elevation={2}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product}></ProductThumbnail>
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product}></ProductInfo>
              <AddtoCart onSubmit={handleAddToCart}></AddtoCart>
            </Grid>
          </Grid>
          <ProductMenu />
          <Switch>
            <Route exact path={url}>
              <ProductDescription product={product} />
            </Route>
            <Route exact path={`${url}/additional`}>
              <ProductAddtinal />
            </Route>
            <Route exact path={`${url}/reviews`}>
              <ProductReviews />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </Box>
  )
}

export default DetailPage
