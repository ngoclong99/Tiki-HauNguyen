import { Box } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import PropTypes from "prop-types"
import React from "react"

ProductCategorySkeleton.propTypes = {
  length: PropTypes.number,
}

function ProductCategorySkeleton({ length }) {
  return (
    <>
      {Array.from(new Array(length)).map((x, index) => (
        <Box padding="0px 5px" key={index}>
          <Skeleton width="100%" />
        </Box>
      ))}
    </>
  )
}

export default ProductCategorySkeleton
