import React from "react"
import PropTypes from "prop-types"
import { BaseImgDefault, BaseURL } from "../../../constants"
import { Box } from "@material-ui/core"

ProductThumbnail.propTypes = {
  product: PropTypes.object,
}

function ProductThumbnail({ product = {} }) {
  const thumbnail = product.thumbnail ? `${BaseURL}${product.thumbnail?.url}` : `${BaseImgDefault}/250`

  return (
    <Box>
      <img src={thumbnail} alt={product.name} width="100%" />
    </Box>
  )
}

export default ProductThumbnail
