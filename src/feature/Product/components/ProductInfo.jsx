import { Box, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"

ProductInfo.propTypes = {
  product: PropTypes.object,
}

function ProductInfo({ product = {} }) {
  return (
    <Box>
      <Typography>{product.name}</Typography>
    </Box>
  )
}

export default ProductInfo
