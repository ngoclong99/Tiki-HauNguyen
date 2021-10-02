import { Box, FormControlLabel, Typography } from "@material-ui/core"
import Checkbox from "@material-ui/core/Checkbox"
import PropTypes from "prop-types"
import React from "react"

ProductFilterService.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
}

function ProductFilterService({ filters, onChange }) {
  const services = [
    { key: "isPromotion", value: "Khuyến mãi" },
    { key: "isFreeShip", value: "Free ship" },
  ]
  const handleChange = (event) => {
    const { checked, name } = event.target
    if (onChange) onChange({ [name]: checked })
  }

  return (
    <Box mt={2}>
      <Typography variant="subtitle2">Dịch vụ</Typography>
      {services.map((service, index) => (
        <FormControlLabel
          key={service.value}
          control={
            <Checkbox
              color="primary"
              checked={Boolean(filters[service.key])}
              onChange={handleChange}
              name={service.key}
            />
          }
          label={service.value}
        />
      ))}
    </Box>
  )
}

export default ProductFilterService
