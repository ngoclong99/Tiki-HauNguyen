import { Box, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router-dom"
import { BaseImgDefault, BaseURL } from "./../../../constants/index"

Product.propTypes = {
  product: PropTypes.object,
}

function Product({ product }) {
  const history = useHistory()
  const thumbnail = product.thumbnail ? `${BaseURL}${product.thumbnail?.url}` : `${BaseImgDefault}/250`

  const handleClickProduct = () => {
    history.push(`/products/${product.id}`)
  }

  return (
    <Box padding={1} onClick={handleClickProduct}>
      <img src={thumbnail} alt={product.name} width="100%" height="100%" />
      <Typography>{product.name}</Typography>
      <Typography>
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {product.salePrice}
        </Box>
        {product.promotionPercent > 0 ? `- ${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  )
}

export default Product
