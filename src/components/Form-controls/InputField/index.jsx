import { TextField } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import { Controller } from "react-hook-form"

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
}

function InputField(props) {
  const { form, name, label, disabled } = props
  const {
    formState: { errors, touchedFields },
    control,
  } = form
  const hasError = touchedFields[name] || errors[name]
  return (
    //Controller giúp dễ dàng biding dl
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          value={value}
          onChange={onChange}
          label={label}
          disabled={disabled}
          variant="outlined"
          margin="normal"
          fullWidth
          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  )
}

export default InputField
