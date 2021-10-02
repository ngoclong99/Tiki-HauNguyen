import { Tab, Tabs } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

function ProductSort({ onChange, currentSort }) {
  const handleChangeSort = (event, newSort) => {
    if (onChange) onChange(newSort)
  }

  return (
    <Tabs value={currentSort} indicatorColor="primary" textColor="primary" onChange={handleChangeSort}>
      <Tab label="Thấp tới cao" value="salePrice:ASC" />
      <Tab label="Cao tới thấp" value="salePrice:DESC" />
    </Tabs>
  )
}

export default ProductSort
