import { Box } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import ProductFilterCategory from "./filter/ProductFilterCategory"
import ProductFilterPrice from "./filter/ProductFilterPrice"
import ProductFilterService from "./filter/ProductFilterService"

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
}

function ProductFilters({ filters, onChange }) {
  const handelChangeFilters = (filter) => {
    const newFilter = {
      ...filters,
      ...filter,
    }
    if (onChange) onChange(newFilter)
  }

  const handelChangeCategory = (id) => {
    const filter = { "category.id": id }
    handelChangeFilters(filter)
  }
  const handelChangePrice = (values) => {
    handelChangeFilters(values)
  }
  const handelChangeService = (service) => {
    handelChangeFilters(service)
  }

  return (
    <Box>
      <ProductFilterCategory onChange={handelChangeCategory}></ProductFilterCategory>
      <ProductFilterPrice onChange={handelChangePrice}></ProductFilterPrice>
      <ProductFilterService onChange={handelChangeService} filters={filters}></ProductFilterService>
    </Box>
  )
}

export default ProductFilters
