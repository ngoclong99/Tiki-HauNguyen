import { Box, FormHelperText } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import IconButton from "@material-ui/core/IconButton"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons"
import PropTypes from "prop-types"
import React from "react"
import { Controller } from "react-hook-form"

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
}

function QuantityField(props) {
  const { form, name, label, disabled } = props
  const {
    formState: { errors },
    control,
    setValue,
  } = form
  const hasError = !!errors[name]

  return (
    //Controller giúp dễ dàng biding dl

    <FormControl error={hasError} fullWidth variant="outlined" margin="normal">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Box>
            <IconButton
              onClick={() => {
                setValue(name, Number.parseInt(value) - 1)
              }}
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              onChange={onChange}
              id={name}
              value={value}
              type="number"
              label={label}
              disabled={disabled}
              error={hasError}
            />
            <IconButton
              onClick={() => {
                setValue(name, Number.parseInt(value) + 1)
              }}
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  )
}

export default QuantityField
