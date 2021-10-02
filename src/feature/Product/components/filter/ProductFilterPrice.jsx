import { Box, Button, TextField, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { useState } from "react"

ProductFilterPrice.propTypes = {
  onChange: PropTypes.func,
}

function ProductFilterPrice({ onChange }) {
  const [filter, setFilter] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  })

  const handleChangePrice = (e) => {
    const target = e.target
    setFilter((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmitPrice = () => {
    if (onChange) onChange(filter)
  }

  return (
    <Box>
      <Typography variant="subtitle2">Giá tiền</Typography>
      <TextField
        color="primary"
        value={filter.salePrice_gte}
        name="salePrice_gte"
        onChange={handleChangePrice}
      />
      <TextField
        color="primary"
        value={filter.salePrice_lte}
        name="salePrice_lte"
        onChange={handleChangePrice}
      />
      <Button variant="contained" color="primary" size="small" onClick={handleSubmitPrice}>
        Áp dụng
      </Button>
    </Box>
  )
}

export default ProductFilterPrice
