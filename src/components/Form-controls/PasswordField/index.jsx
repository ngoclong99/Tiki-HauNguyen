import { FormHelperText } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Controller } from "react-hook-form"

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
}

function PasswordField(props) {
  const { form, name, label, disabled } = props
  const {
    formState: { errors },
    control,
  } = form
  const hasError = !!errors[name]
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    //Controller giúp dễ dàng biding dl

    <FormControl error={hasError} fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <OutlinedInput
            onChange={onChange}
            id={name}
            type={showPassword ? "text" : "password"}
            label={label}
            disabled={disabled}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            error={hasError}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  )
}

export default PasswordField
