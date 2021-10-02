import React from "react"
import PropTypes from "prop-types"
import { Box } from "@material-ui/core"
import DOMPurify from "dompurify"

ProductDescription.propTypes = {
  product: PropTypes.object,
}
function ProductDescription({ product = {} }) {
  var clean = DOMPurify.sanitize(product.description)

  return (
    <Box>
      <div dangerouslySetInnerHTML={{ __html: clean }}></div>
    </Box>
  )
}

export default ProductDescription
